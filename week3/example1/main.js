function onFinished(data) {
  $('.box').css('background-color', data);
}

function onFail(error) {
  console.log(error);
}

function onButttonClick() {
  var promise;
  promise = $.ajax({
    url: 'http://localhost:8080/random-color',
    method: 'GET',
  });
  promise.done(onFinished);
  promise.fail(onFail);
}
