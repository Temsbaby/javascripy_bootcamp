//WHILE LOOP

// while (condition){
//     //code that gets executed as long as the condition is true
// }

// let i = 0;
// while (i < 10){
//     console.log(i);
//     // i = i + 1; //i++
//     i  += 2;

// }
 
// let someArray  = ['Mike', 'Antal', 'Marc', 'Emir', 'Louiza', 'Jacky'];

// let notFound  = true

//    while (notFound && someArray.length > 0){
//     if (someArray[0]  === 'Louiza'){
//         console.log('Found her!');
//         notFound = 'False';

//     }else{
//         someArray.shift();
//     }
//    }
//    console.log(someArray)

// //    let number ;
// //    let coun = 0;

// //    do {
// //        number = prompt ("Please enter a number between 0 and 100: Counter${counter++");
// //    } while (!( number >= 0     && number< 100));

   

//FOR LOOPS
for (let i = 0; i < 10; i++ ) {
    console.log(i);
}

let arr = [];
for (let i = 0; i < 100; i++){
    arr.push(i);

}
console.log(arr);

//nested arrays
let arrOfArrays = [];

for (let i = 0; i < 3; i++){
    arrOfArrays.push([]);
    for (let j = 0; j < 7; j++){
        arrOfArrays[i].push(j);

    }
}
console.log(arrOfArrays)

//LOOPS & ARRAYS
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for(let i = 0; i < names.length; i++){
   console.log(names[i]);
}



 //Exercise
//  //do while
// //1
//  let counTer = 0;
//  //2
//  let step;
//  //3
//  do{
//     step = 1
//    counTer < 5
// //    console.log(counTer)
//  }while(counTer = counTer + step)
// // console.log(counTer)

//for loops
let myWork = [];

for(let j = 1; j < 11; j++){
    let stat = j % 2 === 0 ?  true: false 
    let lessons = {'lesson': j, stat}
    myWork.push(lessons)
}
console.log(myWork)

//nested loops
//1
let myTable = [];

//2
let numOfRows = 2
let numOfColumns = 2

//3
 let tableCOunter = 0

 //4
 for(let i = 0; i < 2; i++){
     let tempTable = []
     tempTable.push(i)
     for (let j = 0; j < 2; j++){
        tableCOunter++
        tempTable.push(tableCOunter)
        myTable.push(tempTable)
     }
 }
console.table(myTable)

//loops and arrays