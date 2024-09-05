/*What is JSON and its common operations

   **JSON** is a text-based data format following JavaScript object syntax, which was popularized by `Douglas Crockford`. It is useful when you want to transmit data across a network. It is basically just a text file with an extension of .json, and a MIME type of application/json

   **Parsing:** Converting a string to a native object

   ```javascript
   JSON.parse(text);
   ```

   **Stringification:** Converting a native object to a string so that it can be transmitted across the network

   ```javascript
   JSON.stringify(object);
   ```*/

//6)### What is the purpose of the array slice method

/*The **slice()** method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end of the array. This method can also accept negative index which counts back from the end of the array.*/
//let arr=[1,2,3,4,5,4]
//console.log(arr.slice(2,4))

/*What is the purpose of the array splice method

   The **splice()** method adds/removes items to/from an array, and then returns the removed item. The first argument specifies the array position/index for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array.*/
let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

console.log(arrayIntegersOriginal1.splice(0, 2));

/* What is the difference between slice and splice

   Some of the major differences in a tabular form:

   | Slice                                        | Splice                                          |
   | -------------------------------------------- | ----------------------------------------------- |
   | Doesn't modify the original array(immutable) | Modifies the original array(mutable)            |
   | Returns the subset of original array         | Returns the deleted elements as array           |
   | Used to pick the elements from array         | Used to insert/delete elements to/from array |
*/
//Splice
/*Purpose: Adds/removes elements from an array, modifying the original array.
Parameters:
start: The index at which to start changing the array.
deleteCount (optional): The number of elements to remove from the array starting at start.
items (optional): Items to add to the array starting from start*/
let arr = [1, 2, 3, 4, 5];
let removedElements = arr.splice(1, 2); // Removes 2 elements starting from index 1

console.log(removedElements); // Outputs: [2, 3]
console.log(arr); // Original array is modified: [1, 4, 5]

//Adding
let arr1 = [1, 2, 3, 4, 5];
arr.splice(2, 0, "a", "b"); // Inserts 'a' and 'b' at index 2 without removing anything

console.log(arr); // Modified array: [1, 2, 'a', 'b', 3, 4, 5]
/*slice(): Does not modify the original array.
splice(): Modifies the original array.
Return Value:

slice(): Returns a new array with the extracted elements.
splice(): Returns an array containing the removed elements.
Use Cases:

Use slice() when you want to copy/extract part of an array without altering the original.
Use splice() when you want to modify the array by adding/removing elements. */

/*How do you compare Object and Map

   **Objects** are similar to **Maps** in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Due to this reason, Objects have been used as Maps historically. But there are important differences that make using a Map preferable in certain cases:

   1. The keys of an Object can be Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive type.
   2. The keys in a Map are ordered while keys added to Object are not. Thus, when iterating over it, a Map object returns keys in the order of insertion.
   3. You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
   4. A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
   5. An Object has a prototype, so there are default keys in an object that could collide with your keys if you're not careful. As of ES5 this can be bypassed by creating an object(which can be called a map) using `Object.create(null)`, but this practice is seldom done.
   6. A Map may perform better in scenarios involving frequent addition and removal of key pairs.
 */

//8)
/*What is the difference between == and === operators

   JavaScript provides both strict(===, !==) and type-converting(==, !=) equality comparison. The strict operators take type of variable in consideration, while non-strict operators make type correction/conversion based upon values of variables. The strict operators follow the below conditions for different types,

   1. Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.
   2. Two numbers are strictly equal when they are numerically equal, i.e., having the same number value.
      There are two special cases in this,
      1. NaN is not equal to anything, including NaN.
      2. Positive and negative zeros are equal to one another.
   3. Two Boolean operands are strictly equal if both are true or both are false.
   4. Two objects are strictly equal if they refer to the same Object.
   5. Null and Undefined types are not equal with ===, but equal with == .
      i.e, `null===undefined --> false`, but `null==undefined --> true`

   Some of the example which covers the above cases:

   ```javascript
   0 == false   // true
   0 === false  // false
   1 == "1"     // true
   1 === "1"    // false
   null == undefined // true
   null === undefined // false
   '0' == false // true
   '0' === false // false
   NaN == NaN or NaN === NaN // false
   []==[] or []===[] //false, refer different objects in memory
   {}=={} or {}==={} //false, refer different objects in memory */

// 9)Arrrow function An arrow function is a shorter/concise syntax for a function expression and does not have its own this,
//arguments, super, or new.target. These functions are best suited for non-method functions, and they cannot be used as constructors.

const arrowFunc1 = (a, b) => a + b; // Multiple parameters
const arrowFunc2 = (a) => a * 10; // Single parameter
const arrowFunc3 = () => {}; // no parameters

//10 First class function
/*What is a first class function

    In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable.

    For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable. For example, in the below example, handler functions assigned to a listener

    ```javascript
    const handler = () => console.log("This is a click handler function");
    document.addEventListener("click", handler);
    ```*/
//11 First order function
/*
    A first-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

    ```javascript
    const firstOrder = () => console.log("I am a first order function!");
    ```*/

//12 Higher order function
/*A higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.
    The syntactic structure of higher order function will be as follows,*/

const firstOrderFunc = () => {
  console.log("Hello, I am a First order function");
  const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
  higherOrder(firstOrderFunc);
};

/*// Define the first-order function
const firstOrderFunc = (arr) => {
    let result = '';
    
    // Iterate over the array and build the result string
    for (let i = 0; i < arr.length; i++) {
        result += `${arr[i]} rupees`;
        if (i < arr.length - 1) {
            result += ', ';
        }
    }

    console.log(result); // Log the final result string
};

// Define the higher-order function
const higherOrder = (callback, arr) => {
    callback(arr);  // Call the function with the provided array
};

// Call the higher-order function and pass 'firstOrderFunc' along with an array
const amounts = [1, 2, 3];
higherOrder(firstOrderFunc, amounts);
 
          */

