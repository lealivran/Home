import mongoose from "mongoose"
import co from 'co'
import bcrypt from '../bcrypt'
const Schema = mongoose.Schema

const userSchema = new Schema({
  username : { type: String, required: true },
  email: { type: String,  required: true},
  password: { type:String, required: true },
  admin: {type:Boolean , default:false},
  searchCriteria: {
    area: { type : Number, default : 0},
    priceRange: {
      low:{ type : Number, default : 0},
      hight: { type : Number, default : 0}
    },
    roomNumber : { type : Number, default : 0 },
    bedroomNumber : { type : Number, default : 0 },
    stairs : { type : Number, default : 0 },
    cave : { type: Boolean, default: false},
    parking : { type: Boolean, default: false},
    terrace : { type: Boolean, default: false},
    balcony : { type: Boolean, default: false},
    garden : { type: Boolean, default: false},
    pool : { type: Boolean, default: false}
  },
  consult: [{ type: Schema.Types.ObjectId, ref: 'Annonce' }]
});

/**
 * Middlewares
 */
userSchema.pre("save", function(done) {
  if (!this.isModified("password")) {
    return done();
  }
  co.wrap(function*() {
    try {
      let salt = yield bcrypt.genSalt();
      let hash = yield bcrypt.hash(this.password, salt);
      this.password = hash;
      done();
    } catch (err) {
      done(err);
    }
  }).call(this).then(done);
});
/**
 * Methods
 */
userSchema.methods.comparePassword = function *(candidatePassword) {
  return yield bcrypt.compare(candidatePassword, this.password);
};

/**
 * Statics
 */

userSchema.statics.passwordMatches = function *(username, password) {
  var user = yield this.findOne({ username: username.toLowerCase() }).exec();
  if (!user) {
    throw new Error("User not found");
  }

  if (yield user.comparePassword(password)) {
    return user;
  }

  throw new Error("Password does not match");
};



let model = mongoose.model('User', userSchema);
module.exports = model
