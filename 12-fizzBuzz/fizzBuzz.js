function fizzBuzz(start, end) {
let arr= new Array();
for(let i=start;i<=end;i++){
if(i%3===0&&i%5===0)
arr.push("FizzBuzz");
else if(i%3!==0&&i%5!==0)
arr.push(i);
else if(i%3===0)
arr.push("Fizz");
else
arr.push("Buzz");
}
return arr;  // Insert code here;
}

// Do not edit this line;
module.exports = fizzBuzz;
