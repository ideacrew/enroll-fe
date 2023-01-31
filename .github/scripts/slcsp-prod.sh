cd dist/apps/slcsp-calculator
aws s3 sync --acl public-read . s3://cme-slcsp-calculator-prod/ --delete
invalidationId=`AWS_MAX_ATTEMPTS=999 aws cloudfront create-invalidation --distribution-id E1HFKIGE662X1V --output text --query 'Invalidation.Id' --paths '/*'`
aws cloudfront wait invalidation-completed --distribution-id E1HFKIGE662X1V --id ${invalidationId}
