const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const genNumber = document.getElementById('genNumber');
const commitBtn = document.getElementById('commit');

const resultRndNumber = [];

document.getElementById('reset').addEventListener('click', reset);

commitBtn.addEventListener('click', randomNumber);

function randomNumber() {
    const minValue = minInput.value;
    const maxValue = maxInput.value;

    if (maxValue <= minValue) {
        genNumber.textContent = 'Wrong input! Max <= Min';
        return;
    }

    const result = Math.round(minValue - 0.5 + Math.random() * (maxValue - minValue + 1));

    if (resultRndNumber.length === maxValue - 1){
        commitBtn.disabled = true;
        return;
    }

    if(resultRndNumber.includes(result)) {
        randomNumber();
        return;
    }
    genNumber.textContent = 'Generated number: ' + result;
    resultRndNumber.push(result);
}

function reset() {
    minInput.value = '';
    maxInput.value = '';
    genNumber.textContent = '';
    resultRndNumber.length = 0;
    commitBtn.disabled = false;
}