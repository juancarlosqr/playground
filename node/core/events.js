const EventEmitter = require('events');
const emitter =  new EventEmitter();

// register a listener
emitter.on('foo', arg => {
  console.log('Hello events!', arg);
});

// raise an event
emitter.emit('foo', 'bar');
emitter.emit('foo', {bar: 'baz'});
emitter.emit('foo', 100);


// extending EventEmitter

class Tracker extends EventEmitter {
  hit() {
    this.emit('hit');
  }
}

const tracker = new Tracker();

tracker.on('hit', () => {
  console.log('new hit!');
});

tracker.hit();
