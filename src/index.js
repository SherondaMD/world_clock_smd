function showSelectedCity(event) {
  if (event.target.value.length > 0) {
    let currentCity = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY h:mm A");

    alert(`It is ${currentCity} in ${event.target.value}.`);
  }
}

let citySelect = document.querySelector("#city");

citySelect.addEventListener("change", showSelectedCity);

//Create an HTML file with a select listing 3 different cities (Paris 🇫🇷, Tokyo 🇯🇵,  Sydney 🇦🇺)
//and whenever a user selects one city, alert the
//current date and time of the selected city such as :
//"It is Saturday, October 8, 2023 2:51 PM in Europe/Paris"
