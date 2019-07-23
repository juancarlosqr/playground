#!/usr/bin/env python3
import os
import sys
import glob
import boto3

directory_name = 'tmp'

def clean_folder():
  files = glob.glob(f'{directory_name}/*')
  for f in files:
      os.remove(f)
  print(f'directory {directory_name} cleaned')

def setup_folder():
  if not os.path.exists(directory_name):
    os.mkdir(directory_name)
    print(f'directory {directory_name} created')
  else:
    clean_folder()

def get_files(option):
  if len(sys.argv) < 4:
    print(f'Usage: python3 s3.py {option} BUCKET KEY_PREFIX|KEY')
    sys.exit()
  s3 = boto3.resource('s3')
  bucket_name = sys.argv[2]
  key_prefix = sys.argv[3]
  bucket = s3.Bucket(bucket_name)
  files = bucket.objects.filter(Prefix=key_prefix)
  return bucket_name, files

def download_files(bucket_name, files):
  s3 = boto3.resource('s3')
  for obj in files:
    file_name = os.path.basename(obj.key)
    target = f'{directory_name}/{file_name}'
    s3.Bucket(bucket_name).download_file(obj.key, target)
    print(target)

def main():
  if len(sys.argv) < 2:
    print('Usage: python3 s3.py OPTION ...')
    print('Available options: buckets, clean, download, files, folders')
    sys.exit()

  option = sys.argv[1]

  if (option == 'buckets'):
    s3 = boto3.resource('s3')
    for bucket in s3.buckets.all():
      print(bucket.name)
    sys.exit()

  if (option == 'clean'):
    clean_folder()
    sys.exit()

  if (option == 'download'):
    setup_folder()
    bucket_name, files = get_files(option)
    download_files(bucket_name, files)
    sys.exit()

  if (option == 'files'):
    bucket_name, files = get_files(option)
    for obj in files:
      print(obj.key)
    sys.exit()

  if (option == 'folders'):
    if len(sys.argv) < 3:
      print('Usage: python3 s3.py folders BUCKET')
      sys.exit()
    client = boto3.client('s3')
    bucket_name = sys.argv[2]
    paginator = client.get_paginator('list_objects')
    result = paginator.paginate(Bucket=bucket_name, Delimiter='/')
    for prefix in result.search('CommonPrefixes'):
      print(prefix.get('Prefix')[:-1])
    sys.exit()

  if (option == 'test'):
    if len(sys.argv) < 3:
      print('Usage: python3 s3.py test BUCKET')
      sys.exit()
    client = boto3.client('s3')
    bucket_name = sys.argv[2]
    paginator = client.get_paginator('list_objects')
    result = paginator.paginate(Bucket=bucket_name, Delimiter='/')
    for prefix in result:
      print(prefix)
    sys.exit()

  print('option not found')

if __name__ == "__main__":
  main()
