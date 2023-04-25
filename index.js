let display = document.querySelector('.display');
let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = 0;

function addToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
  firstOperand = '';
  secondOperand = '';
  operator = '';
  result = 0;
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate(op) {
    if (op === '+' || op === '-' || op === '*' || op === '/') {
      operator = op;
      firstOperand = display.value;
      display.value = '';
    } else if (op === '=') {
      secondOperand = display.value;
      switch (operator) {
        case '+':
          result = parseFloat(firstOperand) + parseFloat(secondOperand);
          break;
        case '-':
          result = parseFloat(firstOperand) - parseFloat(secondOperand);
          break;
        case '*':
          result = parseFloat(firstOperand) * parseFloat(secondOperand);
          break;
        case '/':
          result = parseFloat(firstOperand) / parseFloat(secondOperand);
          break;
      }
      display.value = result.toString();
      firstOperand = '';
      secondOperand = '';
      operator = '';
      result = 0;
    }
  }