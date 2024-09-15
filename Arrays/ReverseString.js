//Convert the String to Array;(Split method)
//Reverse the array(reverse method)
//Convert the array back to string;(join method)
const reverseString =(str)=>
str.split("").reverse().join()
console.log(reverseString("hello"));


function reverseString1(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Test the function
const input = "hello";
const result = reverseString1(input);
console.log(result);  // Output: "olleh"
