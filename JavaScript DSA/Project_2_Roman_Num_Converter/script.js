const inputEl = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputEl = document.getElementById("output");
const outputDiv = document.getElementById("output-container");

let numeralString = [];

const convert = () => {
    if (inputEl.value === "") {
        return valueError();
    }
    let number = parseInt(inputEl.value);
    
    //check for valid value
    if (number < 1) {
        return valueError('low');
    }
    if (number > 3999) {
        return valueError('high');
    }
    
    //reset numeral string array
    numeralString = [];

    decimalToRoman(number);
    console.log(numeralString);

    outputEl.innerText = numeralString.join("")
    outputDiv.hidden = false;
}


const decimalToRoman = (value) => {
    //base case
    if (value === 0) {
        return
    }

    if (1000 <= value) {
        numeralString.push('M');
        value -= 1000;
    } else if (900 <= value) {
        numeralString.push('CM');
        value -= 900;
    } else if (500 <= value) {
        numeralString.push('D');
        value -= 500;
    } else if (400 <= value) {
        numeralString.push('CD');
        value -= 400;
    } else if (100 <= value) {
        numeralString.push('C');
        value -= 100;
    } else if (90 <= value) {
        numeralString.push('XC');
        value -= 90;
    } else if (50 <= value) {
        numeralString.push('L');
        value -= 50;
    } else if (40 <= value) {
        numeralString.push('XL');
        value -= 40;
    } else if (10 <= value) {
        numeralString.push('X');
        value -= 10;
    } else if (9 <= value) {
        numeralString.push('IX');
        value -= 9;
    } else if (5 <= value) {
        numeralString.push('V');
        value -= 5;
    } else if (4 <= value) {
        numeralString.push('IV');
        value -= 4;
    } else if (1 <= value){
        numeralString.push('I');
        value -= 1;
    }
    
    console.log(value);
    decimalToRoman(value);
}


const valueError = (error) => {
    outputDiv.hidden = false;
    switch (error) {
        case 'low':
            outputEl.innerText = "Please enter a number greater than or equal to 1";
            break
        case 'high':
            outputEl.innerText = "Please enter a number less than or equal to 3999";
            break
        default:
            outputEl.innerText = "Please enter a valid number";
            break
    }
}