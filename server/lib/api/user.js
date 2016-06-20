"use strict";
const User = require("../models/user") ;
const passport = require("koa-passport");
exports.getAllUser = function *() {
  let users = yield User.find().exec();
  if (!users) {
  }
  this.body = { data: users }
};

exports.signIn = function *(){
//return token
};
exports.createUser= function *() {
  if(!this.request.body) {
    this.throw("The body is empty", 400)
  }
  if(!this.request.body.username) {
    this.throw("Missing username", 400)
  }
  if (!this.request.body.email) {
    this.throw("Missing email", 400)
  }
  if (!this.request.body.password) {
    this.throw("Missing password", 400)
  }

  try {
     let user = new User({
      username: this.request.body.username,
      password: this.request.body.password,
      email: this.request.body.email
    })
    console.log(this);
     user = yield user.save()
     yield this.login(user)
  } catch (err) {
     this.throw(err)
  }
  this.status = 200
  this.body = { user: this.passport.user }
};

exports.signOut = function *() {
  this.logout();
  this.session = null;
  this.status = 204;
};

exports.getCurrentUser = function *() {
  //check credential 
};
