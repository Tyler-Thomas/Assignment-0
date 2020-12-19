function countOfAllNumbersSmallerThanTarget(nums, target) {
let a=0;
for(let i=0;i<nums.length;i++){
if(nums[i]<target)
a++;
}
return a;  // Insert code here;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
