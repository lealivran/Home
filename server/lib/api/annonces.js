"use strict";
const Annonce = require("../models/annonce") ;

exports.getAllAnnonces = function *() {
  let annonces = yield Annonce.find().exec();
  if (!annonces) {

  }
  this.body = { data: annonces };
};
exports.createAnnonce= function *() {
  console.log(this.request.body);
  if (!this.request.body) {
    this.throw("The body is empty", 400);
  }
  if (!this.request.body.title) {
    this.throw("Missing title", 400);
  }
  if (!this.request.body.description) {
    this.throw("Missing description", 400);
  }
  if (!this.request.body.vente) {
    this.throw("Missing vente", 400);
  }
  if (!this.request.body.price) {
    this.throw("Missing price", 400);
  }
  // if (!this.request.body.pictures) {
  //   this.throw("Missing title", 400);
  // }
  if (!this.request.body.furnished) {
    this.throw("Missing furnished", 400);
  }
  if (!this.request.body.area) {
    this.throw("Missing area", 400);
  }
  if (!this.request.body.orientation) {
    this.throw("Missing orientation", 400);
  }
  if (!this.request.body.type) {
    this.throw("Missing type", 400);
  }
  if (!this.request.body.address) {
    this.throw("Missing address", 400);
  }
  if (!this.request.body.features) {
    this.throw("Missing features", 400);
  }
  try {
    let annonce = new Annonce(this.request.body);
    let   savedAnnonce = yield annonce.save();
    this.status = 200;
    this.body = { annonce: savedAnnonce };
  } catch (err) {
    this.throw(err);
  }


};
