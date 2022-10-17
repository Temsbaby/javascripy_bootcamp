console.log( 'Hello Built-in Methods')


// //foreach methods
// let arr = ["grapefruit", 4, 'hello', 5.6, true] 

// function printStuff(element, index) {
//       console.log(`Printing stufff: ${element} on array position: ${index} `);
// }
// arr.forEach(printStuff);

//another method in writinng foreach
// arr.forEach((element, index)  => console.log(`Best way of printing: ${element} on array position: ${index}`))

// //filter methods

// let arR = ['squirrel', 5, 'tjed', new Date(), true] 

// function checkString(e, i) {
//      return typeof e === 'string'
// }

// let filterArr = arR.filter(checkString);
// console.log(filterArr)
// console.log(arR.every(checkString))

//arrow function
// (e, i) => typeof e === "string"

// let filterArr =  arr.filter((e, i) => typeof e === "string")
// console.log(filterArr)


// //copywithin  method
// arr = ['grapefruit', 4, 'hello', 5.6, true];
// arr.copyWithin(0, 2, 5)
// console.log(arr)                                                                                                                                                                                          

//mapping values to an array
let arr = [1000, 20000, 3000, 4000];
let mapped_arr = arr.map(x => `$${x} `);
console.log(mapped_arr);
