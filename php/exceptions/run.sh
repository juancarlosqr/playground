#!/bin/sh

docker run -it --rm --name php-exceptions-app -v "$PWD":/app -w /app php:7.2-cli php ./script.php
