"use strict";
const Router = require("koa-router");
const koaBody = require('koa-body')();// body parser
const annonceCtrl = require("../lib/api/annonces");
const userCtrl = require("../lib/api/user");


module.exports = function(app) {
  // register functions
  var router = new Router();
  // open routes
  router.get("/annonces", annonceCtrl.getAllAnnonces);
  router.post("/annonce",koaBody, annonceCtrl.createAnnonce);

  // secure routes
  router.get("users", userCtrl.getAllUser);
  app.use(router.routes());
};
