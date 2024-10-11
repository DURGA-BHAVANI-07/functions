function add(a, b) {    //add
  return a + b;
}
console.log(add(3, 5)); 
console.log(add(10, 20));


function subtract(a,b){    //subtract
  return a - b;
}
console.log(subtract(100,50));
console.log(subtract(10000,1000));


function multiply(a, b){        //multiply
  return a*b;
}
console.log(multiply(8,9));
console.log(multiply(10,20));


function divide(a, b) {        //divide
  if (b === 0) {
    return "Cannot divide by zero.";
  } else {
    return a / b;
  }
}
console.log(divide(15,3));
console.log(divide(7,0));



