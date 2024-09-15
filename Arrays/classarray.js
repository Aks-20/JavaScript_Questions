class MyArray{
constructor()
{
    this.length=0;
    this.data={}
}
push (item){
    this.data[this.length]=item
    console.log("-----------",this.data)
}
}
const newarray=new MyArray()
console.log(newarray.push("apple"))