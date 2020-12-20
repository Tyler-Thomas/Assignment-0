function pairSum(nums, target) {
if(nums.length<2)
throw "Error";
var s=new Set();
for(let i of nums){
if(s.has(target-i))
return true;
else
s.add(i);
}
return false;  // Insert code here;
}

// Do not edit this line;
module.exports = pairSum;
