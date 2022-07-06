APPS=$(
  node -e "npx nx print-affected --target=build --select=projects;"
)
echo $APPS
APPS_JSON_ARRAY=$(
  node -e "console.log(
    JSON.stringify(
      new Array('coverme', 'dchbx')
    )
  );"
)
echo $APPS_JSON_ARRAY
