const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/users");
const connUri = process.env.MONGO_LOCAL_CONN_URL;
const connOptions = {
  useNewUrlParser: true
};

module.exports = {
  add: (req, res) => {
    mongoose.connect(connUri, connOptions, err => {
      let result = {};
      let status = 201;
      if (!err) {
        const { username, password } = req.body;
        const user = new User({ username, password }); // document = instance of a model
        // TODO: We can hash the password here before we insert instead of in the model
        user.save((err, user) => {
          if (!err) {
            result.status = status;
            result.result = user;
          } else {
            status = 500;
            result.status = status;
            result.message = "error saving";
            result.error = err;
          }
          res.status(status).send(result);
        });
      } else {
        status = 500;
        result.status = status;
        result.error = err;
        result.message = "error connecting";
        res.status(status).send(result);
      }
    });
  },
  login: (req, res) => {
    const { username, password } = req.body;

    mongoose.connect(connUri, connOptions, err => {
      let result = {};
      let status = 200;
      if (!err) {
        User.findOne({ username }, (err, user) => {
          if (!err && user) {
            // We could compare passwords in our model instead of below
            bcrypt
              .compare(password, user.password)
              .then(match => {
                if (match) {
                  // Create a token
                  const payload = { username };
                  const secret = process.env.JWT_SECRET;
                  const options = { expiresIn: "1d", issuer: "example.com" };
                  const token = jwt.sign(payload, secret, options);
                  result.token = token;
                  result.status = status;
                  result.result = {
                    _id: user._id,
                    username
                  };
                } else {
                  status = 401;
                  result.status = status;
                  result.error = "Authentication error";
                }
                res.status(status).send(result);
              })
              .catch(err => {
                status = 500;
                result.status = status;
                result.error = err;
                result.message = "error comparing hash";
                res.status(status).send(result);
              });
          } else {
            status = 404;
            result.status = status;
            result.error = err;
            result.message = "error fetching";
            res.status(status).send(result);
          }
        });
      } else {
        status = 500;
        result.status = status;
        result.error = err;
        result.message = "error connecting";
        res.status(status).send(result);
      }
    });
  },
  getAll: (req, res) => {
    mongoose.connect(connUri, connOptions, err => {
      let result = {};
      let status = 200;
      if (!err) {
        const payload = req.decoded;
        // TODO: Log the payload here to verify that it's the same payload
        //  we used when we created the token
        // console.log('PAYLOAD', payload);
        if (payload && payload.username === "admin") {
          User.find({}, (err, users) => {
            if (!err) {
              result.status = status;
              result.result = users;
            } else {
              status = 500;
              result.status = status;
              result.error = err;
              result.message = "error fetching";
            }
            res.status(status).send(result);
          });
        } else {
          status = 401;
          result.status = status;
          result.error = `Authentication error`;
          res.status(status).send(result);
        }
      } else {
        status = 500;
        result.status = status;
        result.error = err;
        result.message = "error connecting";
        res.status(status).send(result);
      }
    });
  }
};
