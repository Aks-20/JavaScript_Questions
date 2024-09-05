//1)Object literal syntax:
//The object literal syntax (or object initializer), is a comma-separated set of name-value pairs wrapped in curly braces.
var object = {
  name: "akshat",
  age: 20,
};
//Object constructor:
//The `Object()` is a built-in constructor function so "new" keyword is not required. The above code snippet can be re-written as:
var object = Object();
//Using new keyword
var object = new Object();
//Object's create method:
var object = Object.create(null);
//The `create` method of Object is used to create a new object by passing the specified prototype object and properties as arguments, i.e., this pattern is helpful to create new objects based on existing objects.
//The second argument is optional and it is used to create properties on a newly created object.
// example
var object = Object.create(vehicle, car);
console.log(object);

//2)Function constructor:
class person {
  constructor(name) {
    this.name = name;
    this.age = 21;
  }
}

// Function constructor with prototype:**

//This is similar to function constructor but it uses prototype for their properties and methods,
function person() {
  person.prototype.name = "Akshat";
  var object = new Object();
}

// Create a new instance using function prototype.
var newInstance = Object.create(func.prototype);
// Call the function
var result = func.call(newInstance, x, y, z);

//3 Object.assign is used copy multiple properties  from one or more objects and stores them into target object
const orgObject = { company: "XYZ Corp" };
const carObject = { name: "Toyota" };
const staff = Object.assign({}, orgObject, carObject);

//4)ES6 syntax
class Person {
  constructor(name) {
    this.name = name;
  }
}
var object = new Person("Sudheer");
//5)Singleton-Singleton is an object which can only be instaniated one time .Repeated calls to its constructor return  the same instance.
var object = new (function () {
  this.name = "Akshat";
})();
//6 Prototype Chaining:Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language. i.e, When you create an object using a constructor function or a class, the created object inherits properties from a prototype object.
//The prototype on object instance is available through **Object.getPrototypeOf(object) or \_\_proto\_\_property whereas prototype on constructor function is available through **Object.prototype**.


//7The difference between Call, Apply and Bind can be explained with below examples,Call:
// The call() method invokes a function with a given `this` value and arguments provided one by one
 
var employee1 = { firstName: "John", lastName: "Rodson" };
   var employee2 = { firstName: "Jimmy", lastName: "Baily" };

   function invite(greeting1, greeting2) {
     console.log(
       greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
     );
   }

   invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
   invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?
    //Apply: Invokes the function with a given `this` value and allows you to pass in arguments as an array
    var employee1 = { firstName: "John", lastName: "Rodson" };
   var employee2 = { firstName: "Jimmy", lastName: "Baily" };

   function invite(greeting1, greeting2) {
     console.log(
       greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
     );
   }

   invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
   invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?

   //Bind: returns a new function, allowing you to pass any number of arguments
   var employee1 = { firstName: "John", lastName: "Rodson" };
   var employee2 = { firstName: "Jimmy", lastName: "Baily" };

   function invite(greeting1, greeting2) {
     console.log(
       greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
     );
   }

   var inviteEmployee1 = invite.bind(employee1);
   var inviteEmployee2 = invite.bind(employee2);
   inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
   inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?

   