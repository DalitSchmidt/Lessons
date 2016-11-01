$('button').on('click', function () {
    var movie = {
        title: $('input[name=title]').val(),
        year: $('input[name=year]').val()
    };

    $('button').text('Searching...');
    $('button').attr('disabled', 'disabled');
    $('button').css('color', 'black');

    $.ajax({
        url: 'http://www.omdbapi.com/?t=' + movie.title + '&plot=full&r=json',
        method: 'GET',
        dataType: 'JSON',
        success: function( movie ) {
            $('button').text('Search').removeAttr('disabled');

            $('.title').text( movie.Title );
            $('.actors').text( movie.Actors );
            $('.director').text( movie.Director );
            $('img').attr('src', movie.Poster ) ;
        }
    });
});