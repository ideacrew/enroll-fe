export AWS_MAX_ATTEMPTS=10

cd dist/apps/console
aws s3 sync . s3://$CONSOLE_BUCKET_PROD/ --delete
invalidationId=`AWS_MAX_ATTEMPTS=999 aws cloudfront create-invalidation --distribution-id $CONSOLE_DISTRIBUTION_ID_PROD --output text --query 'Invalidation.Id' --paths '/*'`
aws cloudfront wait invalidation-completed --distribution-id $CONSOLE_DISTRIBUTION_ID_PROD --id ${invalidationId}
