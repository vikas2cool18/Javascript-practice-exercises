const fruits = ['apple', 'mango', 'kiwi'];

function buildObject(fruits) {
const obj={};
fruits.forEach(function(fruit) {
    obj[fruit] = fruit.length;
})
return obj;
}

console.log(buildObject(fruits));