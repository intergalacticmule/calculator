const screenContent = document.querySelector("#screen-container");

const clearButton = document.querySelector("#clear-all");
const deleteButton = document.querySelector("#delete");

const decimalButton = document.querySelector("#decimal");
const equalsButton = document.querySelector("#equals");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

var currentOperation;
var leftOperand;
var rightOperand;

function type(e) {
	if (screenContent.lastElementChild.textContent.length >= 14) {
		return;
	} else {
		screenContent.lastElementChild.textContent += e.target.textContent;
	}
}

function addNumbersEventListeners(buttons) {
	buttons.forEach((button) => {
		button.addEventListener("click", (e) => {
			type(e);
		});
	});
}

addNumbersEventListeners(numberButtons);
