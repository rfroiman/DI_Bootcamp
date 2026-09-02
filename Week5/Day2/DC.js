// ==========================================
// CURRENCY CONVERTER
// ==========================================


// ==========================================
// API KEY
// ==========================================

const API_KEY = "3dc49aa80aef4c7e26950727";

// ==========================================
// GET ELEMENTS FROM DOM
// ==========================================

const fromCurrency = document.getElementById("fromCurrency");

const toCurrency = document.getElementById("toCurrency");

const amountInput = document.getElementById("amount");

const convertButton = document.getElementById("convertButton");

const switchButton = document.getElementById("switchButton");

const result = document.getElementById("result");


// ==========================================
// GET SUPPORTED CURRENCIES
// ==========================================

async function getCurrencies() {

    try {

        const response = await fetch(
            `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`
        );


        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }


        const data = await response.json();


        if (data.result === "error") {
            throw new Error(data["error-type"]);
        }


        const currencies = data.supported_codes;


        currencies.forEach((currency) => {

            const code = currency[0];

            const name = currency[1];


            // FROM OPTION

            const optionFrom = document.createElement("option");

            optionFrom.value = code;

            optionFrom.textContent = `${code} - ${name}`;


            // TO OPTION

            const optionTo = document.createElement("option");

            optionTo.value = code;

            optionTo.textContent = `${code} - ${name}`;


            fromCurrency.appendChild(optionFrom);

            toCurrency.appendChild(optionTo);

        });


        // Default currencies

        fromCurrency.value = "USD";

        toCurrency.value = "EUR";


    } catch (error) {

        console.log("Error:", error);

        result.textContent = "Unable to load currencies.";

    }

}


// ==========================================
// CONVERT CURRENCY
// ==========================================

async function convertCurrency() {

    try {

        const from = fromCurrency.value;

        const to = toCurrency.value;

        const amount = amountInput.value;


        if (amount === "" || amount <= 0) {

            result.textContent = "Please enter a valid amount.";

            return;

        }


        const response = await fetch(
            `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`
        );


        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }


        const data = await response.json();


        if (data.result === "error") {
            throw new Error(data["error-type"]);
        }


        const convertedAmount = data.conversion_result;


        result.textContent =
            `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;


    } catch (error) {

        console.log("Error:", error);

        result.textContent = "Conversion error.";

    }

}


// ==========================================
// CONVERT BUTTON
// ==========================================

convertButton.addEventListener(
    "click",
    convertCurrency
);


// ==========================================
// SWITCH CURRENCIES
// ==========================================

switchButton.addEventListener("click", function () {

    const oldFrom = fromCurrency.value;

    fromCurrency.value = toCurrency.value;

    toCurrency.value = oldFrom;


    if (amountInput.value !== "") {

        convertCurrency();

    }

});


// ==========================================
// LOAD CURRENCIES
// ==========================================

getCurrencies();