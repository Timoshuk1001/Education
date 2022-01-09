const {getInputValue, addListener, setHTMLValue} = require('./utils');

const resultRndNumber = [];
let resultCount = 1;



function randomNumber() {
    document.getElementById('reset').disabled = false;
    const minValue = Number.parseInt(getInputValue('min'), 10);
    const maxValue = Number.parseInt(getInputValue('max'), 10);


    if(!minValue || !maxValue){
        if(!minValue) setHTMLValue('min_status', 'You must enter min value!');
        if(!maxValue) setHTMLValue('max_status', 'You must enter max value!');

        return;
    }

    if (maxValue <= minValue) {
        setHTMLValue('genNumber', 'Wrong input! Max <= Min');
        return;
    }

    const result = Math.round(minValue - 0.5 + Math.random() * (maxValue - minValue + 1));

    if (resultRndNumber.length === maxValue - 1){
        document.getElementById('commit').disabled = true;
        setHTMLValue('genNumber','Generated number: Elements are over');
        return;
    }

    if(resultRndNumber.includes(result)) {
        randomNumber();
        return;
    }

    if(resultCount === 1) {
        setHTMLValue('genNumber', 'Generated number: ');
    }
    document.getElementById('genNumber').textContent += result + ' ';

    resultRndNumber.push(result);
    resultCount++;
}

function reset() {
    document.getElementById('min').value = '';
    document.getElementById('max').value = '';
    document.getElementById('genNumber').textContent = 'Generated number: ';
    resultRndNumber.length = 0;
    document.getElementById('commit').disabled = false;
    document.getElementById('min_status').textContent = '';
    document.getElementById('max_status').textContent = '';
    document.getElementById('reset').disabled = true;
}

addListener('reset','click', reset);

addListener('commit','click', randomNumber);

module.exports = { randomNumber, reset }

