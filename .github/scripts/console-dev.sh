export AWS_MAX_ATTEMPTS=10

cd dist/apps/console
aws s3 sync . s3://cme-console-preprod/ --delete
invalidationId=`AWS_MAX_ATTEMPTS=999 aws cloudfront create-invalidation --distribution-id E5RER2GERTJUC --output text --query 'Invalidation.Id' --paths '/*'`
aws cloudfront wait invalidation-completed --distribution-id E5RER2GERTJUC --id ${invalidationId}
