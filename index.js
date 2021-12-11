let number = 5;

number++; 

number; 

number--; 
number;

 number = 5;
number += 3
number -= 2
number *= 10
number /= 5

number = 10

function add5() {
  return (number += 5)
}
function divideBy3() {
  return (number /=3)
}
divideBy3()
add5()

number = 10
add5()
divideBy3()

parseInt("2", 10)
parseInt("2.2222", 10)
parseInt("nonsense!", 10)
parseFloat("80.123999")


function add(){}
function subtract(){}
function multiply(){}
function divide(){}

function add(a,b ) {
  return(a+b)
}
function subtract(b,a) {
  return(b-a)
}
function multiply(a,b) {
  return(a*=b)
}
function divide(a,b) {
  return(a/=b)
}
function increment(a) {
  return(a+1)
}
function decrement(a) {
  return(a-1)
}
function makeInt(n) {
    return(n)
  }
  function makeInt(n) {
    return parseInt(n, 10)
  }
  
  function preserveDecimal(n) {
    return parseFloat(n)
  }
