/**
 * Return the values from the form inputs
 * @returns {{title: (*|jQuery), year: (*|jQuery)}}
 */
function getValuesFromInputs() {
    return {
        title: $('input[name=title]').val(),
        year: $('input[name=year]').val()
    };
}

/**
 * Changes the text in the button and adding the attr disabled
 * @returns void
 */
function disableSearch() {
    $('button').text('Searching...');
    $('button').attr('disabled', 'disabled');
}

/**
 * Brings back the text to the search button and remove disabled
 */
function enableSearch() {
    $('button').text('Search!').removeAttr('disabled');
}

/**
 * Inject all the values to the DOM
 * @param movie
 */
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
}

function searchMovie(name) {
    $.getJSON('http://www.omdbapi.com/?t=' + name + '&plot=full&r=json', function(movie) {
        if (movie.Error) {
            alert('The movie you have searched has not been found');
            enableSearch();
        } else {
            enableSearch();
            writeMovieToDOM(movie);
        }
    });
}

/**
 * Make the whole operation we need
 * This function is describing the flow of the application itself
 */
function fetchMovie() {
    // movie is now an object which includes the values from the inputs
    var movie = getValuesFromInputs();

    // Disable the search button
    disableSearch();

    // Actually make the ajax request
    searchMovie(movie.title);

    // Reset the values in the inputs
    $('input[name=title]').val('');
    $('input[name=year]').val('');
}

$('button').on('click', fetchMovie);