/*let fname="Akshat"
let age=21
let student=false

document.getElementById("p1").innerHTML="Hello "+fname;
document.getElementById("p2").innerHTML="Your age "+age;
document.getElementById("p3").innerHTML="Enrolled "+student;


let username
document.getElementById("myButton").onclick=function(){
username=document.getElementById("mytext").value
console.log(username);
document.getElementById("mylabel").innerHTML=username

}
*/



/*a=window.prompt("Enter side a")
a=Number(a)
b=window.prompt("Enter side b")
a=Number(b)
c=window.prompt("Enter side c")
a=Number(c)

c=Math.pow(a,2)+Math.pow(b,2)
//c=Math.sqrt(c)
console.log("Side c:"+c)*/

/*let a;
let b;
let c;

document.getElementById("submitButton").onclick = function(){

    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}*/




/*let count=0;
document.getElementById("decrease").onclick= function(){
    count--;
    document.getElementById("countLabel").innerHTML=count
    
}

document.getElementById("increase").onclick= function(){
    count++;
    document.getElementById("countLabel").innerHTML=count
}
document.getElementById("reset").onclick= function(){
    count=0;
   document.getElementById("countLabel").innerHTML=count
}*/

/*let x
let y
let z
document.getElementById("roll").onclick=function(){
x=Math.floor(Math.random()*6)+1
y=Math.floor(Math.random()*6)+1
z=Math.floor(Math.random()*6)+1



document.getElementById("xlabel").innerHTML=x
document.getElementById("ylabel").innerHTML=y
document.getElementById("zlabel").innerHTML=z
}*/


//method chaining =calling one method after another in one continuous lines of code.

/*let username="bro"
let letter=username.charAt(0).toUpperCase().trim()

console.log(letter);*/

//checked property 
document.getElementById("MyButton").onclick=function(){
const checkbox=document.getElementById("checkbox")
const Visa=document.getElementById("visa")
const masterBtn=document.getElementById("mastercardBtn")
const paypalbtn=document.getElementById("paypalbtn")
    
    
    
    
    
   /* if(document.getElementById("checkbox".checked==true)){
console.log("Submitted");

    }
    else{
console.log("Not Submitted");

    }
}
*/


if(Visa.checked){
    console.log("You are paying with Visa");
    
}
else if(masterBtn.checked){
console.log("You are paying with MasterCard");

}
else if(paypalbtn.checked){
    console.log("You are payng with PayPal")
}
else{
    console.log("You must select a payment type");
    
}
}

//Strictly Equallity Operator ===
// for loop when you want to repeat code for a certain amount of time.
//While loop when you want to repeat code for certain condition is true.
//condition ? iftrue:iffalse
//variable scope=where a variable is accesible.
//let=variables are limited to block scope{}.
//var=variables are limited to a function.
//GLOBAL VAARIABLE=is declared outside any function
//(if global,var will change browser window properties)
//Template literals=delimited with (`) instead of double or single quotes allows embedded variables and expressions
//toLocaleString()=return a string with a language sensitive representation of this number
//number.toLocaleString(Locale,{options})
//locale=specfied that language (undefined=default set in browser)
//options=options with formaatiing options

//Spread Operator:allows an iterable such as array or string to be expandend in places with zero  or more arguments are expected 
//rest parameter represents an indefinite number of parameters (packs arguments into the array)
 

let a=1
let b=2
let c=3
let d=4
let e=5


console.log(sum(a,b,c,d,e))

function sum(...numbers){
    let total =0;
    for (let number of numbers){
        total+=number
    }
    return total
 }

 //callback = a function passed as an argument to another function
 //helps us develop asynchronous code
 //array.forEach()=executes  a provided callback function once for each every  element

 //array.map()=executes a provided callback function once for each array element and creates a new array.
 
 let numbers = [1, 2, 3, 4, 5];
 let squares = numbers.map(square); 
 let cubes =numbers.map(cube)
 // Pass the square function to map
 
 squares.forEach(print)
 cubes.forEach(print)
 function square(element) {
     return Math.pow(element, 2); // Square each element
 }

 function cube(element) {
    return Math.pow(element, 3); // Square each element
}
 
 function print(elements) {
     console.log(elements);
 }


 //function expressions =function without a name (anonymous function) avoid polluting the global scope with names 

 //arrow function :need curly braces uses more than one statement

 const square = (n) => {
    console.log('Squaring:', n);  // Multiple statements require curly braces
    return n * n;  // Explicit return needed
};
console.log(square(4));  // Output: "Squaring: 4" and 16

 
const square = (n) => n * n;  // Implicit return, no curly braces needed
console.log(square(4));  // Output: 16



//closure = afunction with preserved and private data give you access to an outer function's scope from an inner function.

//Map=object that hold key value pairs of any data type.
const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10]
]);

store.forEach((value, key) => console.log(`${key} $${value}`));
 //Object =A group of properties and methods
 //properties :WHAT OBJECT HAS
 //METHODS=WHAT OBJECT CAN DO
 //USE. TO ACCESS PROPERTIES /METHODS

 //THIS=REFERNCE TO A PARTICULAR OBJECT THE OBJECT DEPENDS ON IMMEDIATE CONTEXT

 //class = ablueprint  for creating objects define what properties and methods they have use a constructor for unique properties
 //constructor = a special method of a class,accepts arguments and assign properties
 
 
 class Student {
    constructor(name,age,cgpa){
        this.name=name;
        this.age=age;
        this.cgpa=cgpa;
    }
    study(){
        console.log(`${this.name}is Studying`)
    }
 }
 const Student1=new Student("Spongebob",19,9.7)
console.log(Student.name);
console.log(Student.age);
console.log(Student.cgpa);
Student1.study()


//static =belongs to the class, not the objects properties:useful for caches,fixed configuration methods:useful for utility functioons 


//inheritance=a child class can inherit all the properties and methods from another class.


class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`This ${this.name} is eating`);
    }

    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {
    constructor() {
        super("Rabbit");
    }

    run() {
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal {
    constructor() {
        super("Fish");
    }

    swim() {
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal {
    constructor() {
        super("Hawk");
    }

    fly() {
        console.log(`This ${this.name} is flying`);
    }
}

// Example usage
const rabbit = new Rabbit();
rabbit.eat();
rabbit.run();

const fish = new Fish();
fish.eat();
fish.swim();

const hawk = new Hawk();
hawk.eat();
hawk.fly();


//set interval=invokes a function repeatedly after  a number of milliseconds
//console.time() starts a timer you can use to track how long an operation takes Give each timer a unique name
//promises =object that encapsulates  the result of an asynchronous operation like asynchronous methods
//promises have state pending fulfilled and rejected 

//2parts producing &consuming 
//invoking using then method 

//async makes a function return promise
//await makes function wait for a promise 

//ES6 IDEA behind a module is that its a file of reusable code 
//we can import sections of prewritten code to use whatever 
//great for any general  utility values and function
//helps to make your code more usable and maintainale 