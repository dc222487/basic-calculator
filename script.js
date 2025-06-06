function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) { 
    return x * y; 
}

function divide(x, y) { 
    return x / y;
}


let currentNumber = '';  // Store current number input by user
let previousNumber = ''; // Store the previous number for operations
let currentOperator = ''; // Store the current operator


const numButtons = document.querySelectorAll(".numbers")
const operatorButtons = document.querySelectorAll(".operator");
const result = document.querySelectorAll(".result")

// Handle number button clicks
numButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentNumber += button.textContent; // Add number to current number
        result.textContent = currentNumber; // Update the display
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", ()=> {
        const operator = button.textContent;
        if (operator === "clear") {
            currentNumber = '';
            previousNumber = '';
            currentOperator = '';
            result.textContent = '';
        } else if (operator === "=") {
            if (previousNumber && currentOperator) {
                let num1 = parseFloat(previousNumber);
                let num2 = parseFloat(currentNumber);
                let calculatedResult;

                switch (currentOperator) {
                    case '+':
                        calculatedResult = add(num1, num2);
                        break;
                    case '-':
                        calculatedResult = subtract(num1, num2);
                        break;
                    case 'x':
                        calculatedResult = multiply(num1, num2);
                        break;
                    case '/':
                        calculatedResult = divivde(num1, num2);
                        break;
                }

                result.textContent = calculatedResult;
                currentNumber = String(calculatedResult);
                previousNumber = '';
                currentOperator ='';
            }
        } else {
            if (currentNumber) {
                previousNumber = currentNumber;
                currentNumber = '';
                currentOperator = operator;
                result.textContent = operator;

            }
        }
    })
})