const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function() {
  console.log('Listener called');
});

emitter.emit('messageLogged');
// Making a noise, produce - signaling and event happening
