class MySolution {
  countDownSum(num) {
var self=this;
if(num===1)
return 1;
else return num+self.countDownSum(num-1);    // Insert code here;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
