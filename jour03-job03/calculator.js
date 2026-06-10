let currentinput = "";

function updateDisplay() {
    if (typeof document !== 'undefined') {
        document.getElementById('result').value = currentinput;
    }
}

function appendValue(value) {
    currentinput += value;
    updateDisplay();
}

function appendOperator(operator) {
    if (!/[+\-*/]$/.test(currentinput)) {
        currentinput += operator;
        updateDisplay();
    }
}

function clearResult() {
    currentinput = "";
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(currentinput);
        currentinput = result.toString();
    } catch (e) {
        currentinput = "Erreur";
        updateDisplay();
    }
}

// Fonction exportable pour Jest
function evaluateExpression (expression) {
    if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
        throw new Error("Expression invalide");
    }
    return eval(expression);
}

if (typeof module !== 'undefined') {
    module.exports = {
        calculate: evaluateExpression
    };
}