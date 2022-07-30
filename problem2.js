import { findSumOfArray } from "./problem1.js";
export function fibonacciSequence(num) { 
    const nums = [1, 2];
    while(findSumOfArray(nums.slice(-2)) < num){
        nums.push(findSumOfArray(nums.slice(-2)));
    }
    return nums;
}

export function findEvenNumbers(arr){
    return arr.filter(e=>e%2===0);
}