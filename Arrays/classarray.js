class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    get(index) {
        return this.data[index];
    }



    pop(){
        const lastitem=this.data[this.length-1];
        console.log(lastitem)
    }



    delete(index){
        const item=this.data[index]

        for(let i=index;i<this.length;i++){
            this.data[i]=this.data[i+1];
        }
        delete this.data[this.length-1];
    this.length--;
    }

}

const newArray = new MyArray();
newArray.push("apple");
newArray.push("pineapple");
newArray.push("orange");

console.log(newArray.get(1));  // Output: "pineapple"
newArray.pop()
console.log(newArray.delete(0));

console.log(newArray);  // View the entire custom array
