aws cloudformation deploy --template-file template.yml --stack-name aws-twitter-demo --parameter-overrides BaseUrl=bev-ticketing-ecomapp.xyz AppUrl=www.bev-ticketing-ecomapp.xyz AcmCertArn=arn:aws:acm:us-east-1:268919435141:certificate/62302602-c86e-4f88-a272-5a855acd136f

aws cloudformation describe-stacks --stack-name aws-twitter-demo --query "Stacks[0].Outputs[?OutputKey==`DistributionId` || OutputKey==`AppBucket`]"

aws s3 sync app/build s3://aws-twitter-demo-appbucket-1spukr19p6mb4 && aws cloudfront create-invalidation --distribution-id E1KQC1N76LWG9H --paths /