function convertSpeed(speed, speedUnit) {
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

export {convertSpeed};
