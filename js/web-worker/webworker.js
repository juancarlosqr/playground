/*global self, console*/

self.addEventListener('message', function (e) {
  var i = j = 0;

  if (e.data.action === 'calculate') {
    console.log(e.data);
    for (i; i < 1000000000; i++) {
      j = j + i;
    }

    console.log('calculate', j);
    self.postMessage(j);
  }

  if (e.data.action === 'multiply') {
    console.log(e.data);
    i = j = 1;
    for (i; i < 10; i++) {
      j = j * i;
    }

    console.log('multiply', j);
    self.postMessage(j);
  }
});