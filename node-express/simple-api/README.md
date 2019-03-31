# Simple API

```bash
# using HTTPie

# http verbs
http -v :3000/ # get by default
http -v post :3000/
http -v put :3000/
http -v delete :3000/

# get url
http -v :3000/user/
http -v :3000/user/url
# http 201 - created
http -v post :3000/user/

# unauthorized
http -v post :3000/profile
# authorized - using http header
http -v post :3000/profile X-Auth:demo

# url params
http -v :3000/user/john
http -v :3000/user/doe
```
