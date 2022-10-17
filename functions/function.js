console.log('Welcome to Functions');

// functions
function sayHello() {
    let you = prompt("What's your name?") ;
    console.log("Hello", you + "!");
}
//calling functions
// sayHello()

//parameters & argument
function sayHello2(name)  {
    console.log(`Hello again ${name}`);
}
sayHello2('Asimiyu') //argument

function addTwoNumbers( x, y){
    console.log(x + y );
}
addTwoNumbers(3, 6)

//special functions

//arrow functions
let addTwoNumbers2 = (x, y) => console.log(x + y);
addTwoNumbers2(7, 2)
 

const arr =["Squirrel", "alpaca", "buddy"];
arr.forEach((item, index) => console.log(`${index+1}. ${item}`))

//more than one line of code
const arr1 =["Squirrel", "alpaca", "buddy"];
arr.forEach((item, index) => {
     let newName = `Mr. ${item}`
     console.log(`${index+1}. ${newName}`)
})

//spread operators
let spread = ['so', 'much', 'fun'] ;
let message = ["JavaScript", 'is', ...spread, 'and', 'very', 'powerful'];
console.log(message)

//rest parameter works with strings only
function addArr(x, ...y){
    console.log(x + y);

}
addArr('hi',  'there', 'How are you?')

function addArr(x, ...y){
    console.log(x + y);
    

}
addArr(3, "4", 6)

//returning function values

function addThreeNumbers(x, y, z){
    return x + y + z;

}

const myAns = addThreeNumbers(4, 5, 2)
console.log(myAns)