function isValidNumber(num) {
    return !isNaN(num) && Number.isInteger(Number(num)) && Number(num) >= 0;
}

function calculateSumProduct() {
    let num = document.getElementById("numberInput").value;

    if (!isValidNumber(num)) {
        document.getElementById("sum-product-result").textContent = "Введіть коректне число!";
        return;
    }

    let sum = 0;
    let product = 1;

    for (let digit of num) {
        let d = Number(digit);
        sum += d;
        product *= d;
    }

    document.getElementById("sum-product-result").textContent = `Сума: ${sum}, Добуток: ${product}`;
}


function reverseNumber() {
    let num = document.getElementById("reverseInput").value;

    if (!isValidNumber(num)) {
        document.getElementById("reverse-result").textContent = "Введіть коректне число!";
        return;
    }

    let reversed = "";
    for (let i = num.length - 1; i >= 0; i--) {
        reversed += num[i];
    }
    document.getElementById("reverse-result").textContent = `Зворотний порядок: ${reversed}`;
}

function showAuthorInfo() {
    document.getElementById("author-info").style.display = "block";
}

function hideAuthorInfo() {
    document.getElementById("author-info").style.display = "none";
}
