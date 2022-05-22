function add(a, b) { return a + b; }

function subtract(a, b) { return a - b; }

function multiply(a, b) { return a * b; };

function divide(a, b) { return a / b; };

function operate(operator, a, b) {
  if (operator == "+") return add(+a, +b);
  if (operator == "-") return subtract(+a, +b);
  if (operator == "*") return multiply(+a, +b);
  if (operator == "/") return divide(+a, +b);
}

const digitBtns = document.querySelectorAll(".digits > button");
digitBtns.forEach((btn) => btn.addEventListener("click", digitSelected));

const display = document.querySelector("div.display");

const displayDefault = "What you wanna know?"
display.textContent = displayDefault;

const temp = [];
const toOperateON = [];

function digitSelected(e) {

  if(display.textContent == displayDefault) display.textContent = "";

  let currentDigitSelected = this.getAttribute("class");
  display.textContent += currentDigitSelected;
  // Store digits in temp
  temp.push(currentDigitSelected);
};

function operatorSelected(e) {
  let currentOperatorSelected = this.getAttribute("class");

  // Concat displayed numbers + clear temp array (this f() is async - EventListener)
  let number = Number(temp.join(""));
  temp.length = 0;

  toOperateON.push(number);
  toOperateON.push(currentOperatorSelected);

  // // Checking functions
  // console.log("number: " + number);
  // console.log("toOperateOn: " + toOperateON);

  // Add operator to display window
  display.textContent += currentOperatorSelected;
 };


const operatorBtns = document.querySelectorAll(".operators > button");
operatorBtns.forEach((btn) => btn.addEventListener("click", operatorSelected));

const equalityBtn = document.querySelectorAll(".operators .equals");
equalityBtn.forEach((btn) => btn.addEventListener("click", equalitySelected));

function equalitySelected() {
  display.textContent = runOperations();
};

function runOperations() {
let bidmasOps = ["*", "/", "+", "-"];

let divideZero;
let errorMsg = "No silly!";

// find ops, compute, then decrease the array size. Iterate
bidmasOps.forEach((op) => {
  while(toOperateON.includes(op)) {
    let x = toOperateON.indexOf(op);
    
    // Check for divide by zero
    if (op == "/" && toOperateON[x+1] == 0) divideZero = true;
    let newValue = operate(toOperateON[x], toOperateON[x-1], toOperateON[x+1]);
    
    // remove three elements from the toOperateON array
    toOperateON.splice(x-1, 3, newValue);
  }
});
// Invalid if /0
return divideZero? errorMsg: parseFloat(toOperateON[0]).toFixed(4);
}


const clearBtn = document.querySelector("div .clear");
clearBtn.addEventListener("click", clearSelected);

function clearSelected() {
  display.textContent = displayDefault;
  temp.length = 0;
  toOperateON.length = 0;
}

// function checkForDivideZero(op, b) {
//   if (op == "/" && b == 0) return true;
// }