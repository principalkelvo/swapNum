//swap one digit to make a number smaller
let number = 534738;
let newNumber = number.toString().split('').map(function(digit){
    return digit;
}
)
console.log(newNumber);
//loop each number to find the smallest
let smallest = newNumber[0];
for(let i = 0; i < newNumber.length; i++){
    if(newNumber[i] < smallest){
        smallest = newNumber[i];
    }
}
console.log(smallest);
//move the smallest number to the first index in the array of newNumber
for(let i = 0; i < newNumber.length; i++){
    if(newNumber[i] == smallest){
        newNumber.splice(i, 1);
        newNumber.unshift(smallest);//replaces the first element of the array with the new element
    }
}
console.log(newNumber);