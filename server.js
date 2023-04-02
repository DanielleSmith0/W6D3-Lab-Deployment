const express = require("express");

const app = express();
app.use(express.json());

app.use(express.static(`${__dirname}/../public`));

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'c31a6e6f6e90426297ddcfc64e472520',
  captureUncaught: true,
  captureUnhandledRejections: true,
});

rollbar.log("howdy")

app.listen(4321, () => {
    console.log("up on 4321")
});