class MySolution {
  constructor() {
   this.flag=false; // this is optional to use;
  }
binarySearch(nums, target) {
var self=this;
let start=0;
let end=nums.length-1;
let mid=end/2-(end%2)/2;
if((mid===start||mid===end||start>end)&&(nums[start]===target||nums[end]===target))
return true;
else if(mid!==start&&mid!==end&&start<end){
if(nums[mid]===target)
return true;
else if(nums[mid]>target){
let nums2=nums.slice(start, mid);
return self.binarySearch(nums2,target);}
else{
let nums3=nums.slice(mid+1);
return self.binarySearch(nums3,target);}
}    // Insert code here;
else
return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;