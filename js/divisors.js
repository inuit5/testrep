
//1.

function calcDiv() {
    let showdiv1 = document.querySelector("span.show-div1");
    let showdiv2 = document.querySelector("span.show-div2");
    let showdivcommon = document.querySelector("span.show-div3");
    let showdivgreatest = document.querySelector("span.show-div4");
    let showprim = document.querySelector("span.show-div5");
    let nr1 = parseInt(document.querySelector("input[name=number1]").value);
    let nr2 = parseInt(document.querySelector("input[name=number2]").value);
    //console.log(nr1+" "+nr2);

    calc(nr1, nr2);
    calccommon(nr1, nr2);
    calcgreatest(nr1, nr2);
    prim(nr1);

    function calc(nr1, nr2) {
        divs1 = [];
        if (nr1 > 1) {
            for (let i = 1; i <= nr1; i++) {
                if (nr1 % i === 0) {
                    console.log(i);
                    divs1.push(i);
                    showdiv1.innerHTML = divs1;

                }
            }
        }
        divs2 = [];
        if (nr2 > 1) {
            console.log("Második")
            for (let i = 1; i <= nr2; i++) {
                if (nr2 % i === 0) {
                    console.log(i);
                    divs2.push(i);
                    showdiv2.innerHTML = divs2;

                }
            }
        }
    }



    function calccommon(nr1, nr2) {
        divsc = [];
        console.log("Közös")
        for (let i = 1; i <= nr1; i++) {
            if (nr1 % i === 0 && nr2 % i === 0) {
                console.log(i);
                divsc.push(i);
                showdivcommon.innerhtml = divsc;
            }
        }
        
        return divsc

    }

    function calcgreatest(nr1, nr2) {
        let arr = calccommon(nr1, nr2);
        let greatest = 1;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > greatest) {
                greatest = arr[i];

            }

        }
        console.log(greatest);
        showdivgreatest.innerHTML = greatest;
    } 

    function prim(nr1) {
        let divnumber = 0;
        let prim;
        for (let i = 1; i <= nr1; i++) {
            if (nr1 %= 0) {
                divnumber++
            }
        }
        prim = divnumber = 2 ? true : false;
        showprim.innerHTML = prim;
        console.log(prim);
    
    }

}




function isInTheArray(nr){
    let arr=[3,56,23587,458468,352435,9,234,89,234,56,754];
  
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == nr){
            return "Igen, sorszám:"+i;  
        }
    }
    console.log(isInTheArray(56));
   // return -1;
 }


let arr = [1, 4, 88, 34, 65, 12, 9, 8, 107856743];
let Sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        Sum += arr[i];
    }

}
console.log(Sum);

