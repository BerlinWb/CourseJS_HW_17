"use strict";

const num = +prompt("Enter the number");
const degree = +prompt("Indicate the degree");
function pow(num, degree) {
if (Number.isNaN(num) || Number.isNaN(degree) || num <= 1 || degree <= 1)  {
    return 'Some Error';
  } else {
    return Math.pow(num, degree);
  }
}
const result = pow(num, degree);
alert(`Calculation results: ${result}`);