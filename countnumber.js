/*function countDigits(number) {
    // Handle negative numbers by taking the absolute value
    //number = Math.abs(number);
    
    if (number == 0) {
        return 1;
    }

   let count = 0;
    while (number !== 0) {
        number = Math.floor(number / 10);
        ++count;
    }
    return count;
}

}*/function countR(num) {
    num=Math.abs(num)
    if (parseInt(num / 10) == 0) {
        return 1;
    }

    return 1 + countR(parseInt(num / 10));
}

console.log("Number of digits:", countR(-45560), "digits");
