"use strict";
const User = require("../models/user") ;
//require passport
exports.getAllUser = function *() {
  let users = yield User.find().exec();
  if (!users) {
  }
  this.body = { data: users };
};

exports.createUser= function *() {

};

exports.login= function *(){

}; 
