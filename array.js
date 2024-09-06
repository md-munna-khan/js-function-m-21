/**
 * step-1 ;:declare a function
 * step-2 : call check whether the function is called properly
 * step-3 : set a perametars
 * step-5 :do the function task (step by step)
 */



function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
return sum;
}
const numbs =[45,67,89,2]
 const sum = sumOfNumbers(numbs);
 console.log("sum of numbers", sum);