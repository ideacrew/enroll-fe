export AWS_MAX_ATTEMPTS=10

cd dist/apps/slcsp-calculator
aws s3 sync --acl public-read . s3://dev-slcsp-calculator-cme/ --delete
invalidationId=`AWS_MAX_ATTEMPTS=999 aws cloudfront create-invalidation --distribution-id E25P6ELTA2CD2H --output text --query 'Invalidation.Id' --paths '/*'`
aws cloudfront wait invalidation-completed --distribution-id E25P6ELTA2CD2H --id ${invalidationId}
