#!/bin/sh

bucket=$1
channel=$2
date=$3
files=files.txt
log=log.txt
count=10

rm $files $log

echo "CHANNELS"
aws s3 ls s3://$bucket 
aws s3 ls s3://$bucket/$channel/$date/ | awk '{print $4}' > $files

while read line; do
    last=$line
done < $files

echo "Last $count files on S3:"
tail -$count $files

aws s3api get-object --bucket $bucket --key $channel/$date/$last $log

echo "\nFetched file $last"
echo "\nLOG"
cat $log
