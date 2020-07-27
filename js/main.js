

console.log("This is a console message");

// title.concat( name.trim()) .toLowerCase();

//* let testStr = " Hol van a kutyus?"
//* testStr.indexOf ("kutyus")  



function calcAmount() {


    let price = 1200;
    let amountInput = document.querySelector("input[name=amount]");
    
    let amountNumber = parseInt(amountInput.value);

  //  if (isNaN(amountNumber)) {amountNumber = 0;}

  amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

  showSum(price, amountNumber);
  
}

function showSum(price, amountNumber) {
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Max 10 terméket vásárolhat");
        return;
    }
    else if (amountNumber < 1) {
        alert("min 1 terméket válassz ki")
    }
    
    else {
    
        let amount = amountNumber * price;
    
        showAmount.innerHTML = amount;
    }
    
    
}