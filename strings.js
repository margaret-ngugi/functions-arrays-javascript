
//Write a function that takes an array of strings and returns a new array that contains
// only the strings that have a length of three characters.
function stringsLength(arr){
    return arr.filter(function(arr){
        return arr.length ===3;
    })
}
arr=["mary","marion","faith","sheira","magdaline"]
console.log(stringsLength(arr));



//Write a function that takes an array of numbers and returns a new array that contains 
//only the numbers that are divisible by 3.
function divisibleBy3(nums){
    let result = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i]%3===0){
            result.push(nums[i])
        }
    }
    // console.log(nums);
}
// console.log(divisibleBy3(nums))
let nums = [2,5,7,8,9,6,4,12]
 console.log(divisibleBy3(nums))



//Write a function that takes an array of strings and returns a new array that contains 
//only the strings that start with the letter "a".
function stringsByLetter(arr){
     str.filter(str=>str.startWith("a"))
    console.log(stringsByLetter(arr));
}
const str=["cow","goat","hen"]
stringsByLetter()
