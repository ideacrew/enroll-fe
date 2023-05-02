const TypeDoc = require('typedoc');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

function findLibProjects() {
  const projFileGlob = glob.GlobSync('libs/**/project.json');
  const projectSettings = new Array();
  let baseDir = undefined;
  for (const f of projFileGlob.found) {
    baseDir = path.dirname(f);
    let fileContent = fs.readFileSync(f).toString();
    let config = JSON.parse(fileContent);
    let name = config.name;
    let sourceRoot = config.sourceRoot;
    let indexSrcPath = path.join(sourceRoot, 'index.ts');
    let tsConfigPath = path.join(baseDir, 'tsconfig.lib.json');
    let readMePath = path.join(baseDir, 'README.md');
    if (config.projectType == 'library') {
      if (fs.existsSync(indexSrcPath) && fs.existsSync(indexSrcPath)) {
        let readmeSetting = undefined;
        if (fs.existsSync(readMePath)) {
          readmeSetting = readMePath;
        }
        projectSettings.push({
          name: name,
          tsconfig: tsConfigPath,
          entryPoints: [indexSrcPath],
          readme: readmeSetting,
        });
      }
    }
  }

  return projectSettings;
}

function referenceLib(name, path) {
  return {
    name: name,
    tsconfig: path + '/tsconfig.lib.json',
    entryPoints: [path + '/src/index.ts'],
  };
}

function referenceApp(name, path) {
  return {
    name: name,
    tsconfig: path + '/tsconfig.app.json',
    entryPoints: [path + '/src/app/app.module.ts'],
    readme: undefined,
  };
}

function docProject(proj) {
  const newapp = new TypeDoc.Application();
  newapp.options.addReader(new TypeDoc.TSConfigReader());
  newapp.bootstrap({
    name: proj.name,
    tsconfig: proj.tsconfig,
    entryPoints: proj.entryPoints,
  });
  console.log(`Documenting ${proj.name}...`);
  const project = newapp.convert();
  REFLECTION_ID = 0;
  return newapp.serializer.projectToObject(project, process.cwd());
}

async function buildDocs(appName, projectList) {
  const libs = findLibProjects();
  const app = new TypeDoc.Application();
  app.options.addReader(new TypeDoc.TSConfigReader());
  app.bootstrap({
    name: appName,
    entryPointStrategy: 'packages',
  });
  projectList.push(...libs);
  const projects = projectList.map((proj) => docProject(proj));

  console.log('Merging documents...');
  const result = app.deserializer.reviveProjects(appName, projects);
  app.trigger(TypeDoc.Application.EVENT_PROJECT_REVIVE, result);
  await app.generateDocs(result, 'docs');
}

module.exports = {
  buildDocs: buildDocs,
  referenceApp: referenceApp,
  referenceLib: referenceLib,
};
