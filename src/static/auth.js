OAuth.initialize('a30aAafak3PbZT6sfOlZ9NMkLwU');
OAuth.popup('github')
.done(function(result) {
    console.log(result);
    result.me()
    .done(function (response) {
        console.log(response);
    })
    console.log();
    result.get('/user/repos')
    .done(function (response) {
        console.log(response);
    })
    .fail(function (err) {
        alert(err);
    });
})
.fail(function(err) {
    alert(err);
})