// ES5
/*
var fullName = ['Ezequiel', 'Dhonatan']
var name = fullName[0]
var lastName = fullName[1]
console.log(name)
console.log(lastName)
*/

// ES6
/*
let fullName = ['Ezequiel', 'Dhonatan']
let [name, lastName] = fullName
console.log(name)
console.log(lastName)
*/

let fullName2 = {
    firstName: 'Ezequiel',
    lastName: 'Dhonatan',
}
let {firstName, lastName} = fullName2
console.log(firstName)
console.log(lastName)