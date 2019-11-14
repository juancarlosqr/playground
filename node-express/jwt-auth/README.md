# Authenticate a Node ES6 API with JSON Web Tokens

[Authenticate a Node ES6 API with JSON Web Tokens](https://scotch.io/tutorials/authenticate-a-node-es6-api-with-json-web-tokens#toc-express-middleware)

[NodeJS - JWT Authentication Tutorial with Example API](http://jasonwatmore.com/post/2018/08/06/nodejs-jwt-authentication-tutorial-with-example-api)
## Folders & files

```shell
$ mkdir jwt-auth
$ cd jwt-auth
$ mkdir controllers models routes
$ touch controllers/users.js models/users.js routes/index.js routes/users.js
$ touch utils.js config.js index.js

$ npm install express body-parser bcrypt dotenv jsonwebtoken mongoose  --save
$ npm install morgan nodemon cross-env  --save-dev
```