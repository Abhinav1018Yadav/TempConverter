let c = document.getElementById("Celcius");
let f = document.getElementById("Fahrenheit");
// console.log(Celcius,Fahrenheit);
 
function celToFarK(){
    let output1 = (parseFloat(Celcius.value) * 9/5)+32;
    let output2 = (parseFloat(Celcius.value) +273.15);
    Fahrenheit.value = parseFloat(output1.toFixed(2));
    Kelvin.value = parseFloat(output2.toFixed(2));
    // console.log(output1);
}

function farToCelK(){
    let output1 = (parseFloat(Fahrenheit.value) - 32 )*5/9;
    let output2 = output1 + 273.15;
    Celcius.value = parseFloat(output1.toFixed(2));
    Kelvin.value = parseFloat(output2.toFixed(2));
    // console.log(output1);
}

function KToCelFar(){
    let output1 = (parseFloat(Kelvin.value) - 273.15);
    let output2 = (output1 * 9/5)+32;
    Celcius.value = parseFloat(output1.toFixed(2));
    Fahrenheit.value = parseFloat(output2.toFixed(2));
    // console.log(output1);
}




