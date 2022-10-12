var CurrentDateEl = document.querySelector("#current-date");

CurrentDateEl.textContent = moment().format('dddd MMMM Do YYYY');