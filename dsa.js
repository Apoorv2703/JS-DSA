// 1. . Write a function called countOccurrences()
// that takes in a string and a character and returns
// the number of occurrences of that character in the string.

// const countOccurrences = (str, char) => {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }

//   return count;
// };

// const result = countOccurrences("bananA", "a");
// console.log(result);

// 2. Write a function called findMaxNumber that takes
// in an array of numbers and returns the largest number
// in the array.

// let findMaxNumber = (arr)=>{

//     let max = arr[0]

//     for(let i = 0 ; i<arr.length ; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }

//     return max

// }

// let result = findMaxNumber([1,2,3,4,5,22,6,7,8])
// console.log(result);

// 3. Write a function called titleCase that takes in a string
//  and returns the string with the first letter of each word
//  capitalized.

// let titleCase = (str)=>{
//     let words = str.toLowerCase().split(" ")
    
    

//     for(let i = 0 ; i < words.length ; i++){
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1)
//     }
//     return words.join(" ")
// }

// let result = titleCase("i am cat")
// console.log(result);

// 4. Write a function called reverseString that takes in a
// string and returns the reverse of that string.

// let reverseString = (str)=>{

//     let reversed = ""

//     for(let i = str.length - 1 ; i>=0 ; i--){
//         reversed += str[i]
//     }
//     return reversed
// }

// let result = reverseString("apoorv")
// console.log(result);

// 5. Write a function called countVowels that takes in a
//  string and returns the number of vowels in the string.

// let countVowels = (str)=>{
//     let formattedStr = str.toLowerCase()

//     let count = 0

//     for(let i = 0 ; i < formattedStr.length ; i++){
//         let char = formattedStr[i]

//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++
//         }
//     }

//     return count
// }

// let result = countVowels("apoorv")
// console.log(result);

// 6. Write a function called removeDuplicates that takes in
// an array and returns a new array with duplicates
// removed.

// let removeDuplicates = (arr)=>{

//     let result = []

//     for(let i = 0 ; i < arr.length ; i++){
//         let isDuplicate = false 
//         for(let j = 0 ; j < result.length ; j++){
//             if(arr[i]===result[j]){
//                 isDuplicate = true 
//                 break ;
//             }
//         }

//         if(!isDuplicate){
//             result.push(arr[i])
//         }

//     }

//     return result
// }

// let output = removeDuplicates([1,2,2,3,3,4,5,4,6])
// console.log(output); 

// 7. A palindrome is a word, phrase, number, or other
// sequence of characters which reads the same backward or
// forward. An example of a palindrome is "madam".

// let isPalindrome = (str)=>{
//     let reversed = ""
//     for(let i = str.length - 1 ; i >= 0 ; i--){
//         reversed += str[i]
//     }

//     if(str === reversed){
//         return true
//     }else{
//         return false
//     }
// }

// let result = isPalindrome("hello")
// console.log(result);




