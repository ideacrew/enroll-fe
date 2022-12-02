import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  baseApiUrl = `https://preprod-console-api.cme.openhbx.org`;

  constructor() {
    const [environmentService, client] = window.location.host.split('.');

    const [environmentName, service] = environmentService.split('-');

    console.log({ env: environmentName, service, client });

    // this.baseApiUrl = `https://${env}-${service}-api.${client}.openhbx.org`;
  }
}
