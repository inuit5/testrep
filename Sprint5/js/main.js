console.log("This is a console message");

function calcAmount() {

let price = 1200;
let amountInput = document.querySelector("input[name=amount]");

let showAmount = document.querySelector("span.show-amount");
let amount = parseInt(amountInput.value)*price;


showAmount.innerHTML = amount;

}