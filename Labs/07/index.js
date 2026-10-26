let display = document.getElementById("display");
let firstNumber = "";
let operator = "";
let secondNumber = "";

function appendNumber(number) {
    if (display.value === "Error") {
        clearDisplay();
    }

    if (operator && firstNumber && display.value === "") {
        display.value = "";
    }

    display.value += number;
}

function setOperator(op) {
    if (display.value === "Error") {
        clearDisplay();
        return;
    }

    if (display.value === "" && firstNumber !== "") {
        operator = op;
        return;
    }

    if (firstNumber !== "" && operator !== "" && display.value !== "") {
        calculate(false);
    }

    firstNumber = display.value;
    operator = op;
    display.value = "";
}

function calculate(shouldReset = true) {
    if (!operator || firstNumber === "") {
        return;
    }

    secondNumber = display.value;
    let a = parseFloat(firstNumber);
    let b = parseFloat(secondNumber);
    let result;

    if (isNaN(a) || isNaN(b)) {
        display.value = "Error";
        return;
    }

    switch (operator) {
        case "+":
            result = a + b;
            break;

        case "-":
            result = a - b;
            break;

        case "*":
            result = a * b;
            break;

        case "/":
            if (b === 0) {
                display.value = "Error";
                firstNumber = "";
                secondNumber = "";
                operator = "";
                return;
            }
            result = a / b;
            break;

        default:
            return;
    }

    display.value = result;

    if (shouldReset) {
        firstNumber = "";
        secondNumber = "";
        operator = "";
    } else {
        firstNumber = String(result);
        secondNumber = "";
    }
}

function clearDisplay() {
    display.value = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
}

function deleteLast() {
    if (display.value === "Error") {
        clearDisplay();
        return;
    }

    display.value = display.value.slice(0, -1);
}