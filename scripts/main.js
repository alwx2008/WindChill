let temp = document.getElementById('temp');
let tempUnit = document.getElementsByTagName('tempUnit');
let speed = document.getElementById('speed');
let speedUnit = document.getElementsByTagName('speedUnit');

function calculate() {
  let F, C, K = convertTemp(temp, tempUnit);
  let MPH, KTS, FTS, KMH = convertSpeed(speed, speedUnit);
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
