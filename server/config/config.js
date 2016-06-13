"use strict";
var path = require("path");
var _ = require("lodash");

var env = process.env.NODE_ENV = process.env.NODE_ENV || "development";

var base = {
  app: {
    root: path.normalize(path.join(__dirname, "/..")),
    env: env,
  },
};

var specific = {
  development: {
    app: {
      port: 3000,
      name: "Home - Dev",
      keys: [ "38ba4e028d32464afd59bc1ac97a5f966e8fb65f" ],
    },
    mongo: {
      url: 'mongodb://lea:supdeweb@ds011893.mlab.com:11893/homesdw',
    },
  },
  test: {
    app: {
      port: 3001,
      name: "Home - Test",
      keys: [ "38ba4e028d32464afd59bc1ac97a5f966e8fb65f" ],
    },
    mongo: {
      url: 'mongodb://lea:supdeweb@ds011893.mlab.com:11893/homesdw',
    },
  },
  production: {
    app: {
      port: process.env.PORT || 3000,
      name: "Home",
    },
    mongo: {
      url: 'mongodb://lea:supdeweb@ds011893.mlab.com:11893/homesdw',
    },
  },
};

module.exports = _.merge(base, specific[env]);
