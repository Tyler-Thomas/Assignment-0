function countOfAllBooleans(arr) {
let a=0;
for(let i=0;i<arr.length;i++){
if(typeof arr[i]==="boolean")
a++;
}
return a;  // Insert code here;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
