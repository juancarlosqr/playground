const Instagram = require('node-instagram').default;

const callback = 'http://localhost:3000/auth/instagram/callback'

const provider = (accessToken = null) => {
  let options = {
    clientId: process.env.API_INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.API_INSTAGRAM_CLIENT_SECRET,
  };
  if (accessToken) {
    options.accessToken = accessToken;
  }
  return new Instagram(options);
}

exports.callback = callback
exports.provider = provider
