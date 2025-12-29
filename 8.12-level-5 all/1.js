// 41 que

// function countWords(sentence) {
//   return sentence
//     .trim()               
//     .split(" ")           
//     .filter(word => word !== "")  
//     .length;
// }
// console.log(countWords("Hello world"));            
// console.log(countWords("JavaScript is fun"));     
// console.log(countWords("  this   is   spaced  ")); 

//

// let str ="     hello    qwertytygbv   ";
// let count= 0;
// for(let i = 0;i<str.length;i++){
//     if(i==0 && str[i]!=" "){
//         count++;
//     }
//     else if(str[i]!=" " && str[i-1]==" "){
//         count++;
//     }
// }
// console.log(count)


// 42 que 

// function replaceAwithE(str){
//   return str.replaceAll('a', 'e');
// }
// console.log(replaceAwithE("banana")); 
// console.log(replaceAwithE("apple")); 
// console.log(replaceAwithE("cat"));   

//

// let res ="Anana";
// let res ="";
// for(let i=0;i<str.length; i++){
// if(str[i] == "a" || str[i] == "A"){
// res=res+"e"
// }
// else{
// res=res+str[i];

// }
// }
// console.log(res)


// 43 que
// function containsChar(str, ch) {
//   return str.includes(ch);
// }

// console.log(containsChar("hello", "e")); 
// console.log(containsChar("hello", "a"));
// console.log(containsChar("JavaScript", "S")); 

//

// let str="banana";
// let ch="a";

// console.log(str.includes(ch));

// 

// let str="banana";
// let ch="a";

// console.log(str.includes(ch));

// for(let i=0;i<str.length; i++){
// if(str[i] == ch){
// console.log(true);
// return;
// }
// console.log(false)
// }


// 44 que

// function areEqual(str1, str2) {
//   return str1 === str2;
// }
 
// console.log(areEqual("hello", "hello")); 
// console.log(areEqual("Hello", "hello")); 
// console.log(areEqual("js", "js "));      


// 45 que

// function countDigits(str) {
//   let count = 0;
//   for (let char of str) {
//     if (char >= '0' && char <= '9') {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countDigits("abc123"));     
// console.log(countDigits("2025 year"));  
// console.log(countDigits("no digits"));  

//

// let str="Hello  56789";
// let count=0;
// for(let i=0;i<str.length;i++){
// if(str[i]>="0" && str[i] <= "9"){
// count++
// }
// }
// console.log(count);


// 46 que

// function countUppercase(str) {
//   const matches = str.match(/[A-Z]/g);
//   return matches ? matches.length : 0;
// }

// console.log(countUppercase("HeLLo"));     // 3
// console.log(countUppercase("javascript")); // 0
// console.log(countUppercase("JS 101"));     // 2


//
// let str="Hello  56789";
// let count2=0;
// for(let i=0;i<str.length;i++){

// let ascii=str.charCodeAt(i);
// if(ascii>=65 && ascii <= 90){
// count2++
// }
// }

// console.log(count2)


// 47 que 


// let str="Hello  56789";
// let count2=0;
// for(let i=0;i<str.length;i++){

// let ascii=str.charCodeAt(i);
// if(ascii>=97 && ascii <= 122){
// count2++
// }
// }

// console.log(count2)

// 48 que


// function removeVowels(str) {
//   return str.replace(/[aeiou]/gi, "");
// }

// console.log(removeVowels("hello"));      
// console.log(removeVowels("JavaScript"));  
// console.log(removeVowels("AEIOU"));       

//

// 49 que

// function removeDigits(str) {
//   return str.replace(/[0-9]/g, "");
// }

// console.log(removeDigits("abc123"));        
// console.log(removeDigits("Js 101 course"));
// console.log(removeDigits("2025"));         

//

// let str="Hello 23456";

// //output: Hello

// let res=""
// for(let i=0;i<str.length;i++){
// if(!(str[i]>="0" &&str[i] <= "9")){
// res=res+str[i]
// }
// }
// console.log(res)


// 50 que


// function toggleCase(str) {
//   return str.replace(/./g, char =>
//     char === char.toUpperCase()
//       ? char.toLowerCase()
//       : char.toUpperCase()
//   );
// }

// console.log(toggleCase("HeLLo"));   
// console.log(toggleCase("abcDEF"));  
// console.log(toggleCase("Js 101"));  

//


// function toggleCase(str) {
//   let result = "";

//   for (let char of str) {
//     if (char >= 'a' && char <= 'z') {
//       result += char.toUpperCase();
//     } else if (char >= 'A' && char <= 'Z') {
//       result += char.toLowerCase();
//     } else {
//       result += char; 
//     }
//   }

//   return result;
// }

// console.log(toggleCase("HeLLo")); 
// console.log(toggleCase("abcDEF")); 
// console.log(toggleCase("Js 101")); 


//

let res="";
let res2="";
let res3="";

for(let i=0;i<str.length;i++){
if(str[i]>="A" && str[i] <= "Z"){
res=res+str[i].toLowerCase();
}
else{
res=res+str[i].toUpperCase();
}
}
console.log(res)

