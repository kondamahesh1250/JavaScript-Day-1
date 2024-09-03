var time = 15;
var result;
result = (time>=5&&time<12)?"Good Morning":(time>=12&&time<18)?"Good Afternoon":
(time>=18&&time<22)?"Good Evening":(time>=22&&time<=24)?"Good Night":
(time>=1&&time<=4)?"Good Night":"Enter Valid";
console.log(result);