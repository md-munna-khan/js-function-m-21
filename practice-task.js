/**
 * 
 * Task-1
Take four parameters. Multiply the four numbers and then return the result} number 
 */

// function  mutiplyFourthNumber(a,b,c,d){
//     const result = a * b * c * d;
//     return result;
// }
// console.log(mutiplyFourthNumber(2,4,7,9));


/**
 * Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

 */
// function processNumber (number) {
//     if(number% 2 ===1){
//         return number * 2;
//     } else{
//         return number / 2;
//     }
// }
// console.log(processNumber(13));
// console.log(processNumber(14));

/**
 * Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

// function make_avg(array, size) {
//     if (size === 0) return 0; // Avoid division by zero

//     const sum = array.reduce((acc, num) => acc + num, 0);
//     const average = sum / size;
//     return average;
// }

// // Example usage:
// const numbers = [10, 20, 30, 40, 50];
// const size = numbers.length;
// console.log(make_avg(numbers, size)); // Outputs: 30



/**
 * Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */
function count_zero(binaryString){
    let count = 0;
    for(let binarys of binaryString){
        if( binarys ==="0"){
            count++;
        }
    }
    return count;
}
const binaryString= "101000910990";
console.log(count_zero(binaryString));