const screenContent = document.querySelector("#screen-container");
const screenChildren = document.querySelectorAll("p");

const clearButton = document.querySelector("#clear-all");
const deleteButton = document.querySelector("#delete");

const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");
const sixButton = document.querySelector("#six");
const sevenButton = document.querySelector("#seven");
const eightButton = document.querySelector("#eight");
const nineButton = document.querySelector("#nine");
const zeroButton = document.querySelector("#zero");

const decimalButton = document.querySelector("#decimal");
const equalsButton = document.querySelector("#equals");
const additionButton = document.querySelector("#addition");
const subtractionButton = document.querySelector("#subtraction");
const multiplicationButton = document.querySelector("#multiplication");
const divisionButton = document.querySelector("#division");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

var activeField;

var currentOperation;

function type(e) {
	activeField = document.querySelector(".active");
	if (activeField.textContent.length >= 14) {
		return;
	} else {
		activeField.textContent += e.target.textContent;
	}
}

function deleteLast() {
	activeField.textContent = activeField.textContent.substring(
		0,
		activeField.textContent.length - 1
	);
}

function clearAll() {
	screenChildren.forEach((child) => (child.textContent = ""));
}

function setOperation(e) {
	if (e.target.textContent !== "=") {
		currentOperation = e.target.textContent;
	} else {
		return;
	}
}

function addNumbersEventListeners(buttons) {
	buttons.forEach((button) => {
		button.addEventListener("click", (e) => {
			type(e);
		});
	});
}

function addOperationsEventListeners(buttons) {
	buttons.forEach((button) => {
		button.addEventListener("click", (e) => {
			if (e.target !== equalsButton) {
				if (currentOperation === undefined) {
					setOperation(e);
					type(e);
				}
				if (currentOperation !== undefined) {
					deleteLast();
					setOperation(e);
					type(e);
				}
			}
		});
	});
}

deleteButton.addEventListener("click", deleteLast);
clearButton.addEventListener("click", clearAll);

addNumbersEventListeners(numberButtons);
addOperationsEventListeners(operatorButtons);
