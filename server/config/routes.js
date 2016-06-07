"use strict";
const Router = require("koa-router");
const koaBody = require('koa-body')();
const annonceCtrl = require("../lib/api/annonces");


module.exports = function(app) {
  // register functions
  var router = new Router();
  // secured routes
  router.get("/annonces", annonceCtrl.getAllAnnonces);
  router.post("/annonce",koaBody, annonceCtrl.createAnnonce);
  app.use(router.routes());
};
