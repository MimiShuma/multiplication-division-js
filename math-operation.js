function doMultiplication() {
    let firstGivenNumber = document.getElementById('firstNumber').value;
    let secondGivenNumber = document.getElementById('secondNumber').value;
    let target = document.getElementById('result');
    target.innerHTML = firstGivenNumber * secondGivenNumber;
}
function doDivision() {
    let firstGivenNumber = document.getElementById('firstNumber').value;
    let secondGivenNumber = document.getElementById('secondNumber').value;
    let target = document.getElementById('result');
    target.innerHTML = firstGivenNumber / secondGivenNumber;
}
function doAddition() {
    let firstGivenNumber = parseFloat(document.getElementById('firstNumber').value);
    let secondGivenNumber = parseFloat(document.getElementById('secondNumber').value);
    let target = document.getElementById('result');
    target.innerHTML = firstGivenNumber + secondGivenNumber;
}
function doSubstraction() {
    let firstGivenNumber = document.getElementById('firstNumber').value;
    let secondGivenNumber = document.getElementById('secondNumber').value;
    let target = document.getElementById('result');
    target.innerHTML = firstGivenNumber - secondGivenNumber;
}