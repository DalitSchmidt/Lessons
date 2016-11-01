var TodoApp = {
    tasks: [],

    collectValues: function () {
        return {
            title: "erf3erfgwr",
            date: "efgergerg",
            description: "ergfergerg"
        }
    },

    buildHTML: function ( task ) {
        var html = '' +
        '<div class="task">' +
        '    <h3>' + task.title + '</h3>' +
        '    <time>12/12/2016</time>' +
        '    <p>Lorem ipsum dolor sit amet</p>' +
        '</div>';
        task.title
        task.date
        task.description
    },

    bindEvents: function () {

    },

    init: function () {
        this.bindEvents();
    }
};

TodoApp.init();

/*

    1. init and events
    2. collect info from the inputs
    3. click the button
    4.

 */
