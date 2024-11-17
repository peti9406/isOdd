"use strict";

let result = "";

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function operate(command, a, b) {
  if (command == "ADD") {
    alert(`${a} + ${b} = ${add(a, b)}`);
    result = add(a, b);
  } else if (command == "SUBSTRACT") {
    alert(`${a} - ${b} = ${substract(a, b)}`);
    result = substract(a, b);
  } else if (command == "DIVIDE") {
    alert(`${a} / ${b} = ${divide(a, b)}`);
    result = divide(a, b);
  } else if (command == "MULTIPLY") {
    alert(`${a} * ${b} = ${multiply(a, b)}`);
    result = multiply(a, b);
  } else alert("Invalid command! Try ADD, SUBSTRACT, DIVIDE, MULTIPLY!");
}

alert(
  "Please give me three numbers, after each number specify what do you want to do with them!"
);
alert("The commands are: ADD, SUBSTRACT, DIVIDE, MULTIPLY!");
const first = Number(prompt("First number is?"));
const command1 = String(
  prompt("First operation is? (ADD, SUBSTRACT, DIVIDE, MULTIPLY)")
);
const second = Number(prompt("Second number is?"));

operate(command1, first, second);

const command2 = String(
  prompt("Second operation is? (ADD, SUBSTRACT, DIVIDE, MULTIPLY)")
);
const third = Number(prompt("Third number is?"));

operate(command2, result, third);

alert(`Number ${result} is ${result % 2 != 0 ? "odd" : "even"}`);
