/**
 * Annonce model events
 */

'use strict';

import {EventEmitter} from 'events';
import Annonce from './annonce.model';
var AnnonceEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
AnnonceEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Annonce.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    AnnonceEvents.emit(event + ':' + doc._id, doc);
    AnnonceEvents.emit(event, doc);
  }
}

export default AnnonceEvents;
