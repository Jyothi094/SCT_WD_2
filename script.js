const calculator = document.getElementById('calculator');
const displayCurrent = document.getElementById('current-operand');
const displayPrevious = document.getElementById('previous-operand');
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const dotButton = document.getElementById('dot');

let currentOperand = '';
let previousOperand = '';
let operation = null;

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    appendNumber(button.innerText);
    updateDisplay();
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    chooseOperation(button.innerText);
    updateDisplay();
  });
});

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteNumber);
equalsButton.addEventListener('click', compute);
dotButton.addEventListener('click', appendDot);

function clear() {
  currentOperand = '';
  previousOperand = '';
  operation = null;
  updateDisplay();
}

function deleteNumber() {
  currentOperand = currentOperand.toString().slice(0, -1);
  updateDisplay();
}

function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
    default:
      return;
  }

  currentOperand = computation;
  operation = undefined;
  previousOperand = '';
  updateDisplay();
}

function appendDot() {
  if (currentOperand.includes('.')) return;
  if (currentOperand === '') currentOperand = '0';
  currentOperand += '.';
  updateDisplay();
}

function appendNumber(number) {
  // If the current input is '0', replace it with the new number
  if (currentInput === '0') {
    currentInput = number;
  } else {
    // Otherwise, append the new number to the current input
    currentInput += number;
  }
  updateDisplay();
}
