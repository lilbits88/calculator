const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;
    
    if (value === '=') {
      if (operator && previousInput !== '') {
        currentInput = eval(previousInput + operator + currentInput);
        display.value = currentInput;
        previousInput = '';
        operator = '';
      }
    } else if (value === 'C') {
      currentInput = '';
      previousInput = '';
      operator = '';
      display.value = '';
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (previousInput !== '') {
        currentInput = '';
      }
      operator = value;
      previousInput = display.value;
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
