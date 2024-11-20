function add(a,b) {
  return a + b;
}
function subtract(a,b) {
  return a - b;
}
function multiply(a,b) {
  return a * b;
}
function divide(a,b) {
  if(a === 0 || b === 0) {
    return "NOPE";
  }
  else {
    return a / b;
  }
}

let num1 = "";
let num2 = "";
let operator = null;

function operate(operator, num1, num2) {
  switch (operator) {
      case "+":
          return add(num1, num2);
      case "-":
          return subtract(num1, num2);
      case "*":
          return multiply(num1, num2);
      case "/":
          return divide(num1, num2);
  }
};

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".number , .operator");


const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  operator = null;
  display.textContent = "";
}); 

let isResultDisplayed = false; // Flag to track result display

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    // If a result is displayed and a number is pressed, reset display
    if (isResultDisplayed && !isNaN(value)) {
      display.textContent = "";
      isResultDisplayed = false;
    }

    if (value === "=") {
      // Perform the operation
      if (num1 !== null && operator !== null) {
        num2 = parseFloat(display.textContent);
        const result = operate(operator, num1, num2);
        display.textContent = result;
        num1 = result; // Retain the result for potential continued operations
        operator = null;
        num2 = null;
        isResultDisplayed = true; // Set the flag to true
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      // Handle operators
      if (!isResultDisplayed) {
        num1 = parseFloat(display.textContent);
      }
      operator = value;
      display.textContent = ""; // Prepare for the next input
    } else {
      // Handle numbers
      display.textContent += value;
    } 
  });
});


