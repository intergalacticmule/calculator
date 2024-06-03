const screenContent = document.querySelector("#screen-container");

const clearButton = document.querySelector("#clear-all");
const deleteButton = document.querySelector("#delete");

const decimalButton = document.querySelector("#decimal");
const equalsButton = document.querySelector("#equals");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

var currentOperation = "";
var leftOperand = "";
var rightOperand = "";

function type(e) {
	if (
		screenContent.lastElementChild.textContent.length >= 14 &&
		(e.target.classList.contains("number") || e.target.id == "decimal")
	) {
		return;
	} else {
		rightOperand += e.target.textContent;
		screenContent.lastElementChild.textContent = rightOperand;
	}
}

function clearAll() {
	screenContent.lastElementChild.textContent = "0";
	screenContent.firstElementChild.textContent = "";
	rightOperand = "";
	leftOperand = "";
	currentOperation = "";
}

function deleteLast() {
	rightOperand = screenContent.lastElementChild.textContent.slice(0, -1);
	screenContent.lastElementChild.textContent = rightOperand;
	if (rightOperand === "") {
		screenContent.lastElementChild.textContent = "0";
	}
}

function addNumbersEventListeners(buttons) {
	buttons.forEach((button) => {
		button.addEventListener("click", (e) => {
			type(e);
		});
	});
}

function swapFields(e) {
	currentOperation = e.target.textContent;
	leftOperand = rightOperand;
	rightOperand = "";
	screenContent.lastElementChild.textContent = "0";
	screenContent.firstElementChild.textContent = leftOperand + currentOperation;
}

function switchOperator(e) {
	currentOperation = e.target.textContent;
	screenContent.firstElementChild.textContent = leftOperand + currentOperation;
}

function addOperatorsEventListeners(buttons) {
	buttons.forEach((button) => {
		button.addEventListener("click", (e) => {
			if (currentOperation === "") {
				swapFields(e);
			} else {
				switchOperator(e);
			}
		});
	});
}

function addDecimalSeparator() {
	if (rightOperand.includes(decimalButton.textContent)) {
		return;
	} else {
		rightOperand += decimalButton.textContent;
		screenContent.lastElementChild.textContent = rightOperand;
	}
}

function roundResult(number) {
	return Math.round(number * 1000) / 1000;
}

function add(a, b) {
	return roundResult(a + b);
}

function subtract(a, b) {
	return roundResult(a - b);
}

function multiply(a, b) {
	return roundResult(a * b);
}

function divide(a, b) {
	return roundResult(a / b);
}

function calculate() {
	a = Number(leftOperand);
	b = Number(rightOperand);
	screenContent.firstElementChild.textContent =
		leftOperand + currentOperation + rightOperand + "=";
	switch (currentOperation) {
		case "+":
			screenContent.lastElementChild.textContent = rightOperand = add(a, b);
			break;
		case "-":
			screenContent.lastElementChild.textContent = rightOperand = subtract(
				a,
				b
			);
			break;
		case "×":
			screenContent.lastElementChild.textContent = rightOperand = multiply(
				a,
				b
			);
			break;
		case "÷":
			screenContent.lastElementChild.textContent = rightOperand = divide(a, b);
			break;
	}
	currentOperation = "";
}

addNumbersEventListeners(numberButtons);
addOperatorsEventListeners(operatorButtons);

clearButton.addEventListener("click", clearAll);
deleteButton.addEventListener("click", deleteLast);
decimalButton.addEventListener("click", addDecimalSeparator);
equalsButton.addEventListener("click", calculate);
