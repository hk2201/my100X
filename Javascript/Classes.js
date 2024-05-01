class Animal {
    constructor(name,legs,color){
        this.name = name;
        this.legs = legs;
        this.color = color;
    }

    // will not be associated with any object;
    static myfunc(){
        console.log("Not associated with object");
    }
    speak(){
        console.log("Bhow Bhow");
    }
}

let dog = new Animal("dog",4,"black");

dog.speak();
console.log(dog.name);