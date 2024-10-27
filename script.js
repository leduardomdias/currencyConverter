// Taxas de câmbio fixas para conversão
const exchangeRates = {
    BRL: { USD: 0.20, EUR: 0.18, GBP: 0.16, JPY: 22.48 },
    USD: { BRL: 5.00, EUR: 0.92, GBP: 0.80, JPY: 112.00 },
    EUR: { BRL: 5.50, USD: 1.08, GBP: 0.87, JPY: 122.00 },
    GBP: { BRL: 6.30, USD: 1.25, EUR: 1.15, JPY: 140.00 },
    JPY: { BRL: 0.045, USD: 0.009, EUR: 0.008, GBP: 0.007 }
};


function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;


    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerHTML = "Por favor, insira um valor válido.";
        return;
    }


    if (fromCurrency === toCurrency) {
        document.getElementById("result").innerHTML = `Você escolheu a mesma moeda: ${fromCurrency}.`;
        return;
    }


    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    document.getElementById("result").innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency} (Taxa de câmbio: 1 ${fromCurrency} = ${rate} ${toCurrency})`;
}


document.getElementById("convert-button").addEventListener("click", convertCurrency);
