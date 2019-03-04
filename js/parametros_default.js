// ES5
/*
function showFullName (firstName, lastName) {
    firstName = firstName === undefined ? 'FirstName' : firstName
    lastName = lastName === undefined ? '' : lastName
    console.log(firstName + ' ' + lastName);
}
showFullName()
*/

// ES6
let showFullName = (firstName = 'FirstName', lastName = '') => console.log(`${firstName} ${lastName}`)
showFullName('Ezequiel')