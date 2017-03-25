function onButttonClick() {
  var promise;
  promise = $.ajax({
    url: 'http://localhost:8080/random-number',
    method: 'GET',
  });

  promise.done(addCounter);
}

function addCounter(data) {
  // var counter = $('h2').text();
  // var counter2 = parseInt(data);
  // counter = parseInt(counter);
  // counter = counter + counter2;

  var counter = parseInt($('h2').text()) + parseInt(data);
  $('h2').text(counter);
}
