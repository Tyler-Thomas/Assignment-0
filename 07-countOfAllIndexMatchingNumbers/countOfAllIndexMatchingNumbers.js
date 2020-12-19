function countOfAllIndexMatchingNumbers(nums) {
let a=0;
for(let i=0; i<nums.length; i++){
if(nums[i]===i)
a++;
}
return a;  // Insert code here;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
