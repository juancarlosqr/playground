# aws-logs

__Usage__

```sh
# activate/deactivate conda env
conda activate py3
conda deactivate

# clean tmp folder
./s3.py clean

# list buckets
./s3.py buckets

# list root folders of a bucket
./s3.py folders BUCKET_NAME

# test to list folders of a bucket
./s3.py test BUCKET_NAME

# list files of a bucket
./s3.py files BUCKET_NAME FILE_OR_PREFIX

# download file(s) of a bucket
./s3.py download BUCKET_NAME FILE_OR_PREFIX
```
