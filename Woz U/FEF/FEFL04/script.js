{//Define class
class aClass{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
// Method for class
sayName(){
    alert(this.name);
    }
//Method for class
sayAge(){
    alert (this.age);
    }
}
{//Instantiating the aClass with the 'new' keyword
const myInstance = new aClass("Andrew", 30);
myInstance.sayName();
}

{class Vehicle{
    constructor(make, model, year){
        this.make;
        this.model;
        this.year;
    }
}
let myCar=new Vehicle("Nissan", "Rogue", 2017);
console.log(myCar);
//console.log does not work as lesson says it will. Returns [Object, Object]
}

{class Person {
    constructor(firstName, lastName) {
        this.firstName=firstName;
        this.lastName=lastName;
    }
    run(){
        console.log(this.firstName + " " + this.lastName + " is running.");
    }
    walk() {
        console.log(this.firstName + " " + this.lastName + " is walking.");
    }
    greeting() {
        console.log("Hello, my name is " + this.firstName + ".");
    }
}

let rose = new Person("Rose", "Dawson");
rose.run();
rose.walk();
rose.greeting();}
//Again, console.log does not work at all. Something is screwy.
}

{class Car {
    constructor(make, model, year) {
        this._make=make;
        this._model=model;
        this._year=year;
    }
    get make(){
        return this._make;
    }
}
let myCar=new Car("Nissan","Rogue", 2017);
myCar.make;
//Yay! this actually does what it's supposed to. 
}

{class Car {
    constructor(make, model, year){
        this._make=make;
        this._model=model;
        this._year=year;
    }
    get make(){
        return this._make;
    }
    set make(value){
        const possibleMakes =["Honda","Toyota", "Nissan"];
        if(possibleMakes.includes(value)){
            this._make=value;
        } else {
            throw Error(value + " is not a valid make.");
        }
    }
    get description(){
        return this._year + " " + this._make + " " + this._model;
    }
}
let myCar=new Car("Nissan", "Rogue", 2017);
myCar.make="Honda";
myCar.make;
myCar.description;
//wow, another one that does what it's supposed to! 

}

{class Car {
    constructor(make, model, year){
        this._make=make;
        this._model=model;
        this._year=year;
    }
    get make(){
        return this._make;
    }
    set make(value){
        const possibleMakes =["Honda","Toyota", "Nissan"];
        if(possibleMakes.includes(value)){
            this._make=value;
        } else {
            throw Error(value + " is not a valid make.");
        }
    }
    get description(){
        return this._year + " " + this._make + " " + this._model;
    }
}
let myCar=new Car("Nissan", "Rogue", 2017);
myCar.description;
//returns "2017 Nissan Rogue" as it's supposed to. Excellent.
myCar.make="Volvo";
myCar.description;
//returns "Uncaught Error: Volvo is not a valid make." as it's supposed to.
}