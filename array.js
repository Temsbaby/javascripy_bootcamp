console.log('ARRAYS')

const myStudents = ['Mariam', 'Temitope', 'Caleb', 'Delight', 'Petra', 'Dappa', 'Progress', 'Henry', 'Felix', 'Paul', 'Camilus', 'Amas', 'Cruz', 'Victoria', 'Fidelis', 'Grace'];
console.log(myStudents);

var firstName = myStudents[0];
console.log(firstName);

var myName = myStudents[1];
console.log(myName);

myStudents[1] = 'Temple';
console.log(myStudents);

let numOfStudents = myStudents.length;
console.log(numOfStudents);

// EXERCISE 1

const shoppingList = ['Milk', 'Bread', 'Apples'] ;
console.log(shoppingList)

let numOfItems = shoppingList.length;
console.log(numOfItems) ;

shoppingList[1] = 'Bananas';
console.log(shoppingList)



 
//ARRAY METHODS
//ADDING ELEMENTS

myStudents.push('Temitope'); //Adding elements to the last of the array
console.log(myStudents);

myStudents.unshift('Wilson'); //Adding elements to the start of the array
console.log(myStudents);

myStudents.shift();  //Removing the first element in an array
console.log(myStudents);

myStudents.pop(); //Removes the last element in an array
console.log(myStudents)

myStudents.splice(11, 1); //Removes an element from an array
console.log(myStudents);

myStudents.splice(14, 1, 'Queen'); //Removes & Replace an element
console.log(myStudents);

const PetraIndex = myStudents.indexOf('Petra');
console.log(PetraIndex)

//HIGHER ORDER METHODS

//FILTER METHODS
const arr = ['Wilson', 'Daniel', 'Wilson', 'Joe', 'Raymond', 'Wilson']
const wilsonIndex = arr.filter((name) => name === 'Wilson');
console.log(wilsonIndex)


const sortedArr = myStudents.sort();
console.log(sortedArr);

myStudents.reverse()
console.log(myStudents)


//EXERCISE 2
//1
const list = [];

//2
 list.push  ('Milk', 'Bread', 'Apples');
console.log(list)

//3
list.splice(1, 1,  'Bananas', 'Eggs') ;
console.log(list);

//4
list.pop();
console.log(list);

//5
const sortedList = list.sort();
console.log(sortedList);

//6
const milkIndex  = list.indexOf('Milk')
console.log(milkIndex);

//7
list.splice(1,0, 'Carrot', 'Lettuce');
console.log(list);

//8
const newList  = ['Juice', 'Pop'];

//9
const concactList1  = list.concat(newList);
console.log(concactList1);
const concactList2  = concactList1.concat(newList);
console.log(concactList2);

//10
const lastIndex = concactList2.length -1;
console.log(lastIndex)


//MULTIDIMENSIONAL ARRAYS

const myArray = [
    [[1, 2,3, 4], [1, 2,3, 4], [1, 2,3, 4], [1, 2,3, 4]],
    [[1, 2,3, 4], [1, 2,3, 4], [1, 2,3, 4], [1, 2, 'w', 4]],
    [[1, 2,3, 4], [1, 2,3, 4], [1, 'R',3, 4], [1, 2,3, 4],]
] 
console.log(myArray [1] [3] [2])
console.log(myArray [2] [2] [1])




//OBJECTS IN JAVASCRIPT
const asimiyu = {
    firstName: 'Temitope',
    lastName: 'Asimiyu',
    age: 10,
    gender: 'Female',
    complexion: 'dark',
    height: "5'11",
    weight: '70'
}

const myHeight  = asimiyu.height; //DOT NOTATION
console.log(myHeight)

const myWeight  = asimiyu['weight']
console.log(myWeight)

asimiyu['weight'] = '75';
console.log(asimiyu)

asimiyu['lastName'] = "walker";
asimiyu.middleName  = 'asimiyu';

console.log(asimiyu)

//EXERCISE 4
//1
const myCar = {
    make:'Benz',
    model:'GLE E35',
    color:'White',
    year:'2022',
    forSale:'true'
}
//2
let carColor  = 'color'
myCar[carColor] = 'Black';

