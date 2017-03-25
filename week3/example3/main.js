function onFinished(data) {
  var value = data.value;
  if (data.type === 'number') {
    addCounter(value);
  } else {
    changeColor(value);
  }
}

function onButttonClick() {
  var promise;
  promise = $.ajax({
    url: 'http://localhost:8080/random-color-or-number',
    method: 'GET',
  });
  promise.done(onFinished);
}

function addCounter(data) {
  // var counter = $('h2').text();
  // var counter2 = parseInt(data);
  // counter = parseInt(counter);
  // counter = counter + counter2;

  var counter = parseInt($('h2').text()) + parseInt(data);
  $('h2').text(counter);
}

function changeColor(data) {
  $('.box').css('background-color', data);
}
