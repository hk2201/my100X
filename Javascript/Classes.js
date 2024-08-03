class Animal {
  constructor(name, legs, color) {
    this.name = name;
    this.legs = legs;
    this.color = color;
  }

  // will not be associated with any object;
  static myfunc() {
    console.log("Not associated with object");
  }
  speak() {
    console.log("Bhow Bhow");
  }

  walk() {
    console.log("I am walking");
  }

  sleep() {
    console.log("Going into Sleep for 1200 ms");
  }
}

let dog = new Animal("dog", 4, "black");

dog.speak();
dog.walk();
dog.sleep();
console.log(dog.name);
