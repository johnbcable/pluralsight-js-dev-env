
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




//  Start up web server
app.listen(port, function( err ) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});

