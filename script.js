let clear = document.querySelector('#clear');
let undo = document.querySelector('#undo');
let btnModulo = document.querySelector('#modulo');
let btnDivide = document.querySelector('#divide');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let btnMultiply = document.querySelector('#multiply');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let btnSubtract = document.querySelector('#subtract');
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let btnAdd = document.querySelector('#add');
let zero = document.querySelector('#zero');
let dot = document.querySelector('#dot');


let add= function(a,b){
    return a+b;
}
let subtract= function(a,b){
    return a-b;
}
let multiply= function(a,b){
    return a*b;
}
let divide= function(a,b){
    return a/b;
}
let modulo= function(a,b){
    return a%b;
}

let firstNum;
let secondNum;
let operator;

function operate(operator,firstNum,secondNum){
    if (operator === add){
        return add(firstNum, secondNum);
    } else if (operator === subtract){
        return subtract(firstNum, secondNum);
    } else if (operator === multiply){
        return multiply(firstNum, secondNum);
    } else if (operator === divide){
        return divide(firstNum, secondNum);
    } else if (operator === modulo){
        return modulo(firstNum, secondNum);
    }
}
let currentNumber='';
let result= document.querySelector('.result');
let digits= document.querySelectorAll('.btn');

digits.forEach(function(button){
    button.addEventListener('click', function(e){
        let value= e.target.textContent;
        if (!isNaN(value)) {
            currentNumber += value;
            result.textContent += value;
        }
        else if (value === '.') {
            if (!currentNumber.includes('.')) { 
                currentNumber += value;
                result.textContent += value;
        }}
        else if(value === '+'){
            result.textContent += '+';
            firstNum = Number(currentNumber);
            operator = add;
            currentNumber = '';
        }
        else if(value === '-'){
            result.textContent += '-';
            firstNum = Number(currentNumber);
            operator = subtract;
            currentNumber = '';
        }
        else if(value === '/'){
            result.textContent += '/';
            firstNum = Number(currentNumber);
            operator = divide;
            currentNumber = '';
        }
        else if(value === '*'){
            result.textContent += '*';
            firstNum = Number(currentNumber);
            operator = multiply;
            currentNumber = '';
        }
        else if(value === '%'){
            result.textContent += '%';
            firstNum = Number(currentNumber);
            operator = modulo;
            currentNumber = '';
        }
        else if(value === 'AC'){
            currentNumber = '';
            result.textContent = '';
        }
        else if(value === 'CE'){
            currentNumber = currentNumber.slice(0, -1);
            result.textContent = result.textContent.slice(0, -1);
        }
        else if(value === '='){
            secondNum = Number(currentNumber);
            let resultValue = operate(operator, firstNum, secondNum);
            result.textContent= resultValue;
        }
    })
})
document.addEventListener('keydown', function(e) {
    let value = e.key;

    if (value === 'Enter') value = '=';
    if (value === 'Backspace') value = 'CE';
    if (value === 'Escape') value = 'AC';
    if (value === '*') value = '*'; 
    if (value === '/') value = '/';

    if (!isNaN(value)) {
        currentNumber += value;
        result.textContent += value;
    }
    else if (value === '.') {
        if (!currentNumber.includes('.')) { 
            currentNumber += value;
            result.textContent += value;
    }}
    else if (value === '+') {
        result.textContent += '+';
        firstNum = Number(currentNumber);
        operator = add;
        currentNumber = '';
    }
    else if (value === '-') {
        result.textContent += '-';
        firstNum = Number(currentNumber);
        operator = subtract;
        currentNumber = '';
    }
    else if (value === '/') {
        result.textContent += '/';
        firstNum = Number(currentNumber);
        operator = divide;
        currentNumber = '';
    }
    else if (value === '*') {
        result.textContent += '*';
        firstNum = Number(currentNumber);
        operator = multiply;
        currentNumber = '';
    }
    else if (value === '%') {
        result.textContent += '%';
        firstNum = Number(currentNumber);
        operator = modulo;
        currentNumber = '';
    }
    else if (value === 'AC') {
        currentNumber = '';
        result.textContent = '';
    }
    else if (value === 'CE') {
        currentNumber = currentNumber.slice(0, -1);
        result.textContent = result.textContent.slice(0, -1);
    }
    else if (value === '=') {
        secondNum = Number(currentNumber);
        let resultValue = operate(operator, firstNum, secondNum);
        result.textContent = resultValue;
    }
});
