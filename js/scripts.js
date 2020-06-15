var result = 0;
var displayResult = document.getElementById("result");

function updateResult() {
    result = displayResult.innerHTML;
}

function pressPercent() {

}

function pressSqrt() {
    displayResult.innerHTML = Math.sqrt(result);
    updateResult();
}

function pressSquared() {
    displayResult.innerHTML = Math.pow(result, 2);
    updateResult();
}

function pressInverse() {
    displayResult.innerHTML = 1 / result;
    updateResult();
}

function pressClear() {
    //reset result
    result = 0;
    displayResult.innerHTML = 0;
}

function pressDelete() {
    if (result != 0) {
        //last character = number: delete 1 character
        let character = result.substr(result.length - 1, 1);
        if (Number(character) || parseInt(character) == 0) {
            displayResult.innerHTML = result.substr(0, result.length - 1);
        }
        //last character = operator: delete 3 character
        else if (!Number(character)) {
            displayResult.innerHTML = result.substr(0, result.length - 3);
        }
        updateResult();
    }
}

function pressOperator(operator) {
    if (result != 0) {
        let character = result.substr(result.length - 1, 1);
        //last character = number: add operator
        if (Number(character) || parseInt(character) == 0) {
            displayResult.innerHTML += operator;
            updateResult();
        }
        //last character = operator: delete last 3 character, add new 3 character
        else if (!Number(character)) {
            displayResult.innerHTML = result.substr(0, result.length - 3) + operator;
            updateResult();
        }
    }
}

function pressNumber(number) {
    if (result == 0 && number != 0) {
        displayResult.innerHTML = number;
        if (result === "0.")
            displayResult.innerHTML = "0." + number;
    }
    else if (result != 0) {
        displayResult.innerHTML += number;
    }
    updateResult();
}

function pressSwapPlusMinus() {
    displayResult.innerHTML = - displayResult.innerHTML;
}

function isFloat(n) {
    return n != "" && !isNaN(n) && Math.round(n) != n;
}

function pressDot() {
    _length = result.length;
    let space = result.lastIndexOf(" ");
    //fistNumber isFloat?
    if (space == -1) { 
        if (result.indexOf(".") == -1)
            displayResult.innerHTML += ".";
    }
    else {
        //check lastNumber isFloat?
        let lastNumber = result.slice(space, _length);
        if (lastNumber.indexOf(".") == -1)
            displayResult.innerHTML += ".";
    }
    updateResult();

}

function pressEqual() {
    let arrayCharacter = new Array();
    arrayCharacter = result.split(" ");
    let _length = arrayCharacter.length;

    for (let i = 1; i < _length; i += 2) {
        switch (arrayCharacter[i]) {
            case "+":
                arrayCharacter[i + 1] = parseFloat(arrayCharacter[i - 1]) + parseFloat(arrayCharacter[i + 1]);
                break;
            case "-":
                arrayCharacter[i + 1] = parseFloat(arrayCharacter[i - 1]) - parseFloat(arrayCharacter[i + 1]);
                break;
            case "*":
                arrayCharacter[i + 1] = parseFloat(arrayCharacter[i - 1]) * parseFloat(arrayCharacter[i + 1]);
                break;
            case "/":
                arrayCharacter[i + 1] = parseFloat(arrayCharacter[i - 1]) / parseFloat(arrayCharacter[i + 1]);
                break;
            default: break;
        }
    }
    displayResult.innerHTML = arrayCharacter[_length - 1];

    updateResult();

}