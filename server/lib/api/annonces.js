"use strict";
const Annonce = require("../models/annonce") ;

exports.getAllAnnonces = function *() {
  let annonces = yield Annonce.find().exec();
  if (!annonces) {
    this.throw(" can't find any annonce", 400);
  }
  this.body = { data: annonces };
};

exports.getAnnonce = function *() {
  console.log(this.params.id);
  if (!this.params.id) {
    this.throw("Missing id", 400);
  }
  let annonce = yield Annonce.findById(this.params.id).exec();
  if (!annonce) {
    this.throw(" can't find any annonce", 400);
  }
  this.body = { data: annonce };
};

exports.getLastAnnonce = function*(){
  let annonces = yield Annonce.find({}).sort({date: 'desc'}).exec();
  if (!annonces) {
    this.throw(" can't find any annonce", 400);
  }
  let lastAnnonces = annonces.slice(0, 3)
  this.body = { data: lastAnnonces };
}

exports.getAnnoncesByCity = function*(){
  let annonces = yield Annonce.find({address:{city: this.params.city}}).sort({price: 'asc'}).exec();
  if (!annonces) {
    this.throw(" can't find any annonce for this city", 400);
  }
  this.body = { data: annonces };
}
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
