// give me just even number

// function evenNumbers(numbers){
//     const evens = [];
// for( number of numbers ){
//     if(number % 2 === 0){
//     console.log(number)
// evens.push(number)
// }
// }
//     return evens;
// }

// const evens=[2,46,8,7]
// const even =evenNumbers( evens)
// console.log(even)

function sumOfNumbers( numbers){
    let sum = 0;
    for( const number of numbers){
        console.log(number)
        sum = sum + number
    }
    return sum;
}
const sums=[2,5,7,9,8,4,8]
const sum = sumOfNumbers (sums);
console.log( 'sum of even numbers', sum)