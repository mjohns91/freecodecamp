const isPalString = "is a palindrome.";
const isNotPalString = "is not a palindrome.";

const inputField = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");
const resultString = document.getElementById("result-string");


function checkIfPalindrome(string) {
    let reversedStr = string.split("").reverse().join("");

    if (string === reversedStr) {
        return true
    } else {
        return false
    }
}


function showResult(word, isPalindrome) {
    //check if string is palindrome
    if (isPalindrome) {
        resultString.innerHTML = `<strong>${word}</strong> ${isPalString}`
    } else {
        resultString.innerHTML = `<strong>${word}</strong> ${isNotPalString}`
    }
    resultDiv.hidden = false;
}


function stripString(string) {
    return string.replace(/[^0-9a-z]/gi, '')
}


function check_input() {
    //save text entry to string var
    if (inputField.value === "") {
        window.alert("Please input a value")
        return
    }
    let origWord = inputField.value;
    let word = stripString(inputField.value)
    word = word.toLowerCase();
    let isPalindrome = checkIfPalindrome(word);
    showResult(origWord, isPalindrome);
}
