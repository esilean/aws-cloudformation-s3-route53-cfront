# AWS React App

- AWS Cloudformation
- AWS Cloudfront
- AWS Route 53
- AWS S3

#### Create Cloudformation stack

```
aws cloudformation deploy --template-file cloudformation/template.yml \
    --stack-name aws-twitter-demo \
    --parameter-overrides \
    BaseUrl=bev-ticketing-ecomapp.xyz \
    AppUrl=www.bev-ticketing-ecomapp.xyz \
    AcmCertArn=arn:aws:acm:us-east-1:268919435141:certificate/62302602-c86e-4f88-a272-5a855acd136f
```
