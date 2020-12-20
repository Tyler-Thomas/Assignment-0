function isPalindrome(word) {
let l=word.length-1;
let i=0;
while(i<l){
if(word.charAt(i)!==word.charAt(l))
return false;
i++;
l--;
}
return true;  // Insert code here;
}

// Do not edit this line;
module.exports = isPalindrome;
