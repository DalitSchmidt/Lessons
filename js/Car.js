function Car( speed ) {
    this.speed = speed;
    this.stop = function () {
        console.log('Stopping');
    }
}

var c1 = new Car(100);
// Is actually asking the 'Car()' function to treat 'this' as c1 and not window


var c2 = new Car(50);

// Is exactly the same as
var c2;
Car.call( c2, 50 );