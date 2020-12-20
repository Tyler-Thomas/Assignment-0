function frequencyCounter(word) {
let l=word.length;
let letters={}
for(let i=0;i<l;i++){
if(!letters[word.charAt(i)])
letters[word.charAt(i)]=1;
else
letters[word.charAt(i)]=letters[word.charAt(i)]+1;
}  // Insert code here;
return letters;
}

// Do not edit this line;
module.exports = frequencyCounter;
