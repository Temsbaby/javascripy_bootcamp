console.log('Hello, Logic')

var x = 10; //global variable

if(x > 2){
    console.log('Buy any marker')
    //code
    // console.log(x)
    // let y = 20; //local variable
    // console.log(y)
}  //--> codeblock
else{
    //alternative code
    console.log('Buy any color')

}
//EXERCISE 1
//1
let myVariable = true

//2
console.log(myVariable)

//3
if(myVariable === true){
    console.log('My variable is true')
}
if(!myVariable){
    console.log('My variable has changed')

}

//ELSE-IF STATEMENT
const marker = 'red'
const markerLength = 'short'

if (marker === 'black' && markerLength === 'short'){
    console.log('Buy black and short marker')
}else if ((marker ==='red' ||  marker === 'green') && markerLength === 'short'){
    console.log('Buy green or red marker and short')
}else{ console.log('Buy any marker') 
}

//Nested if statements
if(marker === 'black'){
    if(markerLength === 'short'){
        console.log('Buy black and short marker')
    }else{
        console.log('Let manage the long one')
    }
}

//prompt

//1
// const userAge = window.prompt()


// //2
// const agetoNum = Number(userAge)

// //3
// let message;


// //4
// if(userAge >= 21){
//     message = 'Entry allowed and purchase alcohol'
// }
// //5
// else if (userAge >= 19){
//     message = 'Entry allowed but you can not purchase alcohol '
// }else{
//     //6
//     message =   " You're not allowed here, please go home"
// }
// console.log(message)


// //Conditional Ternary Operator
const gender  = 'Male';

if(gender === 'Male'){
    console.log('He is a boy')
}else if(gender === 'Female'){
    console.log('She is a girl')
}else{
    console.log('He or she is others')
}
//Teneray operator
gender === 'Male'?  console.log('He is a boy') : gender === 'Female' ?  console.log('She is a girl') : console.log('He or she is others');

//EXERCISE TERNARY
//1
let iD = true

const   message = iD ? 'Allow entry' : 'Deny entry'

console.log(message)


//SWITCH STATEMENTS
const currentDay = 'Wednesday';

switch(currentDay){
    case 'Monday':
    console.log('I hate Mondays');
    break;
  case 'Tuesday':
        console.log('Tuesday is no class');
        break;
  case 'Wednesday':
       console.log('I love Wednesday');
       break;
    case 'Thursday':
        console.log('This is super story');
        break;
    case 'Friday':
        console.log('Thank God its Friday (TGIF)');
        break;
    case 'Sartuday':
        console.log('And on the 7th day, He Rested');
        break;
    case 'Sunday':
        console.log('Go to church');
        break;
    default:
        console.log('Invalid data')
}


