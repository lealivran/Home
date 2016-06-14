"use strict";
const Annonce = require("../models/annonce") ;

exports.getAllAnnonces = function *() {
  let annonces = yield Annonce.find().exec();
  if (!annonces) {
    this.throw(" can't find any annonce", 400);
  }
  this.body = { data: annonces };
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
exports.getAnnonces = function*(){
  if (!this.request.body) {
    this.throw("The body is empty", 400);
  }
  if (!this.request.body.basic) {
    this.throw("The body basic search is empty", 400);
  }
  if (!this.request.body.minPrice) {
    this.throw("The body minPrice search is empty", 400);
  }
  if (!this.request.body.maxPrice) {
    this.throw("The body maxPrice search is empty", 400);
  }
  if (!this.request.body.minArea) {
    this.throw("The body minArea search is empty", 400);
  }
  if (!this.request.body.maxArea) {
    this.throw("The body maxArea search is empty", 400);
  }
  if (!this.request.body.minStairs) {
    this.throw("The body minStairs search is empty", 400);
  }
  if (!this.request.body.maxStairs) {
    this.throw("The body maxStairs search is empty", 400);
  }
  if (!this.request.body.minBedroomNumber) {
    this.throw("The body minBedroomNumber search is empty", 400);
  }
  if (!this.request.body.maxBedroomNumber) {
    this.throw("The body maxBedroomNumber search is empty", 400);
  }
  if (!this.request.body.minRoomNumber) {
    this.throw("The body minRoomNumber search is empty", 400);
  }
  if (!this.request.body.maxRoomNumber) {
    this.throw("The body maxRoomNumber search is empty", 400);
  }
  //
  let basicSearch = this.request.body.basic
  basicSearch.price = { $lt: this.request.body.minPrice, $gt: this.request.body.maxPrice }
  basicSearch.area = { $lt: this.request.body.minArea, $gt: this.request.body.maxArea }
  basicSearch.features.stairs = { $lt: this.request.body.minStairs, $gt: this.request.body.maxStairs }
  basicSearch.features.bedroomNumber = {
    $lt: this.request.body.minBedroomNumber,
    $gt: this.request.body.maxBedroomNumber
  }
  basicSearch.features.roomNumber = {
    $lt: this.request.body.minRoomNumber ,
    $gt: this.request.body.maxRoomNumber
  }
  let annonces = yield Annonce.find(basicSearch).exec();
  this.body = {annonces:annonces }
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
