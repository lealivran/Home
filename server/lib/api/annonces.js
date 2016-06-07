var mongoose = require('koa-mongoose')
var Annonce = require('../model/annonce');
import  Q from 'q'

// var db = {
//   tobi: { name: 'tobi', species: 'ferret' },
//   loki: { name: 'loki', species: 'ferret' },
//   jane: { name: 'jane', species: 'ferret' }
// };

var annonces = {
  list: function *(){

    // var names = Object.keys(db);
    // this.body = 'pets: ' + names.join(', ');


    // let names = Object.keys(db);
    // this.body = 'pets: ' + names.join(', ');

    // yield user.saveQ()
    //
    // yield Model.find(..).exec()

    console.log("je commence à charger les donnees");
    // this.body = 'annonce';

    // yield Annonce.find().exec();

    // var res = yield Annonce.find({});
    // this.body = res;

    let defer = Q.defer()

    Annonce.find({}, function (err, annonces){
      if (err) {
        defer.reject(err);
      } else {
        defer.resole(annonces);
        console.log(annonces);
      }
      return defer.promise

      // res.render('restaurants/view', {title: 'Restaurant', restaurant});
      // this.body = "annonces";
    })


    // yield Annonce.find(function (err, annonces) {
    //   if (err) return console.error(err);
    //   console.log(annonces);
    //   this.body = "annonces";
    // }).exec()

    // Annonce.find({restaurant_id:req.params.id}, function (err, restaurant){
    //   if (err) console.log(err);
    //   console.log(restaurant.grades);
    //   res.render('restaurants/view', {title: 'Restaurant', restaurant});
    // })

  },

  // show: function *(name){
  //   let pet = db[name];
  //   if (!pet) return this.throw('cannot find that pet', 404);
  //   this.body = pet.name + ' is a ' + pet.species;
  // }
};

module.exports = annonces;


// var getMessage = function*(params) {
//   var mPromise = MessageModel.find({
//     to: params.to
//   }).exec();
//   yield mPromise;
// }
//
// app.get('/message/to/:to', function*(next) {
//   this.body =
//     yield getMessage(this.params);
// });
