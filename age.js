var age = 4;
var result;
result = (age < 5) ? "The Admission fee is Free" : (age >= 5 && age <= 12) ? "The admission fee is 10$" : 
(age >= 13 && age <= 60) ? "The admission fee is 20$":"not eligible";
console.log(result);