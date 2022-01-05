const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const genNumber = document.getElementById('genNumber');
const commitBtn = document.getElementById('commit');
const minStatus = document.getElementById('min_status');
const maxStatus = document.getElementById('max_status');
const resetBtn = document.getElementById('reset');

const resultRndNumber = [];
let resultCount = 1;

resetBtn.addEventListener('click', reset);

commitBtn.addEventListener('click', randomNumber);

function randomNumber() {
    resetBtn.disabled = false;
    const minValue = minInput.value;
    const maxValue = maxInput.value;


    if(!minValue || !maxValue){
        if(!minValue) minStatus.textContent = 'You must enter min value!';
        if(!maxValue) maxStatus.textContent = 'You must enter max value';

        return;
    }

    if (maxValue <= minValue) {
        genNumber.textContent = 'Wrong input! Max <= Min';
        return;
    }

    const result = Math.round(minValue - 0.5 + Math.random() * (maxValue - minValue + 1));

    if (resultRndNumber.length === maxValue - 1){
        commitBtn.disabled = true;
        genNumber.textContent = 'Generated number: Elements are over'
        return;
    }

    if(resultRndNumber.includes(result)) {
        randomNumber();
        return;
    }

    if(resultCount === 1) {
        genNumber.textContent = 'Generated number: ';
    }
    genNumber.textContent += result + ' ';

    resultRndNumber.push(result);
    resultCount++;
}

function reset() {
    minInput.value = '';
    maxInput.value = '';
    genNumber.textContent = 'Generated number: ';
    resultRndNumber.length = 0;
    commitBtn.disabled = false;
    minStatus.textContent = '';
    maxStatus.textContent = '';
    resetBtn.disabled = true;
}

module.exports = { randomNumber }
