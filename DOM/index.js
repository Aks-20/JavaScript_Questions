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




let count=0;
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
}