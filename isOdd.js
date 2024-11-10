"use strict";

function adding(a, b) {
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

alert(
  "Please give me three numbers, after each number specify what do you want to do with them!"
);
alert("The commands are: ADD, SUBSTRACT, DIVIDE, MULTIPLY!");
const first = Number(prompt("First number is?"));
const command1 = String(
  prompt("First operation is? (ADD, SUBSTRACT, DIVIDE, MULTIPLY)")
);
const second = Number(prompt("Second number is?"));

let firstValue = "";

if (command1 == "ADD") {
  alert(`${first} + ${second} = ${adding(first, second)}`);
  firstValue = adding(first, second);
} else if (command1 == "SUBSTRACT") {
  alert(`${first} - ${second} = ${substract(first, second)}`);
  firstValue = substract(first, second);
} else if (command1 == "DIVIDE") {
  alert(`${first} / ${second} = ${divide(first, second)}`);
  firstValue = divide(first, second);
} else if (command1 == "MULTIPLY") {
  alert(`${first} * ${second} = ${multiply(first, second)}`);
  firstValue = multiply(first, second);
} else alert("Invalid command! Try ADD, SUBSTRACT, DIVIDE, MULTIPLY!");

const command2 = String(
  prompt("Second operation is? (ADD, SUBSTRACT, DIVIDE, MULTIPLY)")
);
const third = Number(prompt("Third number is?"));

let result = "";

if (command2 == "ADD") {
  alert(`${firstValue} + ${third}= ${firstValue + third}`);
  result = firstValue + third;
} else if (command2 == "SUBSTRACT") {
  alert(`${firstValue} - ${third}= ${firstValue - third}`);
  result = firstValue - third;
} else if (command2 == "DIVIDE") {
  alert(`${firstValue} / ${third}= ${firstValue / third}`);
  result = firstValue / third;
} else if (command2 == "MULTIPLY") {
  alert(`${firstValue} * ${third}= ${firstValue * third}`);
  result = firstValue * third;
} else alert("Invalid command! Try ADD, SUBSTRACT, DIVIDE, MULTIPLY!");

alert(`Number ${result} is ${result % 2 != 0 ? "odd" : "even"}`);

console.log("hehe");
