"use strict";
const Router = require("koa-router");
const koaBody = require('koa-body')();// body parser
const annonceCtrl = require("../lib/api/annonces");
const userCtrl = require("../lib/api/user");


module.exports = function(app) {
  // register functions
  var router = new Router();
  // open routes
  //annonces
  router.get("/annonces", annonceCtrl.getAllAnnonces);
  router.post("/annonce",koaBody, annonceCtrl.createAnnonce);
  router.get("/last/annonce", annonceCtrl.getLastAnnonce);
  router.get("/annonces/:city", annonceCtrl.getLastAnnonce);
  //user and auth
  router.get("/auth", userCtrl.getCurrentUser);
  router.post("/auth", userCtrl.signIn);
  router.all("/signout", userCtrl.signOut);
  router.post("/signup",koaBody, userCtrl.createUser);
  // secure   admin routes
  router.get("users", userCtrl.getAllUser);
  // secure    routes
  // router.get("users", userCtrl.getAllUser);
  app.use(router.routes());
};
