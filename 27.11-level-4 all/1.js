// 31 que
// 1 rit
// function stringLength(str) {
//     console.log(str.length);
// }

// stringLength("hello");    
// stringLength("");            
// stringLength("JavaScript"); 

//2 rit
// var str = "arpan";
// console.log(str.length);

// 3 rit
// let str = "javascript";
// let count = 0;

// while(str[count]){
//     count++
// }
// console.log(count);

// 32 que


// function printChars(str) {
//     for (let i = 0; i < str.length; i++) {
//         console.log(str[i]);
//     }
// }
// printChars("cat");  
// printChars("hi");   


// function printCharsInRow(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         result += str[i] + " ";
//     }
//     console.log(result.trim());
// }

// printCharsInRow("cat");  
// printCharsInRow("hi");   


// 33 que

// let str="JAVASCRIPT";
// let str2=str.toLowerCase();

// let obj={
// a:1,
// e:1,
// o:1,
// i:1,
// u:1

// }
// let count=0
// for(let char of str2){
// if(obj[char] == 1){
// count++
// }
// }

// console. log(count)

// biji rite

// let input="Hello World";

// let count=0;

// let str=input.toLowerCase();
// for(let i=0;i<str.length; i++){
// if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o"||
// str[i] == "u"){
// count++;
// }
// }

// console.log(count)


// 34

// let str="JAVASCRIPT";
// let str2=str.toLowerCase();

// let obj={
// a:1,
// e:1,
// o:1,
// i:1,
// u:1

// }
// let count=0
// for(let char of str2){
// if(obj[char] != 1){
// count++
// }
// }

// console. log(count)


// 35 que

// function toUpper(str) {
//   return str.toUpperCase();
// }


// console.log(toUpper("hello"));   
// console.log(toUpper("Js"));      
// console.log(toUpper("123abc"));  


// 36 que 

// function toLower(str) {
//   return str.toLowerCase();
// }

// console.log(toLower("HELLO"));  
// console.log(toLower("Js"));     
// console.log(toLower("123ABC"));  


// 37 que

// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// console.log(reverseString("hello")); 
// console.log(reverseString("abc"));   
// console.log(reverseString("a"));     


// 38 que

// function isPalindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

// console.log(isPalindrome("madam"));   
// console.log(isPalindrome("racecar")); 
// console.log(isPalindrome("hello"));   

//

// function isPalindrome(str) {
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }

//   return true;
// }

// console.log(isPalindrome("madam"));    
// console.log(isPalindrome("racecar")); 
// console.log(isPalindrome("hello"));   


// 39 que

// function countA(str) {
//   let count = 0;
//   for (let char of str.toLowerCase()) {
//     if (char === 'a') count++;
//   }
//   return count;
// }

// console.log(countA("banana")); 
// console.log(countA("Apple"));  
// console.log(countA("xyz"));    

//

// function countA(str) {
//   const matches = str.match(/a/gi);
//   return matches ? matches.length : 0;
// }

// console.log(countA("banana")); 
// console.log(countA("Apple"));  
// console.log(countA("xyz"));


// 40 que 

// function removeSpaces(str) {
//     return str.split(" ").join("");
// }
// console.log(removeSpaces("hello world"))
// console.log(removeSpaces("a b c"));

//

// let str = "hello rxctgvy rtcygvbh dcfvgbhjn";
// let res="";

// for(let i = 0;i<str.length;i++){
//   if(str[i]==" "){
//     continue;
//   }
//   else{
//     res=res+str[i];
//   }
// }
// console.log(res);

// 

let str = "hello rxctgvy rtcygvbh dcfvgbhjn";
let arr = str.split(" ");
let res = arr.join("");
console.log(res);