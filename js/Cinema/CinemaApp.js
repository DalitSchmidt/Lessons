CinemaApp = {
    /**
     * Bringing title and year values from input
     * **/
    getValuesFromInput: function () {
        return {
            title: $('input[name=title]').val(),
            year: $('input[name=year]').val()
        };
    },

    /**
     * Change Text button to 'Searching...' and adding attribute of 'disabled' button
     * **/
    disableSearch: function () {
        $('button').text('Searching...');
        $('button').attr('disabled', 'disabled');
    },

    /**
     * Replacing text 'Search!' button and removing the attribute of the button 'disabled'
     * **/
    enableSearch: function () {
        $('button').text('Search!').removeAttr('disabled');
    },

    /**
     * Adding any entries (details) of the movie
     * **/

    addMovieToDom: function(movie) {
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

    },

    /**
     * The function performs a search of the movies by bringing JSON: $ .getJSON ( 'http://www.omdbapi.com/?t=' + name + '& plot = full & r = json', function (movie).
     * If an existing movie shows him in DOM using writeMovieToDOM function and performs the necessary changes (changing the text and removing the attribute of using the function 'EnableSearch'.
     * If the movie doesn't exist the function returns a message: "The movie you have searched has not been found", and makes the necessary changes (changing the text and removing the disabled attribute of the button) through the function 'enableSearch' and as there is information in the DOM is hiding it.
     * **/
    searchMovie: function (name) {
        var self = this;
        $.getJSON('http://www.omdbapi.com/?t=' + name + '&y=&plot=full&r=json', function (movie) {
            if (movie.Error) {
                alert('The movie you have searched has not been found');
                self.enableSearch();
                $('#movie').hide();
            } else {
                self.enableSearch();
                self.addMovieToDom(movie);
                $('#movie').show();
            }
        });
    },

    /**
     * The function takes all the necessary information since it activates the functions 'GetValuesFromInputs', 'DisableSearch' and 'SearchMovie' they practice most job functions.
     * **/
    fetchMovie: function() {
        //movie is now an object that contains the values ​​from the input
        var movie = this.getValuesFromInput();

        // Disable the search button
        this.disableSearch();

        // Actually make the ajax request
        this.searchMovie(movie.title);

        // Reset the values in the inputs
        $('input[name=title]').val('');
        $('input[name=year]').val('');

    },
        
    /**
     * The function 'BindEvent()' encompasses all elements of their events by clicking on the proxy function call function fetchMovie and operate the object CinemaApp("$('button').on('click', $.proxy( this.fetchMovie, CinemaApp ) );").
     The function 'BindEvents()' must register every object literal.
     * **/
    bindEvents: function () {
        $('button').on('click', $.proxy(this.fetchMovie, CinemaApp));
    },

    /**
     * The function 'init()' performs initialization by calling (activation) of the function 'BindEvents()'
     The function 'init()' must register every object literal.
     * **/
    init: function () {
      this.bindEvents();
    }
};

// Boot each object CinemaApp
$(document).ready(function(){
    CinemaApp.init();
});