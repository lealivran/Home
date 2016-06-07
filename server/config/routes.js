"use strict";
var Router = require("koa-router");
var annonceCtrl = require("../lib/api/annonces");


module.exports = function(app) {
  // register functions
  var router = new Router();
  // secured routes
  router.get("/annonces", annonceCtrl.getAllAnnonces);
  router.post("/annonce", annonceCtrl.createAnnonce);
  app.use(router.routes());
};
