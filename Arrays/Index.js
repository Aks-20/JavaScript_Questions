
let arr=["Akshat","Akul","Aman","Sunny","Mohit"]
function index(allStudents,studentName){
   
    for(let i=0;i<allStudents.length;i++){
if (allStudents[i]===studentName) {
    console.log(`Found ${studentName}`)
}
    }
}


index(arr,"Akshat")