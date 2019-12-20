const person = {
    name: 'Mohan',
    city: 'bangalore'
}
console.log(person)
console.log(Object.assign({}, person, {city: 'mysore', gender: 'bangalore'}))
console.log(person)