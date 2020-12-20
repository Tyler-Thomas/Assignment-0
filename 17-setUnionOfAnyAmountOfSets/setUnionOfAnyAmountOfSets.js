function setUnionOfAnyAmountOfSets(...args) {
var s= new Set();
for(let i of args){
for(let j of i){
  s.add(j)
}
}
return s;  // Insert code here;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
