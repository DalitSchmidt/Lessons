function getValuesFromInputs() {
    var movie = {
        title: $('input[name=title]').val(),
        year: $('input[name=year]').val()
    };

    return movie;
}

function disableSearch() {
    $('button').text('Searching...');
    $('button').attr('disabled', 'disabled');
}

function enableSearch() {
    $('button').text('Search!').removeAttr('disabled');
}

function writeMovieToDOM(movie) {
    $('.title').text(movie.Title);
    $('img').attr('src', movie.Poster);
    $('.year').text(movie.Year);
    $('.rated').text(movie.Rated);
    $('.released').text(movie.Released);
    $('.runtime').text(movie.Runtime);
    $('.genre').text(movie.Genre);
    $('.director').text(movie.Director);
    $('.writer').text(movie.Writer);
    $('.actors').text(movie.Actors);
    $('.plot').text(movie.Plot);
    $('.language').text(movie.Language);
    //$('.country').text(movie.Country);
    //$('.awards').text(movie.Awards);
    //$('.metascore').text(movie.Metascore);
    //$('.imdbrating').text(movie.imdbRating);
    //$('.imdbvotes').text(movie.imdbVotes);
}

function searchMovie(name) {
    $.getJSON('http://www.omdbapi.com/?t=' + name + '&plot=full&r=json', function(movie) {
        if (movie.Error) {
            alert('The movie you have searched has not been found');
            $('button').text('Search!');
            $('#movie').hide();


            
        } else {
            enableSearch();
            writeMovieToDOM(movie);
        }
    });
}

function fetchMovie() {
    var movie = getValuesFromInputs();
    disableSearch();
    searchMovie(movie.title);
    $('input[name=title]').val('');
    $('input[name=year]').val('');
}

$('button').on('click', fetchMovie);