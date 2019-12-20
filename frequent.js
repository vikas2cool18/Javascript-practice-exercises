
function listMax(a, b) {
    const arr = [];
    for (let i = 0; i < a; i++) {
        arr.push(0);
    }
    const inputArr = b.split(',');
    inputArr.forEach(function (item) {
        const itemArr = item.trim().split(' ');
        for (let i = parseInt(itemArr[0]); i <= parseInt(itemArr[1]); i++) {
            arr[i-1] += parseInt(itemArr[2]);
        }
    })
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(listMax(5, "1 2 100, 2 5 100, 3 4 100"));