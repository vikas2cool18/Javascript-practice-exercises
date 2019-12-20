function oneElementOut(a,b,c) {
    let result = true;
    const arr = [a,b,c];
    arr.forEach(function(argument) {
        if(!argument) {
            result = false;
        }
    })
    return result;
}

console.log(oneElementOut(false, false, true));
console.log(oneElementOut(1,2,3));