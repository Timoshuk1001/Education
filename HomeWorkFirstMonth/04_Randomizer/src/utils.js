function getInputValue(id) {
    const input = document.getElementById(id);
    if(input) {
        return input.value;
    }
    return '';
}

function addListener (id, eventType, callback){
    const node = document.getElementById(id);
    if (node){
        node.addEventListener(eventType, callback);
    }
}

function setHTMLValue(id, value) {
    const node = document.getElementById(id);
    if (node) {
        node.innerHTML = value;
        return true;
    }
    return false;
}

module.exports = {getInputValue, addListener, setHTMLValue}