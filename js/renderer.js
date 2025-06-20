function checkNumberValidity(ev) {
    const isGreater = Math.max(ev.target.value, ev.target.max);
    if (isGreater > ev.target.max) {
        ev.target.classList.add('error');
    }
    else if (ev.target.value < ev.target.min) {
        ev.target.classList.add('error');
    }
    else {
        ev.target.classList.remove('error');
    }
}

function checkTotalValidity(id, inputs) {
    let containsErrors = false;

    inputs.forEach(input => {
        if (input.classList.contains('error')) {
            containsErrors = true;
        }
    });

    if (containsErrors) {
        document.querySelector(id).classList.add('error');
    }
    else {
        document.querySelector(id).classList.remove('error');
    }
}

function initialTotals() {
    const languageInputs = document.querySelectorAll(".language");
    let languageTotal = 0

    languageInputs.forEach(input => {
        languageTotal += Number(input.value);
    });
    const languageTotalDisplay = document.querySelector("#language-total-display");
    languageTotalDisplay.value = languageTotal;

    const readingInputs = document.querySelectorAll(".reading");
    let readingTotal = 0

    readingInputs.forEach(input => {
        readingTotal += Number(input.value);
    });
    const readingTotalDisplay = document.querySelector("#reading-total-display");
    readingTotalDisplay.value = readingTotal;

    const mathInputs = document.querySelectorAll(".math");
    let mathTotal = 0

    mathInputs.forEach(input => {
        mathTotal += Number(input.value);
    });
    const mathTotalDisplay = document.querySelector("#math-total-display");
    mathTotalDisplay.value = mathTotal;
}

window.addEventListener("DOMContentLoaded", e => {
    var inputs = document.querySelectorAll('.number-input');

    inputs.forEach(async i => {
        i.addEventListener("input", checkNumberValidity);
        i.addEventListener('focus', () => i.select());
    });

    document.querySelectorAll(".language").forEach((element, i) => {
        element.addEventListener("input", () => {
            const inputs = document.querySelectorAll(".language");
            let total = 0

            inputs.forEach(input => {
                total += Number(input.value);
            });

            document.querySelector("#language-total-display").value = total;
            
            checkTotalValidity("#language-total-display", inputs);
        })
    });

    // Event listeners
    document.querySelectorAll(".reading").forEach((element, i) => {
        element.addEventListener("input", () => {
            const inputs = document.querySelectorAll(".reading");
            let total = 0

            inputs.forEach(input => {
                total += Number(input.value);
            });

            document.querySelector("#reading-total-display").value = total;

            checkTotalValidity("#reading-total-display", inputs);
        })
    });
    
    document.querySelectorAll(".math").forEach((element, i) => {
        element.addEventListener("input", () => {
            const inputs = document.querySelectorAll(".math");
            let total = 0

            inputs.forEach(input => {
                total += Number(input.value);
            });

            document.querySelector("#math-total-display").value = total;
            
            checkTotalValidity("#math-total-display", inputs);
        })
    });

    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 13 && event.target.nodeName === 'INPUT') {
            var form = event.target.form;
            var index = Array.prototype.indexOf.call(form, event.target);
            form.elements[index + 1].focus();
            event.preventDefault();
        }
    });

    document.querySelector('#reset-button').addEventListener('click', async function() {
        document.querySelector("#input-form").reset();

        inputs.forEach(input => {
            input.classList.remove('error');
        });
        initialTotals();
    });

    initialTotals();
})