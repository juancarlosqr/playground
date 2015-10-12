/*global document,alert,Worker*/

(function () {

  var buttonWithoutWebworker = document.getElementById('without-webworker'),
    buttonWithWebworker = document.getElementById('with-webworker'),
    worker = new Worker('webworker.js'),
    worker2 = new Worker('webworker.js');

  function done(amount) {
    alert('calculation done, result: ' + amount);
  }

  function handler(event) {
    done(event.data);
  }

  function calculateWithoutWebworker() {
    var j = 0,
      i = 0;

    for (i; i < 1000000000; i++) {
      j = j + i;
    }

    done(j);
  }

  function calculateWithWebworker() {
    worker.postMessage({action: 'calculate', value: 0});
    worker.postMessage({action: 'multiply', value: 0});
    worker2.postMessage({action: 'multiply', value: 0});
  }

  worker.addEventListener('message', handler);
  worker2.addEventListener('message', handler);
  buttonWithoutWebworker.addEventListener('click', calculateWithoutWebworker);
  buttonWithWebworker.addEventListener('click', calculateWithWebworker);
}());