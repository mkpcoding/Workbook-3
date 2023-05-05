function convertCtoF(cTemp) { 
    const fTemp = cTemp * (9/5) +32; 
    return fTemp; 
}

let currentTemp =0; 
let fTemp =convertCtoF(currentTemp);

console.log(`Fahrenheit: ${fTemp.toFixed(2)}`);