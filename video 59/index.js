// Faulty Calculator
            function faultyCalculator(num1, num2, operator) {
    const faultyOps = {
        "+": "-",
        "-": "+",
        "*": "/",
        "/": ""
    };
    let randomChance = Math.random();
    let faulty = false;
    if (randomChance < 0.1 && faultyOps[operator]) {
        faulty = true;
        operator = faultyOps[operator];
    }
    let result;
    switch (operator) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num1 / num2; break;
        case "": result = num1 ** num2; break;
        default: result = "Invalid operator!";
    }
    return { result, faulty };
}

// DOM interaction
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calcForm');
    const resultDiv = document.getElementById('result');
    form.addEventListener('submit', function() {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const operator = document.getElementById('operator').value;
        const { result, faulty } = faultyCalculator(num1, num2, operator);
        resultDiv.innerHTML = faulty ? `⚠ Faulty operation performed!<br>Result: <b>${result}</b>` : `Result: <b>${result}</b>`;
    });
});