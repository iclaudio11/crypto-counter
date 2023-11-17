/* SCRIPT */

let currentCrypto = "ETH";
let ethCounter = 0;
let btcCounter = 0;

document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.button-container button');

    buttons.forEach(function (button) {
        button.addEventListener('touchend', function (e) {
            e.preventDefault();

            function switchCrypto() {
                let counterElement = document.getElementById("counter");
            
                if (currentCrypto === "ETH") {
                    ethCounter = parseInt(counterElement.innerText);
                    currentCrypto = "BTC";
                } else {
                    btcCounter = parseInt(counterElement.innerText);
                    currentCrypto = "ETH";
                }
            
                counterElement.innerText = (currentCrypto === "ETH" ? ethCounter : btcCounter) + " " + currentCrypto;
            
                updateMiniCounters();
            }
            
            function changeCounter(amount) {
                let counterElement = document.getElementById("counter");
            
                let currentValue = (currentCrypto === "ETH") ? ethCounter : btcCounter;
            
                if (currentValue + amount >= 0) {
                    if (currentCrypto === "ETH") {
                        ethCounter = currentValue + amount;
                    } else {
                        btcCounter = currentValue + amount;
                    }
                    counterElement.innerText = (currentValue + amount) + " " + currentCrypto;
            
                    updateMiniCounters();
                }
            }
            
            function resetCounter() {
                let counterElement = document.getElementById("counter");
            
                if (currentCrypto === "ETH") {
                    ethCounter = 0;
                    counterElement.innerText = "0 ETH";
                } else {
                    btcCounter = 0;
                    counterElement.innerText = "0 BTC";
                }
            
                updateMiniCounters();
            }
            
            function updateMiniCounters() {
                let ethMiniCounterElement = document.querySelector(".crypto-value-container:nth-child(2) p:first-child");
                let btcMiniCounterElement = document.querySelector(".crypto-value-container:nth-child(4) p:first-child");
            
                ethMiniCounterElement.innerText = ethCounter + " ETH";
                btcMiniCounterElement.innerText = btcCounter + " BTC";
            }
            
            function updateMiniCounters() {
                let ethMiniCounterElement = document.querySelector(".crypto-value-container:nth-child(2) p:first-child");
                let btcMiniCounterElement = document.querySelector(".crypto-value-container:nth-child(4) p:first-child");
                let ethValueElement = document.querySelector(".crypto-value-container:nth-child(2) p:last-child");
                let btcValueElement = document.querySelector(".crypto-value-container:nth-child(4) p:last-child");
            
                ethMiniCounterElement.innerText = ethCounter + " ETH";
                btcMiniCounterElement.innerText = btcCounter + " BTC";
            
                ethValueElement.innerText = "Value: €" + calculateEuroValue(ethCounter, "ETH");
                btcValueElement.innerText = "Value: €" + calculateEuroValue(btcCounter, "BTC");
            }
            
            function calculateEuroValue(cryptoAmount, cryptoType) {
                let ethExchangeRate = 1864.40;
                let btcExchangeRate = 33787.47;
            
                let exchangeRate = (cryptoType === "ETH") ? ethExchangeRate : btcExchangeRate;
            
                let euroValue = cryptoAmount * exchangeRate;
            
                return euroValue.toFixed(2);
            }
            
            
        });
    });
});

