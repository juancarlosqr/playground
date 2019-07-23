const path = require('path');
const firebase = require('firebase-admin');
const serviceAccount = require(path.join(__dirname, 'admin-social-connect-4pp.json'));

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

exports.firestore = firebase.firestore()
