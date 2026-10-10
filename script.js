let screen = document.getElementById("screen");
let firstNumber = "";
let operator = "";
let secondNumber = "";
function inputNumber(number) {
    if (operator === "") {
        firstNumber += number;
        screen.innerHTML = firstNumber;
    } else {
        secondNumber += number;
        screen.innerHTML = secondNumber;
    }
}
function chooseOperator(selectedOperator) {
    operator = selectedOperator;
}
function calculate() {
    let result;
    if (operator === "+") {
        result = Number(firstNumber) + Number(secondNumber);
    } else if (operator === "-") {
        result = Number(firstNumber) - Number(secondNumber);
    } else if (operator === "*") {
        result = Number(firstNumber) * Number(secondNumber);
    } else if (operator === "/") {
        result = Number(firstNumber) / Number(secondNumber);
    } else if (operator === "%") {
        result = Number(firstNumber) % Number(secondNumber);
    }
    screen.innerHTML = result;
    firstNumber = result;
    secondNumber = "";
    operator = "";
}
function clearScreen() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    screen.innerHTML = "";
}
function deleteNumber() {
    if (operator === "") {
        firstNumber = firstNumber.slice(0, -1);
        screen.innerHTML = firstNumber;
    } else {
        secondNumber = secondNumber.slice(0, -1);
        screen.innerHTML = secondNumber;
    }
}