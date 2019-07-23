#!/usr/bin/env python3

import requests

if __name__ == '__main__':
    r = requests.get('https://api.github.com/events')

    for event in r.json():
        print(event['repo']['name'])
