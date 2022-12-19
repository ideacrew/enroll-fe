cd dist/apps/slcsp-calculator
aws s3 sync --acl public-read . s3://slcsp-calculator-cme/ --delete
invalidationId=`AWS_MAX_ATTEMPTS=999 aws cloudfront create-invalidation --distribution-id E3DAFP9MLBBRM9 --output text --query 'Invalidation.Id' --paths '/*'`
aws cloudfront wait invalidation-completed --distribution-id E3DAFP9MLBBRM9 --id ${invalidationId}
