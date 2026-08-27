//const myObject = {
//    name: 'John',
//    lastname: 'Doe'
//};

//console.log(Object.keys(myObject));
//console.log(Object.values(myObject));
//console.log(Object.entries(myObject));

//const myArray = 
//    ['student', 'Joe'],
//    ['teacher', 'Rose']
//]

//console.log(Object.fromEntries(myArray));

// Use the methods above to :
// Count how many keys and values are in the object below
// Display : "The x# key is : --- The x# value is : ---".

//let myObj = {
//    name : "John",
//    lastName : "Doe",
//    age : 25,
//    friends : ["Mark", "Lucie", "Ana"]
//}

//const numKeys = Object.keys(myObj);
//const numvalues = Object.values(myObj);

//console.log(numKeys.length);
//console.log(numvalues.length);

//const myName = myObj.name;
//const myLastname = myObj.lastName;

//console.log(myName, myLastname);

//const nick = {
//    week1: 1,
//    week2: 0,
//    week3: 2, 
//    week4: 0,
//    week5: 4,
//    week6: 3,
//    week7: 7,
//    week8: 20,
//}

//const rose = {
//    week1: 3,
//    week2: 12,
//    week3: 10, 
//    week4: 10,
//    week5: 10,
//    week6: 10,
//    week7: 10,
//    week8: 10
//}

//const sumTotal = (studentObject) => {return Object.values(studentObject).reduce((total, value) => total + value, 0)}

//const sumNick = Object.values(nick).reduce((total, value) => total + value, 0);
//const sumRose = Object.values(rose).reduce((total, value) => total + value, 0);

//console.log(sumTotal(nick));
//console.log(sumTotal(rose));


const rogerweek = {

    hrwork: [8, 8, 8, 8, 8, 0, 0],
    hrfreetime: [4, 4, 4, 4, 4, 10, 10],

    calculateHours: function () {

        const workHours = this.hrwork.reduce((total, hours) => total + hours, 0);
        const freeHours = this.hrfreetime.reduce((total, hours) => total + hours, 0);

        console.log("Work hours per week:", workHours);
        console.log("Free time hours per week:", freeHours);
    }
};

rogerweek.calculateHours();