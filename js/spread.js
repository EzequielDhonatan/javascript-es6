// ES5
/*
function sum (n1, n2, n3) {
    return n1 + n2 + n3
}
var numbers = [1, 2, 3]
console.log(sum(numbers[0], numbers[1], numbers[2]))
console.log(sum.apply(null, numbers))
*/

// ES6
let sum = (n1, n2, n3) => n1 + n2 + n3
let numbers = [1, 2, 3]

console.log(sum(...numbers))

console.log(Math.min(...numbers))
console.log(Math.max(...numbers))

let objectsC = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
}
let {a, b, ...c} = objectsC
console.log(a, b, c)