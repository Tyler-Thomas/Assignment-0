function titleCaseEdit(title) {
let arr=new Array();
for(let i=0;i<title.length;i++){
if(arr.length===0||arr[i-1]===" ")
arr.push(title.charAt(i).toUpperCase());
else
arr.push(title.charAt(i));
}
return arr.join("");
}

// Do not edit this line;
module.exports = titleCaseEdit;
