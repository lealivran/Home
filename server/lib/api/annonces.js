"use strict";
const Annonce = require("../models/annonce") ;

exports.getAllAnnonces = function *() {
  let annonces = yield Annonce.find().exec();
  if (!annonces) {

  }
  this.body = { data: annonces };
};
exports.createAnnonce= function *() {
  if (!this.request.body) {
    this.throw("The body is empty", 400);
  }
  if (!this.request.body.title) {
    this.throw("Missing title", 400);
  }
  if (!this.request.body.description) {
    this.throw("Missing password", 400);
  }
  if (!this.request.body.vente) {
    this.throw("Missing title", 400);
  }
  if (!this.request.body.price) {
    this.throw("Missing password", 400);
  }
  if (!this.request.body.pictures) {
    this.throw("Missing title", 400);
  }
  if (!this.request.body.furnished) {
    this.throw("Missing password", 400);
  }
  if (!this.request.body.area) {
    this.throw("Missing title", 400);
  }
  if (!this.request.body.orientation) {
    this.throw("Missing password", 400);
  }
  if (!this.request.body.type) {
    this.throw("Missing title", 400);
  }
  if (!this.request.body.address) {
    this.throw("Missing password", 400);
  }
  if (!this.request.body.features) {
    this.throw("Missing password", 400);
  }
  // try {
  //   var user = new User({ username: this.request.body.username, password: this.request.body.password });
  //   user = yield user.save();
  //   yield this.login(user);
  // } catch (err) {
  //   this.throw(err);
  // }
  // 
  // this.status = 200;
  // this.body = { user: this.passport.user };
};
