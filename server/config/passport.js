import passportLocal from 'passport-local'
import User from '../lib/models/user'
import authenticator from '../lib/authenticator'
const LocalStrategy = passportLocal.Strategy;

const  serialize = (user, done)=> {
  done(null, user._id);
};

const deserialize = (id, done) => {
  User.findById(id, done);
}

module.exports = function(passport, config) {
  passport.serializeUser(serialize);
  passport.deserializeUser(deserialize);
  passport.use(new LocalStrategy(authenticator.localUser));
}
