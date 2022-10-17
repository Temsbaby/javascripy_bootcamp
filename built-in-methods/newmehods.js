console.log('Hello Built-in Methods')


// let arr = ["grapefruit", 4, "hello", 5.6, true];

// function printStuff(e, i) {
//     console.log(`Printing stuff: ${e} on array position: ${i}`);
// }

// (e, i) => console.log(`Printing stuff: ${e} on array position: ${i}`);

// arr.forEach(printStuff);

// arr.forEach((e, i) => 
//     console.log(`Best way of printing Element: ${e} & Index: ${i}`)
// )

// let arr = ["squirrel", '5', "Tjed", 'new Date()', true];

// function checkString(element, index) {
//     return typeof element === "string";
// }

// (e, i) => typeof e === 'string'

// let filterArr = arr.filter((e, i) => typeof e === 'string');
// console.log(filterArr);

// console.log(arr.every(checkString))

// arr = ["grapefruit", 4, "hello", 5.6, true];

// // arr.copyWithin(1, 3, 4);

// arr.copyWithin(0, 2, 4)
// console.log(arr)

let arr = [1000, 2000, 3000, 4000];
let mapped_arr = arr.map(x => `$${x}`);
console.log(mapped_arr);