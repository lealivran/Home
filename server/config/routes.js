"use strict";
const Router = require("koa-router");
const koaBody = require('koa-body')({multipart:true});// body parser
const annonceCtrl = require("../lib/api/annonces");
const userCtrl = require("../lib/api/user");
const  secured = function *(next) {
  if (this.isAuthenticated()) {
    yield next;
  } else {
    this.status = 401;
  }
}
// ------------------------------------
// JWT Middleware
// ------------------------------------
const auth = function *(next) {
  try {
    yield next; //Attempt to go through the JWT Validator
  } catch(e) {
    if (e.status == 401 ) {
      // Prepare response to user.
      this.status = e.status;
      this.body = 'NO TOKEN , NO CHOCOLATE'
    } else {
      throw e; // Pass the error to the next handler since it wasn't a JWT error.
    }
  }
};

module.exports = function(app) {
  // register functions
  var router = new Router();
  router.use(function *(next) {
    this.type = "json";
    yield next;
  });
  // open routes
  //annonces
  router.get("/annonces", annonceCtrl.getAllAnnonces);
  router.post("/annonce",koaBody, annonceCtrl.createAnnonce);
  router.get("/last/annonces", annonceCtrl.getLastAnnonce);
  router.get("/annonces/:city", annonceCtrl.getAnnoncesByCity);
  router.get("/search/annonces", koaBody, annonceCtrl.getAnnonces);
  //user and auth
  router.get("/auth", userCtrl.getCurrentUser);
  router.post("/auth",koaBody, userCtrl.signIn);
  router.post("/signup",koaBody, userCtrl.createUser);
  // secure   admin routes
  // secure    routes
  router.get("users", userCtrl.getAllUser);
  app.use(router.routes());
};
