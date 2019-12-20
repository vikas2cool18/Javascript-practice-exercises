function allEvens(numbers) {
    const boolean = numbers.every(function(number) {
       return number%2==0;
    })
    return boolean;
}

console.log(allEvens([10,20,30,40]));
console.log(allEvens([10,20,33,40]));

function someEvens(numbers) {
    const boolean = numbers.some(function(number) {
        return number%2==0
    })
    return boolean;
}

console.log(someEvens([9,11,13,18]));
console.log(someEvens([9,11,13,181]));