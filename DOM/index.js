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

 