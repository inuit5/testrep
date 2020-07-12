function calcAmount() {

    let price = 1200;
    let amountInput = document.querySelector("input[name=quantity]");

    let extraInput = document.querySelector("input[name=extra]:checked");

    let souceInput = document.getElementById("souce");

  // let extraInput = 300;
    
    let showAmount = document.querySelector("span.show-amount");

    let amount = parseInt(souceInput.value)+ parseInt(amountInput.value)*price + parseInt(extraInput.value)*parseInt(amountInput.value);

   // let amount = parseInt(amountInput.value)*price;
    
    
    showAmount.innerHTML = amount;
    
    }