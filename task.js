
use strict

function solveEquation(a, b, c) {
  let arr;
  let D=(b**2)-4*a*c;

  if(D=0) {
    let x = -b/(2*a);
    arr.push(x);
    } else if(D>0) {
      let x1 = (-b + Math.sqrt(d))/(2*a);
      let x2 = (-b - Math.sqrt(d))/(2*a);
      arr.push(x1, x2);
      } else {
        arr=[];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}