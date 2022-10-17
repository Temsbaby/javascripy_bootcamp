//while loops

//The first loop we will discuss is the while loop. A while loop executes a certain block of code as long as an expression evaluates to true. The snippet below demonstrates the syntax of the while loop:

// while (condition) {
//     // code that gets executed as long as the condition is true
// }


let i = 0;
while (i < 10) {
    console.log(i);
    //i = i + 1; //i++
    i += 2; //i = i + 2;
}
//We can have a while loop that looks for a value in an array, like this:
let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];

let notFound = false;

    while (notFound && someArray.length > 0) {
        if (someArray[0] === "Louiza") {
            console.log("Found her!");
            notFound = false;
        } else {
            someArray.shift();
        }
    }


//do while loops
/*In some cases, you really need the code block to be executed at least once. For
example, if you need valid user input, you need to ask at least once. The same goes
for trying to connect with a database or some other external source: you will have to do so at least once in order for it to be successful. And you will probably need to do so as long as you did not get the result you needed. In these cases, you can use a do while loop. */

// do {
//     // code to be executed if the condition is true
// } while (condition);

// let number;
// let counter = 0;
// do {
//     number = prompt(`Please enter a number between 0 and 100: Counter${counter++}`);
// } while (!(number >= 0 && number < 100));

// Exercise While Loops
//1
const maxValue = 100;

//2
const rnd = Math.floor((Math.random() * maxValue) + 1)
// console.log(rnd)

//3
let isCorrect = false;
let lives = 5;

//4
// let number = parseInt(window.prompt(`Enter the guessed number: lives-${lives}`))

// while(!isCorrect && lives > 0 ) {
//     if(number === rnd){
//         isCorrect = true;
//         console.log('Hurray, you guessed it right')
//     } else {
//         lives--;
//         if(lives === 0){
//             console.log('Game Over')
//             console.log(`Your number is: ${rnd}`)
//         } else {
//             if(number > rnd){
//                 console.log('your guess is high, go low')
//                 number = parseInt(window.prompt(`Enter the guessed number: lives-${lives}`))
//             } else {
//                 console.log('your guess is low, go high')
//                 number = parseInt(window.prompt(`Enter the guessed number: lives-${lives}`))
//             }
//         }
        
//     }
// }

// FOR LOOPS

/*for (initialize variable; condition; statement) {
    // code to be executed
} */

/**Between the parentheses following the for statement, there are three parts, separated by semi-colons. The first one initializes the variables that can be used in the for loop. The second one is a condition: as long as this condition is true, the loop will keep on iterating. This condition gets checked after initializing the variables before the first iteration (this will only take place when the condition evaluates to true). The last one is a statement. This statement gets executed after every iteration. Here is the flow of a for loop: */

// 1. Initialize the variables.
// 2. Check the condition.
// 3. If the condition is true, execute the code block. If the condition is false, the
// loop will end here.
// 4. Perform the statement (the third part, for example, i++).
// 5. Go back to step 2.

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let arr = [];
for (let i = 0; i < 100; i++) {
    arr.push(i);
}
console.log(arr)

// let arr = [];
// for (let i = 0; i < 100; i = i + 2) {
// arr.push(i);
// }

//NESTED LOOPS
//Sometimes it can be necessary to use a loop inside a loop. A loop inside a loop is called a nested loop.

//while (condition 1) {
    // code that gets executed as long as condition 1 is true
    // this loop depends on condition 1 being true
    //while (condition 2) {
    // code that gets executed as long as condition 2 is true
    //}
//}

let arrOfArrays = [];

for (let i = 0; i < 3; i++){
    arrOfArrays.push([]);
    for (let j = 0; j < 7; j++) {
        arrOfArrays[i].push(j);
    }
}
console.log(arrOfArrays)

//Loops and Arrays

// We can combine the length property and the condition part of the for loop or while loop to loop over arrays. It would look like this in the case of a for loop:
// let arr = [some array];
// for (initialize variable; variable smaller than arr.length; statement)
// {
// // code to be executed
// }

// Let's start with a simple example that is going to log every value of the array:

let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i ++){
console.log(names[i]);
}

//for of loop
/**There is another loop we can use to iterate over the elements of an array: the for of loop. It cannot be used to change the value associated with the index as we can do
with the regular loop, but for processing values it is a very nice and readable loop. */

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let name of names){
// console.log(name);
// }


//Loops and Objects
/**We have just seen how to loop over the values of an array, but we can also loop
over the properties of an object. This can be helpful when we need to go over all the
properties but don't know the exact properties of the object we are iterating over. */

/**Looping over an object can be done in a few ways. We can use the for in loop to
loop over the object directly, or we can convert the object to an array and loop over
the array. */

// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//     };
//     for (let prop in car){
//     console.log(car[prop]);
//     }

//BREAK AND CONTINUE