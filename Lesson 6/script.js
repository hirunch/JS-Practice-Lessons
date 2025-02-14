function myFunction(name){
  return name;
}

const call = myFunction("HiRu");
console.log(call);

function addTwoNumbers(firstNumber, secondNumber){
  return firstNumber + secondNumber;
}

let sum = addTwoNumbers(5, 10);
console.log(sum);

function padRow(name){
  const test = "Testing";
  return test + " " + name;
}
const nameVal = padRow("ABC");
console.log(nameVal);