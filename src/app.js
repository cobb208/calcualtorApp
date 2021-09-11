const displayScreen = document.getElementById('displayScreen');
const oneKey = document.getElementById('oneKey');
const twoKey = document.getElementById('twoKey');
const threeKey = document.getElementById('threeKey');
const fourKey = document.getElementById('fourKey');
const fiveKey = document.getElementById('fiveKey');
const sixKey = document.getElementById('sixKey');
const sevenKey = document.getElementById('sevenKey');
const eightKey = document.getElementById('eightKey');
const nineKey = document.getElementById('nineKey');
const zeroKey = document.getElementById('zeroKey');

const addKey = document.getElementById('addKey');
const minusKey = document.getElementById('minusKey');
const divideKey = document.getElementById('divideKey');
const multiplyKey = document.getElementById('multiplyKey');
const solveKey = document.getElementById('solveKey');
const clearKey = document.getElementById('clearKey');

const keyBook = [
    oneKey,
    twoKey,
    threeKey,
    fourKey,
    fiveKey,
    sixKey,
    sevenKey,
    eightKey,
    nineKey,
    zeroKey
];


let displayScreenValue = displayScreen.value;
let firstValue = 0;
let calcMode = null;

keyBook.forEach(key => {
    key.addEventListener('click', function() {
        updateScreenValue(key.innerHTML)
    });
});

addKey.addEventListener('click', function() {
    checkDisplayValueEmpty();

    firstValue = displayScreen.value;
    displayScreen.value = '';
    calcMode = 'addition';
});

minusKey.addEventListener('click', function() {
    checkDisplayValueEmpty();

    firstValue = displayScreen.value;
    displayScreen.value = '';
    calcMode = 'subtraction';

});

divideKey.addEventListener('click', function() {
    checkDisplayValueEmpty();

    firstValue = displayScreen.value;
    displayScreen.value = '';
    calcMode = 'divide';
});

multiplyKey.addEventListener('click', function() {
    checkDisplayValueEmpty();

    firstValue = displayScreen.value;
    displayScreen.value = '';
    calcMode = 'multiply';
})

solveKey.addEventListener('click', function() {

    if(calcMode === null) {
        return;
    }


    if(calcMode === 'addition') {
        checkDisplayValueEmpty();
        secondValue = displayScreen.value;
        displayScreen.value = parseFloat(firstValue) + parseFloat(secondValue);
        resetCalc();
        return;
    }

    if(calcMode === 'subtraction') {
        checkDisplayValueEmpty();
        secondValue = displayScreen.value;
        displayScreen.value = parseFloat(firstValue) - parseFloat(secondValue);
        resetCalc();
        return;
    }

    if(calcMode === 'divide') {

        if(parseInt(firstValue) === 0) {
            alert('Cannot divide by zero!');
            resetCalc();
            return;
        }
        checkDisplayValueEmpty();
        secondValue = displayScreen.value;
        displayScreen.value = parseFloat(firstValue) / parseFloat(secondValue);
    }

    if(calcMode === 'multiply') {
        checkDisplayValueEmpty();
        secondValue = displayScreen.value;
        displayScreen.value = parseFloat(firstValue) * parseFloat(secondValue);
        resetCalc();
        return;
    }
    
});

clearKey.addEventListener('click', function() {
    resetCalc();
    displayScreen.value = '';
});


function updateScreenValue(newValue) {
    oldValue = displayScreen.value;
    displayScreen.value = oldValue + newValue;
}

function checkDisplayValueEmpty() {
    if(displayScreen.value == '') {
        displayScreen.value = '0';
    }
}

function resetCalc() {
    calcMode = null;
    firstValue = '';
    secondValue = '';
}
