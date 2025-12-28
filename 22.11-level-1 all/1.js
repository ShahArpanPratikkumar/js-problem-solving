// var num = 21;
// if(num % 2 == 0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

// 2 que

// function maximum(n1,n2){
//     if(n1>n2){
//         console.log("n1 is greater");
//     }
//     else{
//         console.log("n2 is greater");
//     }
// }
// maximum(10,30);

// \\

// let a = 5;
// let b = 9;

// if (a > b) {
//     console.log(a);
// } else {
//     console.log(b);
// }


// 3que

// function maximum(n1,n2,n3){
//     if(n1>n2 && n1>n3){
//         console.log("n1 is greater");
//     }
//     else if(n2 > n1 && n2 > n3){
//         console.log("n2 is greater")
//     }
//     else{
//         console.log("n3 is greater");
//     }
// }
// maximum(10,30,33);

// \\

// let a = 3, b = 7, c = 5;

// if (a >= b && a >= c) {
//     console.log(a);
// } else if (b >= a && b >= c) {
//     console.log(b);
// } else {
//     console.log(c);
// }


// que4

// function number(n1){
//     if(n1>0){
//         console.log("n1 is positive");
//     }
//     else if(n1<0){
//         console.log("n1 is negative ");
//     }
//     else{
//         console.log("n1 is zero");
//     }
// }
// number(0);

// \\

// let num = -2;

// if (num > 0) {
//     console.log("positive");
// } else if (num < 0) {
//     console.log("negative");
// } else {
//     console.log("zero");
// }


// que 5

// function age(n){
//     if(n<10){
//         console.log("child");
//     }
//     else if(n<15){
//         console.log("teenager")
//     }
//     else{
//         console.log("adult");
//     }
// }
// age(20);

// \\

// let age = 15;

// if (age >= 0 && age <= 12) {
//     console.log("child");
// } else if (age >= 13 && age <= 19) {
//     console.log("teenager");
// } else {
//     console.log("adult");
// }


// que 6

// function mark(n){
//     if(n <= 100 && n >= 90){
//         console.log("A grade");
//     }
//     else if( n <= 89 && n  >= 80){
//         console.log("B grade");
//     }
//     else if( n <= 79 && n >= 70){
//         console.log("C grade");
//     }
//     else if( n <= 69 && n >= 60){
//         console.log("D grade");
//     }
//     else{
//         console.log("fail");
//     }
// }
// mark(90);

// \\

// function grade(marks) {
//     switch (true) {
//         case (marks >= 90 && marks <= 100):
//             console.log("A");
//             break;

//         case (marks >= 80 && marks <= 89):
//             console.log("B");
//             break;

//         case (marks >= 70 && marks <= 79):
//             console.log("C");
//             break;

//         case (marks >= 60 && marks <= 69):
//             console.log("D");
//             break;

//         case (marks >= 0 && marks <= 59):
//             console.log("F");
//             break;

//         default:
//             console.log("Invalid marks");
//     }
// }

// grade(92); 
// grade(75); 
// grade(40);

// \\

// function grade(mark){
//     switch(Math.floor(mark / 10)){
//         case 0:
//         case 10:
//              console.log("A");
//              case 9:
//              console.log("B");
//              case 8:
//              console.log("c");
//              case 7:
//              console.log("D");
//              case 6:
//              console.log("f");
//              default:
//             console.log("Invalid marks");

//     }
// }
// console.log(mark(70));

// \\

// let marks = 75;

// if (marks >= 90) {
//     console.log("A");
// } else if (marks >= 80) {
//     console.log("B");
// } else if (marks >= 70) {
//     console.log("C");
// } else if (marks >= 60) {
//     console.log("D");
// } else {
//     console.log("F");
// }



// que 7

// function num(n){
//     if(n % 5 == 0){
//         console.log("divisible by 5");
//     }
//     else if(n % 5 != 0){
//         console.log("not divisible by 5")
//     }
//     else{
//         console.log("divisible by 5");
//     }
// }
// num(0);

// \\

// let num = 11;

// if (num % 5 === 0) {
//     console.log("divisible by 5");
// } else {
//     console.log("not divisible by 5");
// }


// que 8

// function num(n){
//     if(n % 5 == 0 && n % 3 == 0){
//         console.log("divisible by 5 and 3");
//     }
 
//     else{
//         console.log("  not divisible by 5 and 3");
//     }
// }
// num(15);

// \\

// let num = 15;

// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("divisible by 3 and 5");
// } else {
//     console.log("not divisible by both");
// }


//que 9

// function leapYear(year){
//     if(year%4==0 && year%400==0){
//         console.log(year , "is a Leap Year");
//     } else{
//         console.log(year , "is not a Leap Year");
//     }
// }
//  leapYear(2020);

// function leapYear(year) {
//     if (year % 400 == 0) {
//         console.log(year, "is a Leap Year");
//     } else if (year % 100 == 0) {
//         console.log(year, "is not a Leap Year");
//     } else if (year % 4 == 0) {
//         console.log(year, "is a Leap Year");
//     } else {
//         console.log(year, "is not a Leap Year");
//     }
// }

// leapYear(2020); 

// \\

// let year = 2020;

// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log("leap year");
// } else {
//     console.log("not a leap year");
// }


// que 10

// function range(number){
//     if(number >= 10 && number <= 50){
//         console.log("in Range");
//     }
//     else{
//         console.log("not in Range");
//     }
// }
// range(50);

// \\

let num = 25;

if (num >= 10 && num <= 50) {
    console.log("in range");
} else {
    console.log("out of range");
}

