
// Using ES6 import and const

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;    // default port to use for our app
const app = express();

app.use(compression());
app.use(express.static('dist'))
// Routes

app.get('/', function ( req, res ) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function ( req, res ) {
  // Hard coding to pretend this has come from a database
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email":"bob@gmail.com"},
    {"id": 2, "firstName": "Tammy", "lastName": "Norton", "email":"tnorton@yahoo.com"},
    {"id": 3, "firstName": "Tina", "lastName": "Lee", "email":"lee.tina@hotmail.com"}
    ]);
});





//  Start up web server
app.listen(port, function( err ) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});

