// 21 que

// function digits(n) {
//     n = Math.abs(n);
//     let count = n.toString().length;
//     console.log(count);
// }

// digits(0);     
// digits(1234);  
// digits(-98); 

// 22 que

// function sumdigits(n) {
//   n = Math.abs(n);

//   let sum = 0;
//   while (n > 0) {
//     sum = sum + n % 10;  
//     n = Math.floor(n / 10); 
//   }

//   console.log(sum);
// }

// sumdigits(123); 
// sumdigits(505); 
// sumdigits(9);


// 23 que

// function productDigits(n) {
//   n = Math.abs(n);

//   let product = 1;
//   while (n > 0) {
//     product = product * (n % 10);
//     n = Math.floor(n / 10);
//   }

//   console.log(product);
// }

// productDigits(123); 
// productDigits(505); 
// productDigits(9);   

// 24 que

// function reverseNumber(n) {
//   return parseInt(String(n).split('').reverse().join('')) * Math.sign(n);
// }
// console.log(reverseNumber(1234)); 
// console.log(reverseNumber(100)); 
// console.log(reverseNumber(-321));


// 25 que

// function isPalindrome(n) {
//     const str = n.toString();
//     return str === str.split('').reverse().join('');
// }


// console.log(isPalindrome(121)); 
// console.log(isPalindrome(123)); 
// console.log(isPalindrome(123443));   


// 26 que

// function isPrime(n) {
//   if (n < 2) return false;

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }

//   return true;
// }


// console.log(isPrime(2));  
// console.log(isPrime(17)); 
// console.log(isPrime(15)); 


// 27 que


// function printPrimes(N) {
//     let result = '';
//     for (let num = 2; num <= N; num++) {
//         let isPrime = true;
//         for (let i = 2; i < num; i++) {
//             if (num % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             result += num + ' ';
//         }
//     }
//     console.log(result.trim());
// }

// printPrimes(10);
// printPrimes(5);  
// printPrimes(2);  


// function checkPrime(X){
// for(let i=2;i <= Math.floor(X/2);i++){
// if(X%i == 0){
// return false;
// }
// }
// return true;
// }
// function main(n){
// let res=[];
// for(let i=2;i <= n; i++){
// if(checkPrime(i)){
// res.push(i);
// }
// }
// console.log(res.join(" "));
// }
// main(20)

// 28 que

// function fibonacci(N) {
//     if (N <= 0) return;

//     let a = 0, b = 1;

//     if (N == 1) {
//         console.log(a);
//         return;
//     }

//     let output = a + " " + b;

//     for (let i = 2; i < N; i++) {
//         let next = a + b;
//         output += " " + next;
//         a = b;
//         b = next;
//     }

//     console.log(output);
// }

// fibonacci(5); 
// fibonacci(1); 
// fibonacci(7); 

// 29 que

function gcd(a, b) {
    let gcd = 1;
    for (let i = 1; i <= a && i <= b; i++) {
        if (a % i == 0 && b % i == 0) {
            gcd = i;
        }
    }
    return gcd;
}

console.log(gcd(12, 18)); 
console.log(gcd(5, 9));   
console.log(gcd(20, 100)); 



// 30 que

function lcm(a, b) {
    let i = a > b ? a : b;

    while (true) {
        if (i % a === 0 && i % b === 0) {
            return i;
        }
        i++;
    }
}

console.log(lcm(4, 6)); 
console.log(lcm(5, 7));  
console.log(lcm(3, 9));  
