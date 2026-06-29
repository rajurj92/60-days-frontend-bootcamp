function CelToFah(celcius) {
  return (celcius * 9) / 5 + 32;
}
function FahToCel(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function ConvertTemparature(temp, unit) {
  //   return FahToCel();
  //   return CelToFah(temp) + "F";
  if (unit == "C") {
    return CelToFah(temp) + "F";
  } else if (unit == "F") {
    return FahToCel(temp) + "C";
  } else {
    return "Invalid Unit, please enter C or F";
  }
}

console.log(ConvertTemparature(100, "C")); // "212F"
console.log(ConvertTemparature(32, "F")); // "0C"
console.log(ConvertTemparature(32, "A")); // "Error"
