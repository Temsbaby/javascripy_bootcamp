console.log('Hello World')

var firstName = 'Temitope'

console.log(firstName)

let lastName  = 'Asimiyu'
console.log(lastName)

const fullName  = firstName + ' '  + lastName;
const fullName2 = `My full name is ${firstName}  ${lastName}` //STRING INTERPOLATION
console.log(fullName);
console.log(fullName2);

const myAge   = 10

const pi  = 22 / 7
console.log(pi)

let x   = 'It\'s a \ngood \tday';  //ESCAPE CHARACTERS
console.log(x)

//DataType
console.log(typeof fullName)
console.log(typeof pi)
//DataType

//Booleen
const y   = 1   === '1';
console.log(y)
//Booleen

//Undefined
const z   = undefined;
// console.log(z)
let emptyVar;
console.log(emptyVar)
//Undefined

//NULL
let nullify   = null;
console.log(nullify)
//NULL

//Covert string to number & vice versa
const strToNum   = Number('1')
console.log(typeof strToNum)

const backToString   = String(strToNum)
console.log(typeof backToString)

const toFloat   = parseFloat(myAge)
console.log(toFloat)

const toInt   = parseInt(pi)
console.log(toInt)