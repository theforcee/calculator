var result = 0;
var displayResult = document.getElementById("result");

function updateResult() {
    result = displayResult.innerHTML;
}

function pressPercent() {

}

// var stringA = "abcdabcaadeas", stringB = "a"
// x = stringA.split(stringB);
// alert(x + " - typeof x[0]: " + typeof x[0])

// var stringA = "abcdabcaadeas", stringB = "a"
// x = stringA.split(stringB).length - 1;
// alert(x)

function numberOfString(string, child) {
    return string.split(child).length - 1;
}

function findString(string) {
    let _length2 = parseInt(string.length / 2);
    let arrayFilterSL = new Array();

    for (let i = 1; i <= _length2; i++) {
        for (let j = 0; j <= _length2; j++) {
            childString = string.substr(j, i);
            lengthChild = numberOfString(string, childString);
            // alert(lengthChild);break;
            arrayFilterSL.push({ //đưa chuỗi đã tách + độ dài tương ứng vào mảng (gồm chuỗi + độ dài)
                _string: childString,
                _length: lengthChild
            })
        }
    }
    alert(arrayFilterSL);break;

    //tìm độ dài lớn nhất
    let maxLength = arrayFilterSL[0]._length;
    for (let k = 1; k < arrayFilterSL.length; k++) {
        if (maxLength < arrayFilterSL[k]._length) {
            maxLength = arrayFilterSL[k]._length;
        }
    }

    //lọc mảng tìm các chuỗi có độ dài = maxLength, cho vào mảng mới (chỉ gồm các chuỗi)
    let newString = new Array();
    for (let m = 0; m < arrayFilterSL.length; m++) {
        if (maxLength == arrayFilterSL[m]._length) {
            newString.push(arrayFilterSL[m]._string);
        }
    }

    //so sánh xem chuỗi nào dài nhất
    let finalStringLength = newString[0].length;
    let finalString = newString[0];
    for (let n = 1; n < newString.length; n++) {
        if (finalStringLength < newString[i].length) {
            finalStringLength = newString[i].length;
            finalString = newString[i];
        }
    }


    return finalString;
}
alert(findString("abcdabcd"));

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
    if (!isFloat(result)) {
        let character = result.substr(result.length - 1, 1);
        //if last character is number, integer
        if (Number(character) || character == 0) {
            displayResult.innerHTML += ".";
        }
        updateResult();
    }
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

    // alert(result + "\n" + arrayCharacter + " - length: " + arrayCharacter.length);
}