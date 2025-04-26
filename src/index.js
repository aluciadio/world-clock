function updateTime() {
  lisbonElement = document.querySelector("#lisbon");
  lisbonTime = lisbonElement.querySelector(".time");
  lisbonDate = lisbonElement.querySelector(".date");
  lisbonCurrentTime = moment().tz("Europe/Lisbon");

  lisbonDate.innerHTML = lisbonCurrentTime.format("MMM Do YYYY");
  lisbonTime.innerHTML = `${lisbonCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  parisElement = document.querySelector("#paris");
  parisTime = parisElement.querySelector(".time");
  parisDate = parisElement.querySelector(".date");
  parisCurrentTime = moment().tz("Europe/Paris");

  parisDate.innerHTML = parisCurrentTime.format("MMM Do YYYY");
  parisTime.innerHTML = `${parisCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}

updateTime;

setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <small class="date">${cityTime.format("MMM Do YYYY")}</small>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div></div>
        </div>
        <a href="/">All cities </a>`;
}

citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
