
// Using ES6 import and const

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;    // default port to use for our app
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// Routes

app.get('/', function ( req, res ) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});




//  Start up web server
app.listen(port, function( err ) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});

