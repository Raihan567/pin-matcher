// get pin and display in input field
function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + ''
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin()
    document.getElementById('display-pin').value = pin;
}

// key-pad and clear input filed 
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = ' ';
        }
    } else {
        const previousCalc = calcInput.value;
        const newCalc = previousCalc + number;
        calcInput.value = newCalc;
    }

});

// veriFying Pin number 
function veriFyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success')
    const errorMassage = document.getElementById('notify-fail');

    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        errorMassage.style.display = 'none';
    } else {
        errorMassage.style.display = ' block';
        successMessage.style.display = 'none';

    };
};