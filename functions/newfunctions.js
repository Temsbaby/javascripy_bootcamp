console.log('Welcome to functions');

function sayHello() {
    let you = prompt("What's your name? ");
    console.log("Hello", you + "!");
}
function sayHello2(name) {
    // let you = prompt("What's your name? ");
    console.log(`Hello again ${name}`);
}

// sayHello()
sayHello2('Wilson')

function addTwoNumbers(x = 2, y = 3){
    console.log(x + y);
}

addTwoNumbers(5, 7, 5);

let addTwoNumbers2 = (x, y, z) => console.log(x + y + z);

addTwoNumbers2(5, 7, 5)

const arr = ["squirrel", "alpaca", "buddy"];
arr.forEach((item, index) => {
    let newName = `Mr. ${item}` //Local Variable
    console.log(`${index+1}. ${newName}`)
    console.log(newName);
})



let spreads = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...spreads, "and", "very","powerful"];

console.log(message)

function addArr(x, ...y){
    console.log(x + y);
}

addArr("hi", "there!", "How are you?")
addArr(3, 4, 6)

// let favoriteSubject = prompt("What is your favorite subject?");
// console.log(favoriteSubject)

function addThreeNumbers(x, y, z) {
    return x + y + z;
}

(x, y, z) => x + y + z;

const myAns = addThreeNumbers(5,6,7)
console.log(myAns)