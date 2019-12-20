const str = 'dddcctt';

function occurance(str) {
    const obj={};
    for(let i=0; i<str.length; i++) {
        let char = str.charAt(i);
        if(obj[char]) {
            obj[char]++
        } else {
            obj[char]=1;
        }
    }
    return obj;
}

console.log(occurance(str));