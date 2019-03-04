// ES5
/*
function customUpperCase () {
    
    for (var index = 0; index < arguments.length; index++) {
        console.log(arguments[index].toUpperCase())
        
    }

}
customUpperCase('Ezequiel', 'Dhonatan', 'EZEDHON', 'Outro')
*/

let customUpperCase = (...params) => {
    params.forEach((value) => {
        console.log(value.toUpperCase())
    })
}
customUpperCase('Ezequiel', 'Dhonatan', 'EZEDHON', 'Outro')

let multiply = (multiplier, ...numbers) => numbers.map((number) => number * multiplier)
console.log(multiply(5, 4, 6, 2))