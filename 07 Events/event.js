var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var EventHandler = function () {
  console.log('Hellooooooo');
}

//Assign the event handler to an event:
eventEmitter.on('scream', EventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');    