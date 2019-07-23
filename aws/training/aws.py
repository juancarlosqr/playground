#!/usr/bin/env python3

import boto3
import requests

# Let's use Amazon S3
s3 = boto3.resource('s3')
# Now that you have an s3 resource, you can make requests and process responses from the service. The following uses the buckets collection to print out all bucket names:
s3Client = boto3.client('s3')

bucket_name = 'aws-training'
key_name = 'notes.txt'
stream_name = 'jc-streaming'

# sqs
queue_name = 'jcqueue'

def list_buckets():
    # Print out bucket names
    print('hi')
    for bucket in s3.buckets.all():
        print(bucket.name)

#It's also easy to upload and download binary data. For example, the following uploads a new file to S3. It assumes that the bucket my-bucket already exists:
def upload_image():
    # Upload a new file
    data = open('img/akademie.jpeg', 'rb')
    s3.Bucket(bucket_name).put_object(Key='jc-akademie.jpeg', Body=data)

def get_object():
    obj = s3.Object(bucket_name=bucket_name, key=key_name)
    response = obj.get()
    data = response['Body'].read()
    print(data)

def create_presigned_url():
    url = s3Client.generate_presigned_url(
        ClientMethod='get_object',
        Params={
            'Bucket': bucket_name,
            'Key': key_name
        }
    )
    response = requests.get(url)
    print(url)
    print(response.status_code)
    print(response.text)
    print(response.headers['content-type'])

def create_stream():
    client = boto3.client('kinesis')
    response = client.create_stream(
        StreamName = stream_name,
        ShardCount = 1
    )
    print(response)
    '''
    {'ResponseMetadata': {'RequestId': 'fb755d47-93fd-529c-a865-d94af2fbbc06', 'HTTPStatusCode': 200, 'HTTPHeaders': {'server': 'Apache-Coyote/1.1', 'x-amzn-requestid': 'fb755d47-93fd-529c-a865-d94af2fbbc06', 'x-amz-id-2': 'Zchs+SjD1fWUwOdaToqceseX+hckrVB+D82IOguqjL53BXPTcZ4apmOG1F4XhGEYcAxMlAlMvzJyYhmGJJhqrChyJsXchO0I', 'content-type': 'application/x-amz-json-1.1', 'content-length': '0', 'date': 'Wed, 28 Feb 2018 10:17:48 GMT'}, 'RetryAttempts': 0}}
    '''

def write_kinesis():
    client = boto3.client('kinesis')
    response = client.put_record(
        StreamName = stream_name,
        Data = b'having fun with kinesis!!',
        PartitionKey = 'q1w2e3r4t5',
    )
    print(response)
    '''
    {'ShardId': 'shardId-000000000000', 'SequenceNumber': '49582144730299849225116662843750062341849309368654233602', 'ResponseMetadata': {'RequestId': 'e9ad3045-c539-5010-babd-b4a00b1cb6ce', 'HTTPStatusCode': 200, 'HTTPHeaders': {'server': 'Apache-Coyote/1.1', 'x-amzn-requestid': 'e9ad3045-c539-5010-babd-b4a00b1cb6ce', 'x-amz-id-2': 'YqEBGWcfbhLUFe8cvRF6DZkgzcVxISKNIIxvPVmcweX3CKC7rRVZ1IwWUBnNfStZSD70qn6cSjPhn23QGu3BokzdlTy16dIi', 'content-type': 'application/x-amz-json-1.1', 'content-length': '110', 'date': 'Wed, 28 Feb 2018 10:21:24 GMT'}, 'RetryAttempts': 0}}
    '''

def read_kinesis():
    client = boto3.client('kinesis')
    iterator = client.get_shard_iterator(
        StreamName = stream_name,
        ShardId = 'shardId-000000000000',
        ShardIteratorType = 'TRIM_HORIZON',
        #ShardIteratorType = 'LATEST',
        #ShardIteratorType = 'AFTER_SEQUENCE_NUMBER',
        #ShardIteratorType = 'AT_SEQUENCE_NUMBER',
        #StartingSequenceNumber = '49582144730299849225116662843750062341849309368654233602'
    )
    print(iterator)
    '''
    {'ShardIterator': 'AAAAAAAAAAEK4dd7lfS18hUO7wpEymOUIoSR/+USB0+1zO1oFQI4ouALtx3WRnK0zJ7WFokPOoOFAbNU1rMYQcRISP01f6sYzZU8XNMhqA1coo/HcUKQrtI8o1IjjEv6/xHbiP4rffxpn3MYi6jHKSfwPej7h7a7C5PDfKN9+tFtsqkwFFh/CgqErdqseqldnakqxLtOs/rzhw07cCw3K5Yb/LM3qPiW', 'ResponseMetadata': {'RequestId': 'ececd11d-5fdf-3dae-bffc-572e68c0e36b', 'HTTPStatusCode': 200, 'HTTPHeaders': {'server': 'Apache-Coyote/1.1', 'x-amzn-requestid': 'ececd11d-5fdf-3dae-bffc-572e68c0e36b', 'x-amz-id-2': 'Gqo97KPfXjMKVoArnHQXKsO89KKxotFSS1HsxhZMzvEWpUuxBjqjd5DeZt+Ehyb3qhTr6Z/dxuzUWBYcNQWkNgq3DOTWTYrq', 'content-type': 'application/x-amz-json-1.1', 'content-length': '244', 'date': 'Wed, 28 Feb 2018 10:26:59 GMT'}, 'RetryAttempts': 0}}
    '''
    response = client.get_records(
        ShardIterator=iterator['ShardIterator'],
        Limit=100
    )
    print(len(response['Records']))
    for record in response['Records']:
        print(record['Data'])

def delete_stream():
    client = boto3.client('kinesis')
    response = client.delete_stream(
        StreamName=stream_name
    )
    print(response)

def create_queue():
    sqs = boto3.resource('sqs')
    queue = sqs.create_queue(
        QueueName=queue_name,
        Attributes={
            'DelaySeconds': '5'
        }
    )
    print(queue.url)
    print(queue.attributes.get('DelaySeconds'))

def delete_queue():
    client = boto3.client('sqs')
    response = client.delete_queue(
        QueueUrl='https://eu-west-1.queue.amazonaws.com/232604987375/jcqueue'
    )
    print(response)

if __name__ == '__main__':
    '''
    CLI commands:
    aws s3 cp --source-region=us-west-2 s3://us-west-2-aws-training/awsu-ilt/AWS-100-DEV/v2.1/binaries/input/lab-6-lambda/DrugAdverseEvents_September.txt s3://st-aws-jc-input/DrugAdverseEvents_September.txt

    aws s3 cp --source-region=us-west-2 s3://us-west-2-aws-training/awsu-ilt/AWS-100-DEV/v2.1/binaries/input/lab-6-lambda/DrugAdverseEvents_October.txt s3://st-aws-jc-input/DrugAdverseEvents_October.txt

    aws s3 ls s3://st-aws-jc-output
    '''
    #list_buckets()
    #upload_image()
    #get_object()
    #create_presigned_url()
    #create_stream()
    #write_kinesis()
    #read_kinesis()
    #delete_stream()
    #create_queue()
    #delete_queue()
