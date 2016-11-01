function doSomething() {
    var d = $.Deferred();

    setTimeout(function () {
        d.resolve( "abc" );
    }, 2000);

    return d.promise();
}

alert(1);
doSomething().then(function( msg ) {
    alert( msg );
});



function makeHTTPRequestByAjax() {
    return $.ajax({});
}

makeHTTPRequestByAjax().then(function ( response ) {
    alert( response );
});