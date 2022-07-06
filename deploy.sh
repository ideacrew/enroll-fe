APPS_JSON_ARRAY=$(
  node -e "console.log(
    JSON.stringify(
      Array.from(
        new Array('coverme', 'dchbx')
      )
    )
  );"
)
echo $APPS_JSON_ARRAY
