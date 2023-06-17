//Europe / Paris;
//Asia / Tokyo;
//Australia / Sydney;

function alertTimezone(event) {
  let franceElement = moment()
    .tz("Europe / Paris")
    .format("dddd, MMMM D, YYYY HH:mm A");
  let tokyoElement = moment()
    .tz("Asia / Tokyo")
    .format("dddd, MMMM D, YYYY HH:mm A");
  let sydneyElement = moment()
    .tz("Australia / Sydney")
    .format("dddd, MMMM D, YYYY HH:mm A");

  if (event.target.value === "france") {
    alert(`It is ${franceElement} in Europe/Paris.`);
  }
  if (event.target.value === "tokyo") {
    alert(`It is ${tokyoElement} in Asia / Tokyo.`);
  }
  if (event.target.value === "sydney") {
    alert(`It is ${sydneyElement} in Australia / Sydney.`);
  }
}

let countriesSelect = document.querySelector("#countries");
countriesSelect.addEventListener("change", alertTimezone);

// It is Saturday, October 8, 2023 2:51 PM in Europe/Paris