console.log(myCar)


//3
carColor = 'forSale';
myCar[carColor] = 'false';
console.log(myCar);

//4
const make  = myCar.make;
const model  = myCar['model']
console.log(`Make: ${make}`)
console.log(`Model: ${model}`)

//5
const forSale = myCar['forSale']
console.log(`Is car for sale?: ${forSale}`)

//WORKING WITH OBJECTS AND ARRAYS

//OBJECTS IN OBJECTS
const student  = {
    fullName: 'Peter Obi',
    jambReg: '44097478EDF',
    matNum: 'u2014/5575001',
    bio:{
        age: '32',
        gender: 'M',
        dob: '12/2/1990',
        stateOfOrigin: 'Anambra',
        lga: 'Njikoka',
        healthStatus: {
            bloodGroup: 'O-',
            genotype: 'AA',
            mantus: false,

        }
    },
    levels: ['LV100', 'LV200', 'LV300', 'LV400'],
    currentLevel: 'LV300',
    courses: [
        {
            'YR1':{
                sem1:['MTH110.1', 'MTH120.1', 'PHY101.1'],
                sem2:['MTH114.2', 'GES104.2', 'PHY102.2'],
            },
            'YR2':{
                sem1: [],
                sem2: []
            }
        }
    ]
}

const myGenotype = student.bio['healthStatus'] ['genotype']
console.log(myGenotype)

console.log(student.currentLevel)

const ges104 = student.courses[0].YR1['sem2'] [1]
console.log(ges104)

//EXERCISE 5
//1
const people ={
    friends:[],
}

//2
const friend1 ={
    firstName: 'Glory',
    lastName: 'Agbone',
    iD: '1'
}

var friend2 ={
    firstName:'Tejiri',
    lastName: 'Ejevowvo',
    iD: '2'
}
let friend3 = {
    firstName: 'Gweke',
    lastName: 'Wisdom',
    iD:'3'
}

//3
people['friends'].push(friend1, friend2, friend2);

//4
console.log(people['friends'])


//OPERATORS

console.log('1' + '1')
console.log( 1 + 1 )
console.log(1 + '1')

const sum = 7 + 3;
const minus = 7 - 3;
const times = 7 * 3;
const divide = 7 / 3;
const raise = 7 ** 3;
const modulus = 7 % 3;
// const sum = 7 + 3;


//CLASS PROJECT
//1
const theList = [
    'Laurence',
    'Svekis',
    'true',
    '35',
    'null',
    'undefined',
     {
        test: 'one',
        score: '55',
    },
    [
        'one',
        'two'
    ]
    
] ;



theList.shift();

theList.unshift('FIRST');
theList.pop();
theList.push('LAST');
theList.splice(2, 5, 'MIDDLE', 'hello World');
console.log(theList)

//COMPANY PRODUCT CATALOG
//1
const storeItems = []


//2
let item1 = {
    itemName: 'Nutzy',
    model: 'Peanut Butter',
    quantity: '227g'
} 
const item2  = {
    itemName: 'St Ives',
    model: 'Body Wash',
    quantity: '650ml'
}

const item3  = {
    itemName: 'Vaseline',
    model: 'Body Lotion',
    quantity: '400ml'
}
 
//3
storeItems.push(item1, item2, item3)
console.log(storeItems)

//4
const item3Quantity = storeItems[2]['quantity'] ;
console.log(item3Quantity);


//COMPARISON OPERATORS
console.log(7 > 3)
console.log(7 < 3)
console.log(7 >= 3 )
console.log(7  <= 3)
console.log('Tems' === 'tems' )
console.log(7 !== 3 )

//LOGICAL OPERATORS
//AND, OR
const x  = 10;  const y  = 20;

const myAnswer  =  10 < 20 || 'Tems' === 'tems';
console.log (`myAnswer: ${myAnswer}`)

const myAnswer2  =  10 < 20 && 'Tems' === 'tems';
console.log (`myAnswer: ${myAnswer2}`)


