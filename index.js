let inputEl = document.getElementById('input-el');
let convertBtn = document.getElementById('convert-btn');
let lengthEl = document.getElementById('length-el');
let volumeEl = document.getElementById('volume-el');
let massEl = document.getElementById('mass-el');

let meterToFeet = 3.281;
meterToFeet = meterToFeet.toFixed(3);
let literToGallon = 0.264;
literToGallon = literToGallon.toFixed(3);
const kilogramToPound = 2.204;

convertBtn.addEventListener('click', function() {
  let baseValue = inputEl.value;
  lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet`;
  volumeEl.textContent = `${baseValue} liter = ${(baseValue * literToGallon).toFixed(3)} galons`;
  massEl.textContent = `${baseValue} kilogram = ${(baseValue * kilogramToPound).toFixed(3)} pounds`;

})
