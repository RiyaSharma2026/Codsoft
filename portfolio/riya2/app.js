let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = '';
let plusMinusState = false; // false represents positive, true represents negative

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        handleButtonClick(b.target.innerText);
    });
});

function handleButtonClick(buttonText) {
    switch (buttonText) {
        case '=':
            evaluateExpression();
            break;
        case 'AC':
            clearInput();
            break;
        case 'DEL':
            deleteLastCharacter();
            break;
        case 'plusMinus':
            togglePlusMinus();
            break;
        default:
            appendToInput(buttonText);
            break;
    }
}

function evaluateExpression() {
    try {
        string = String(eval(string));
        inputBox.value = string;
    } catch (error) {
        inputBox.value = 'Error';
    }
}

function clearInput() {
    string = '';
    inputBox.value = string;
}

function deleteLastCharacter() {
    string = string.substring(0, string.length - 1);
    inputBox.value = string;
}

function togglePlusMinus() {
    if (plusMinusState) {
        // If the current state is negative, make it positive
        string = string.substring(1); // Remove the negative sign
    } else {
        // If the current state is positive, make it negative
        string = '-' + string;
    }
    
    plusMinusState = !plusMinusState; // Toggle the state
    inputBox.value = string;
}

function appendToInput(value) {
    string += value;
    inputBox.value = string;
}
