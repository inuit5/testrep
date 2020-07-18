
function calcAmount() {

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const address = document.querySelector("#address").value.trim();
    const comment = document.querySelector("#comment").value.trim();

    const extra = parseInt(document.querySelector("input[name=extra]:checked").value);
    const souce = parseInt(document.getElementById("souce").value);
    const showAmount = document.querySelector("span.show-amount");
    const amount = parseInt(document.querySelector("input[name=quantity]").value);
    const amountNumber = parseInt(amount);



  if (isValidPersonalData(name, email, address, comment) && isValidQuantity(amountNumber)){
      getTotal(extra, souce, amount, showAmount);
  } 
}

    function isValidPersonalData(name, email, address, comment) {

        //  name = (!name) ? {alert('Név megadása kötelező')} : name;
        //    address = address.lenght < 10 ? {alert() } : address;
        if (!name) {
            alert("Név megadása kötelező");
            return false;
        }
        
        else if (!email || !(email.indexOf("@") > 0) || !(email.indexOf(".") > 0)) {
            alert("Nem érvényes email cím");
            return false;
        }


        else if (address.length < 10) {
            alert("Nem valid cím");
            return false;
        }

        else if ((comment.indexOf("<") > 0) && (comment.indexOf(">") > 0)) {
            alert("HTMLt nem tartalmazhat");
            return false;
        }
        return true

    }


   function isValidQuantity(amountNumber) {



        //  if (isNaN(amountNumber)) {amountNumber = 0;}
        //    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
        if (!amountNumber || amountNumber < 1 || amountNumber > 10 ) {
            alert("Min 1 és Max 10 terméket vásárolhat");
            return false
        }
        return true


    }


   function getTotal(extra, souce, amount,showAmount) {
 
        let price = (1200 + extra + souce) * amount;
      //  let amount = parseInt(souceInput.value) + parseInt(amount.value) * price + parseInt(extraInput.value) * parseInt(amount.value);


        // let amount = parseInt(amount.value)*price;
        showAmount.innerHTML = price;
    }



