function sumOfNumsWithinARange(nums, start, end) {
let a=0;
for(let i=0;i<nums.length;i++){
if(nums[i]<=end&&nums[i]>=start)
a++;
}
return a;  // Insert code here;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
