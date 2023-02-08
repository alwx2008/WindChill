function convertTemp(temp, tempUnit) {
  if (tempUnit.value == "F") {
    let F = temp.value;
    let C = ( 5 / 9 ) * ( temp.value - 32 );
    let K = ( 5 / 9 ) * ( temp.value - 32 ) + 273.16;
  } else if (tempUnit.value == "C") {
    let F = ( 9 / 5 ) * temp.value + 32;
    let C = temp.value;
    let K = temp.value + 273.16;
  } else if (tempUnit.value == "K") {
    let F = (( 9 / 5 ) * (temp.value - 273.15)) + 32;
    let C = temp.value - 273.16;
    let K = temp.value;
  }
  return F, C, K;
}

export {convertTemp};
