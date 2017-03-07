"use strict";

console.log("Hello, is it me you're looking for?");

function Car () {
  this.manufactured_date = Date.now();
}

/*
  2. It must inherit from the more general Car object.
 */

function YourFavoriteMake () {
  this.manufacturer = "Nissan";
}

// Set the prototype to a new Car instance
YourFavoriteMake.prototype = new Car();

/*
  2. It must inherit from the specific make type you created in previous step.
*/

function YourFavoriteModel () {
  this.model = "Rogue";
  this.cargo = 4;
  this.color = "Silver";
  this.horsepower = "Speed of Light";
}

// Set the prototype to appropriate model you created above and set the model name argument
YourFavoriteModel.prototype = new YourFavoriteMake();

var myFirstFavoriteCar = new YourFavoriteModel();
myFirstFavoriteCar.plate_number = "MYCAR1";
console.log("myFirstFavoriteCar", myFirstFavoriteCar);

var mySecondFavoriteCar = new YourFavoriteModel();
mySecondFavoriteCar.plate_number = "MYCAR2";
console.log("mySecondFavoriteCar", mySecondFavoriteCar);

var myThirdFavoriteCar = new YourFavoriteModel();
myThirdFavoriteCar.plate_number = "MYCAR3";
console.log("myThirdFavoriteCar", myThirdFavoriteCar);

function AnotherModel () {
  this.model = "Protege";
  this.cargo = 4;
  this.color = "Blue";
  this.horsepower = "Speed of Sound";
}
/*
  Assign the prototype to the make you define above. Now both models will
  inherit the `manufacturer` property from the make function.
 */

AnotherModel.prototype = new YourFavoriteMake();

/*
  Now create an instance of this new car model to put in your garage. Remember
  to give it a plate number.
 */

 var myOtherCar = new AnotherModel();
myOtherCar.plate_number = "MYBLUECAR";
console.log("myOtherCar", myOtherCar);