let speed = document.getElementById('speed');
let speedUnit = document.getElementsByTagName('speedUnit');

function convertSpeed() {
  if (speedUnit.value == "MPH") {
    let MPH = speed.value;
    let KTS = 0.8689762 * speed.value;
    let FTS = 1.46667 * speed.value;
    let KMH = 1.609344 * speed.value;
  } else if (speedUnit.value == "KTS") {
    let MPH = 1.1507794 * speed.value;
    let KTS = speed.value;
    let FTS = 1.6878099 * speed.value;
    let KMH = 1.852 * speed.value;
  } else if (speedUnit == "FT/S") {
    let MPH = 0.681818 * speed.value;
    let KTS = 0.5924838 * speed.value;
    let FTS = speed.value;
    let KMH = 1.09728 * speed.value;
  } else if (speedUnit.value == "KM/H") {
    let MPH = 0.621371 * speed.value;
    let KTS = 0.5399568 * speed.value;
    let FTS = 0.911344 * speed.value;
    let KMH = speed.value;
  }
  return MPH, KTS, FTS, KMH;
}

function calculate() {
  convertTemp();
  convertSpeed();
  let windChill = (35.74 + (0.6215 * F) - (35.75 * MPH ^ 0.16) + (0.4275 * F * MPH ^ 0.16));
  let Fahrenheit = document.getElementById('Fahrenheit');
  let Celsius = document.getElementById('Celsius');
  let Kelvin = document.getElementById('Kelvin');
  let FeelsLikeF = document.getElementById('FeelsLikeF');
  let FeelsLikeC = document.getElementById('FeelsLikeC');
  let FeelsLikeK = document.getElementById('FeelsLikeK');
  
  Fahrenheit.textContent = F;
  Celsius.textContent = C;
  Kelvin.textContent = K;
  
  FeelsLikeF.textContent = windChill;
  FeelsLikeC.textContent = (( 5 / 9 ) * (windChill - 32));
  FeelsLikeK.textContent = (( 5 / 9 ) * (windChill - 32)) + 273.16;
}
