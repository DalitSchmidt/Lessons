Javascipt scope:

1.
the word 'this' inside a function actulally refers to the object that called this function
for example

function ABC() {
    console.log( this );
}

When calling to the function ABC(), is the same as writing window.ABC();
Remember that everything that is written in the "free space" is actually inside the 'window' object
Hence, call ABC() is like calling window.ABC();

The context(!!) of 'this' inside ABC() will be refered to window, but why?
because window is the one that 'activated' (called) the function


2.
Consider the following literal object:

```javascript
var Obj = {
    bindEvents: function () {
        $('button').on('click', $.proxy( this.fetchMovie, CinemaApp ) );
    },

    init: function () {
        console.log('Initializing the application');
        this.bindEvents();
    }
}
```