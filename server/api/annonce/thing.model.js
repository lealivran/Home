'use strict';

import mongoose from 'mongoose';

var AnnonceSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Annonce', AnnonceSchema);
