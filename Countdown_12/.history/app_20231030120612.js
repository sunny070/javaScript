const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const giveaway = document.querySelector('.giveaway')
  const deadline = document.querySelector('.deadline')
  const items = document.querySelectorAll('.deadline-format h4')
// console.log(items); //yyyy:mm:date:hr:min:sec:mili
let futureDate = new Date(2023, 9, 31, 11, 30, 0);
// console.log(futureDate);
const year =futureDate.getFullYear();
const hours =futureDate.getHours();
const minutes =futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekday =weekdays[futureDate.getDay()];


giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year}, ${hours}:${minutes}am `

// future time in ms
const 