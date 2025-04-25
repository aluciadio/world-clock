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
