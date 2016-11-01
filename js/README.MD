Javascipt scope:

1.
the word 'this' inside a function actulally refers to the object that called this function
for example

```javascript
function ABC() {
    console.log( this );
}
```

When calling to the function ABC(), is the same as writing window.ABC();
Remember that everything that is written in the "free space" is actually inside the 'window' object
Hence, call ABC() is like calling window.ABC();

The context(!!) of 'this' inside ABC() will be refered to window, but why?
because window is the one that 'activated' (called) the function


2. Consider the following literal object:

```javascript
var App = {
    doSomething: function() {
        console.log( this );
    },

    bindEvents: function () {
        $('button').on('click', this.doSomething );
    },

    init: function () {
        console.log('Initializing the application');
        this.bindEvents();
    }
}

$(document).ready(function(){
    App.init();
});
```

When the DOM is ready, call the method 'init()' in the object 'App'
init() is calling 'bindEvents()';
'this' word inside init is refering to the App object because the entity that fired
the 'init' function is 'App'

'bindEvents()' part is to bind all the events to their elements

```javascript
$('button').on('click', this.doSomething )
```

This operation stick the 'click' event to the button and ask it to call this.doSomething
'this', like we said before is the App object

When calling doSomething (after clicking the button), 'this' can refer either to the $('button') or the App
why is that? because it depends who fired the doSomething() function.

In the first case
```javascript
$('button').on('click', this.doSomething );
```
'this' context is the $('button'), because the '.on()' method called doSomething(), and the object that
call this is function is $('button');

In another case, like the following:
```javascript
App.doSomething()
```
'this' context will be App - because App is the one that called to 'doSomething' function