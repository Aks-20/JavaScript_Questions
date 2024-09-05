//Unary :Accept only one operator 
/* const unaryFunction = (a) => console.log(a + 10); */

//Currying function 
/*What is the currying function

    Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician **Haskell Curry**. By applying currying, an n-ary function turns into a unary function.

    Let's take an example of n-ary function and how it turns into a currying function,

    ```javascript
    const multiArgFunction = (a, b, c) => a + b + c;
    console.log(multiArgFunction(1, 2, 3)); // 6

    const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
    curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
    curryUnaryFunction(1)(2); // returns a function: c => 3 + c
    curryUnaryFunction(1)(2)(3); // returns the number 6*/


    /* 13 A pure function is a concept from functional programming where the function adheres to two key principles:

Deterministic: Given the same inputs, a pure function will always return the same output. It doesn’t rely on any external state or variables.
No Side Effects: A pure function does not alter any external variables, data structures, or perform any I/O operations (like modifying a global variable, interacting with a file system, or making a network request). It only depends on its inputs and produces outputs.
Characteristics of a Pure Function:
Same input, same output: The function is deterministic, meaning for any given input, it will always return the same result.
No side effects: The function doesn’t alter anything outside its scope (no mutation of variables or state outside the function).*/
//function add(a, b) {
  //  return a + b;
//}


// 14 let function declares a block scope variable 
//variables declared with the `var` keyword used to define a variable globally, or locally to an entire function regardless of block scope.
/*### What is the difference between let and var

    You can list out the differences in a tabular format

    | var                                                   | let                         |
    | ----------------------------------------------------- | --------------------------- |
    | It has been available from the beginning of JavaScript | Introduced as part of ES6   |
    | It has function scope                                 | It has block scope          |
    | Variable declaration will be hoisted, initialized as undefined  | Hoisted but not initialized |
    | It is possible to re-declare the variable in the same scope | It is not possible to re-declare the variable |

    Let's take an example to see the difference,

    ```javascript
    function userDetails(username) {
      if (username) {
        console.log(salary); // undefined due to hoisting
        console.log(age); // ReferenceError: Cannot access 'age' before initialization
        let age = 30;
        var salary = 10000;
      }
      console.log(salary); //10000 (accessible due to function scope)
      console.log(age); //error: age is not defined(due to block scope)
    }
    userDetails("John");*/
    //16)What is the reason to choose the name let as a keyword

     /* `let` is a mathematical statement that was adopted by early programming languages like **Scheme** and **Basic**. It has been borrowed from dozens of other languages that use `let` already as a traditional keyword as close to `var` as possible.*/



     //17  How do you redeclare variables in a switch block without an error
     /*let counter = 1;
     switch (x) {
       case 0:
         let name;
         break;
 
       case 1:
         let name; // SyntaxError for redeclaration.
         break;
     }*/

//18 
/*To avoid this error, you can create a nested block inside a case clause and create a new block scoped lexical environment.

    ```javascript
    let counter = 1;
    switch (x) {
      case 0: {
        let name;
        break;
      }
      case 1: {
        let name; // No SyntaxError for redeclaration.
        break;
      }
    }*/



      //17 Temporal dead zone 
      /* ### What is the Temporal Dead Zone

    The Temporal Dead Zone(TDZ) is a specific period or area of a block where a variable is inaccessible until it has been initialized with a value. This behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a `let` or `const` variable before its declaration (within its scope) causes a ReferenceError. 

    Let's see this behavior with an example,

    ```javascript
    function somemethod() {
      console.log(counter1); // undefined
      console.log(counter2); // ReferenceError
      var counter1 = 1;
      let counter2 = 2;
    } */

      //19 
      /*What is an IIFE (Immediately Invoked Function Expression)

IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,

```javascript
(function () {
  // logic here
})(); 

//Outside the function
 (function () {
      var message = "IIFE";
      console.log(message);
    })();
    console.log(message); //Error: message is not defined


*/
//20 encode and decode 
/*
    `encodeURI()` function is used to encode an URL. This function requires a URL string as a parameter and return that encoded string.
    `decodeURI()` function is used to decode an URL. This function requires an encoded URL string as parameter and return that decoded string.

    **Note:** If you want to encode characters such as `/ ? : @ & = + $ #` then you need to use `encodeURIComponent()`.

   
    let uri = "employeeDetails?name=john&occupation=manager";
    let encoded_uri = encodeURI(uri);
    let decoded_uri = decodeURI(encoded_uri);
    */


    /*A URI (Uniform Resource Identifier) is a string used to identify a resource, either on the internet or within a local system. URIs are crucial for locating resources and performing operations on them. They are commonly used in web development to identify resources such as web pages, images, or files.

Types of URIs
URL (Uniform Resource Locator): A URL is a type of URI that not only identifies a resource but also provides a means to locate it, typically using a specific protocol (like http, https, ftp, etc.).

Example URL: https://www.example.com/index.html

URN (Uniform Resource Name): A URN is a type of URI that provides a unique and persistent name for a resource without specifying its location.

Example URN: urn:isbn:0451450523

Components of a URL
A URL is a specific type of URI and typically consists of the following components:

Scheme: Defines the protocol used to access the resource. Common schemes include http, https, ftp, etc.

Example: https

Host: The domain name or IP address of the server where the resource is hosted.

Example: www.example.com

Port (optional): Specifies the port number to use for the connection.

Example: :8080 (often omitted if using the default port for the scheme)

Path: The specific path to the resource on the server.

Example: /index.html

Query String (optional): Provides additional parameters for the resource. It begins with ? and includes key-value pairs separated by &.

Example: ?search=uri&sort=asc

Fragment (optional): Refers to a specific part of the resource. It begins with #.

Example: #section2


Scheme: https
Host: www.example.com
Port: 8080
Path: /path/to/resource
Query String: ?search=uri&sort=asc
Fragment: #section2
    */


/*What is Hoisting

    Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation.
    Let's take a simple example of variable hoisting,

    ```javascript
    console.log(message); //output : undefined
    var message = "The variable Has been hoisted";
    ```

    The above code looks like as below to the interpreter,

    ```javascript
    var message;
    console.log(message);
    message = "The variable Has been hoisted";
    ```

    In the same fashion, function declarations are hoisted too

    ```javascript
    message("Good morning"); //Good morning

    function message(name) {
      console.log(name);
    }*/

      //20Closures
      /* A closure is the combination of a function bundled(enclosed) together with its lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables, functions and other data even after the outer function has finished its execution. The closure has three scope chains.

    1. Own scope where variables defined between its curly brackets
    2. Outer function's variables
    3. Global variables

    Let's take an example of closure concept,

    ```javascript
    function Welcome(name) {
      var greetingInfo = function (message) {
        console.log(message + " " + name);
      };
      return greetingInfo;
    }
    var myFunction = Welcome("John");
    myFunction("Welcome "); //Output: Welcome John
    myFunction("Hello Mr."); //output: Hello Mr. John */