"use strict";
import  User from '../models/user'
import  co from 'co'
import { sign , verify } from '../jwt'
exports.getAllUser = function *() {
  let users = yield User.find().exec();
  if (!users) {
  }
  this.body = { data: users }
};
exports.signIn = function *(next){
 const {username, password } = this.request.body
   co(function *() {
     try {
       return yield User.passwordMatches(username, password);
     } catch (ex) {
       return null;
     }
   }).then( user => {
      if(user){
        this.body = {token: sign(user)  }
      }
   });
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



exports.getCurrentUser = function *() {
  //check credential
};
