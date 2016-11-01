/*$('button').on('click', function () {
    var movie = {
        title: $('input[name=title]').val(),
        year: $('input[name=year]').val()
    };

    $('button').text('Searching...');
    $('button').attr('disabled', 'disabled');
    $('button').css('color', 'black');

    $.ajax({
        url: 'http://www.omdbapi.com/?t=' + movie.title + '&y=&plot=short&r=json',
        method: 'GET',
        data: 'json',
        success: function(response) {
            var movie = JSON.parse(response);

        }
    });
});*/

var Cinema = {
    getValuesFromInputs: function() {
        var movie = {
            title: $('input[name=title]').val(),
            year: $('input[name=year]').val()
        };

        return movie;
    },

    disableSearch: function() {
        $('button').text('Searching...').attr('disabled', 'disabled');
    },

    enableSearch: function() {
        $('button').text('Search').removeAttr('disabled');
    },

    writeMovieToDOM: function(movie) {
        $('.title').text(movie.Title);
        $('.actors').text(movie.Actors);
        $('.director').text(movie.Director);
        $('img').attr('src', movie.Poster) ;
    },

    searchMovie: function(name) {
        return $.getJSON('http://www.omdbapi.com', {t: name, plot: 'full', r: 'json'});
    },

    fetchMovie: function() {
        var movie = this.getValuesFromInputs();
        this.disableSearch();

        this.searchMovie(movie.title).then(function(movie) {
            that.enableSearch();
            that.writeMovieToDOM(movie);
        });
    }
};

$('button').on('click', $.proxy(Cinema.fetchMovie, Cinema));

