// exchangerate-api
// api key: 07e92174f137e6ad6a59ae0f

// flag api: https://flagsapi.com/:country_code/:style/:size.png


const dropdown = document.querySelectorAll("")

let promise = fetch('https://v6.exchangerate-api.com/v6/07e92174f137e6ad6a59ae0f/latest/USD')
  .then(res => res.json())
  .then(data => {
    console.log(`1 USD = ${data.conversion_rates.EUR} EUR`);
  });

// console.log(promise);
