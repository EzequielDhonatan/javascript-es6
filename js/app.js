// ES5
var fullName = function (name, lastName) {
    return name + " " + lastName + "."
}
// console.log(fullName('Ezequiel', 'Dhonatan'))

// ES6
let fullName6 = (name, lastName) => `${name} ${lastName}.`
// console.log(fullName6('Ezequiel', 'Dhonatan'))

let n1 = 10
let n2 = 15
let result = `O resultado da soma entre ${n1} + ${n2} é igual: ${n1 + n2}`
console.log(result)