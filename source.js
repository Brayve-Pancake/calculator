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

const temp = [];
const toOperateON = [];
function digitSelected(e) {
  let currentDigitSelected = this.getAttribute("class");
  display.textContent += currentDigitSelected;
  temp.push(currentDigitSelected);
};

// upon operator selection, store the numbers entered as the first string
// concat the elements of the temp array together
// clear the temp array ready to be filled by digit selection function

// This function concats the previous digits from the temp array
function operatorSelected(e) {
  let currentOperatorSelected = this.getAttribute("class");
  let number = Number(temp.join(""));
  temp.length = 0;
  console.log("number: " + number);
  toOperateON.push(number);
  toOperateON.push(currentOperatorSelected);
  console.log("toOperateOn: " + toOperateON);
  // Add operator to display window
  display.textContent += currentOperatorSelected;
 };


const operatorBtns = document.querySelectorAll(".operators > button");
operatorBtns.forEach((btn) => btn.addEventListener("click", operatorSelected));

const equalityBtn = document.querySelectorAll(".operators .equals");
equalityBtn.forEach((btn) => btn.addEventListener("click", equalitySelected));

function equalitySelected() {
 display.textContent = operate(toOperateON[1], toOperateON[0], toOperateON[2]);
 console.log(operate(toOperateON[1], toOperateON[0], toOperateON[2]));
};


// Add event listenre to operation
// push the operator

// on event listenr run operate
// use the array[1] in operate(array[1], array[0], array[2])
// update display
