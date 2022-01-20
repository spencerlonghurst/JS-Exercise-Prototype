/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
Person.prototype.eat = function(edible) {
  if(this.stomach.length < 10) {
    this.stomach.push(edible);
  }
}

Person.prototype.poop = function() {
  this.stomach = [];
}

Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`;
}

//create new people

const sallie = new Person('Sallie', 26);
const mark = new Person('Mark', 23);
const cori = new Person('Cori', 25);

sallie.toString();
mark.toString();
cori.toString();

mark.eat('🍔');
mark.eat('🍔');
mark.eat('🍔');
mark.eat('🍔');
mark.eat('🍔');
mark.eat('🍔');
mark.eat('🍔');
mark.eat('🍔');

//console.log(mark.stomach);

mark.poop();

//console.log(mark.stomach);



/*
  TASK 2
    X - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    X - All instances built with Car:
        X + should initialize with an `tank` at 0
        X + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function(gallons) {
  this.tank = this.tank + gallons; 
}

//create a new car
const truck = new Car('Dodge', 15);


//console.log('task 2', truck.fill(10)); //Add the gallons to 'tank'







/*
  TASK 3
    X- Write a Baby constructor subclassing Person.
    X- Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    X - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
 Person.call(this, name, age);
 this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`
}


const babyOne = new Baby('Jimmy', 1, 'blocks');

console.log(babyOne.play());

















/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Global scope: When this is used in the global scope, the console won't know what specifically you are requesting the 'this' on, so it will just simply return the entire window.
  2. Implicit Binding: When Implicit binding is used, when you simply look to the left of the dot, you can determine what 'this' is referring to.
  3. Explicit Binding: Whenever you use .call, .apply or .bind you are using explicit binding.
  4. New Binding: When you are using a constructor function, this is used with the 'new' keyword.
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}