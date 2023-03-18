// let userAge = 24;

// if (userAge < 18) {
//   console.log("he/she can not enter the pub");
// } else if (userAge > 18 && userAge < 23) {
//   console.log("he/she can enter but can not drink alcohol");
// } else {
//   console.log("he/she can enter and drink %");
// }

// let day;
// day = "sunday";

// switch (day) {
//   case "saturday":
//     console.log("today is saturday");
//     break;
//   case "monday":
//     console.log("today is monday");
//     break;
//   default:
//     console.log("I don't know the day");
// }

// let number = 1;

// while (number < 11) {
//     console.log(number);
//     number+=2;
// }

// let number = 132;

// while (number < 149) {
//     console.log(number);
//     number += 1;
// }

// let count = 25;

// while (count <= 100) {
//     if (count % 7 === 0) {
//         console.log(count);
//     }
//     count++;
// }

// for (let i = 1; i < 11; i++) {
//     console.log(i);
// }

// for (let i = 132; i < 149; i++) {
//     console.log(i);
// }

// for (let i = 132; i <= 148; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// for (let i = 25; i <= 100; i++){
//     if ((i % 7 === 0) && (i % 5 === 0)) {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         break;
//     }
// }

// function sayHello () {
//     console.log("hello wold!");
// }

// sayHello();

// function sayHi(name) {
//     console.log("hi " + name);
// }
// sayHi("Jaco");

// function cube(number) {
//     console.log(number * number * number);
// }

// cube(3);

// function bmi(lenght, weight) {
//     console.log(weight / (lenght * lenght));
// }

// bmi(1.85, 100);

// function cube(number) {
//     return(number * number * number);
// }

// let num = cube(5);

// console.log(num)

// function calAge(birthYear) {
//     return 2023 - birthYear;
// }

// let calAge = function () {
//     return 2023 - birthYear;
// }

// function subtraction(x, y) {
//     return (x - y);
// }

// console.log(subtraction(10, 2));

// function isOdd(number) {
//     if (number % 2 !== 0) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isOdd(5));

// let addition = function (number) {
//     let res = 0;
//     for (let i = 1; i <= number; i++) {
//         res = res + i;
//     }
//     return res;
// }

// console.log(addition(3));

// javascript scope

// var studentList = ["Jacob", "Any", "Maddy"];

// // console.log(studentList[1]);

// studentList[0] = "Nora";

// console.log(studentList[0])


// studentList[3] = "Harry";
// console.log(studentList);


// var commonData = ["Jacob", 25, true, null];
// commonData[1];

// var cars = ["Mercedes", "Audi", "BMW", "Volvo"];
// var carsLength = cars.length;

// console.log(carsLength)


// var studentList = ["Jacob", "Any", "Maddy"];

// //push
// studentList.push("Lice");
// console.log(studentList);

// //pop
// studentList.pop();
// console.log(studentList);

// //unshift
// studentList.unshift("Harry");
// console.log(studentList);

// //
// studentList.shift();
// console.log(studentList);

// //indexOf
// console.log(studentList.indexOf("Any"));

// //slice
// var friends = ["Ross", "Rachel", "Joey","Pota"];
// var closefriends = friends.slice(1, 3);
// console.log(closefriends);


// var books = ["harry potter", "Hobbit", "hunger games", "litle prince"];
// console.log(books[books.length - 1]);


//array iteration
// let books = ["harry potter", "Hobbit", "hunger games", "litle prince"];

// for (let i = 0; i < books.length; i++) {
//     console.log(books[i]);
// }

// books.forEach(function (book) {
//     console.log(book);
// });

// let array1 = [];
// for (let i = 0; i <= 20; i++) {
//     array1.push(i);
// }

// console.log(array1);


// array1.forEach(function (x) {
//     if (x % 5 === 0) {
//         console.log(x);
//     }
// });










//Objects

// let student = {
//     name: "Jacob",
//     age: 19,
//     city: "Gdynia",
// };

// console.log(student["name"]);

// console.log(student.city);



// let Leonard = {
//     name: "Leonard",
//     age: 33,
// };

// Leonard.age = 31;

// console.log(Leonard.age);


// let universities = [
//     {
//         name: "CKZIU",
//         year: 2023,
//         hasGone: true,
//     },
//     {
//         name: "ZAK",
//         year: 2024,
//         hasGone: false,
//     },
//     {
//         name: "nr.48",
//         year: 2019,
//         hasGone: true,
//     }
// ]

// universities.forEach(function (university) {
//     if (university.hasGone === true) {
//         console.log(university.name + university.year);
//     } else {
//         console.log(university.name);
//     }
// });


// var colors = {};

// colors.orange = { code: 123 };

// console.log(colors.orange.code);

// colors.black = { code: [4, 5, 6] };
// console.log(colors.black.code[1]);

// let Sheldon = {
//     say: function () {
//         console.log("helooo!!");
//     }
// };

// Sheldon.say();