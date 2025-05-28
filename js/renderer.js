function checkNumberValidity(ev) {
    if (ev.target.value > ev.target.max) {
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

window.addEventListener("DOMContentLoaded", e => {
    var inputs = document.querySelectorAll('.number-input');

    inputs.forEach(async i => {
        i.addEventListener("input", checkNumberValidity);
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
})