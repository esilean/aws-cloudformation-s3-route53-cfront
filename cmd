# Create cloudformation stack
aws cloudformation deploy --template-file cloudformation/template.yml --stack-name aws-twitter-demo --parameter-overrides BaseUrl=bev-ticketing-ecomapp.xyz AppUrl=www.bev-ticketing-ecomapp.xyz AcmCertArn=arn:aws:acm:us-east-1:268919435141:certificate/62302602-c86e-4f88-a272-5a855acd136f

# Get output values from stack
aws cloudformation describe-stacks --stack-name aws-twitter-demo --query "Stacks[0].Outputs[?OutputKey==`DistributionId` || OutputKey==`AppBucket`]"

# Send files to S3
aws s3 sync app/build s3://bev-ticketing-ecomapp.xyz && aws cloudfront create-invalidation --distribution-id E2HCNZDF6B1Z15 --paths /

# Remove files from S3
aws s3 rm s3://bev-ticketing-ecomapp.xyz --recursive
# Delete Stack
aws cloudformation delete-stack --stack-name aws-twitter-demo