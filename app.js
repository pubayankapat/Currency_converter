// exchangerate-api
// api key: 07e92174f137e6ad6a59ae0f

// flag api: https://flagsapi.com/:country_code/:style/:size.png


let promise = fetch('https://v6.exchangerate-api.com/v6/07e92174f137e6ad6a59ae0f/latest/USD')
  .then(res => res.json())
  .then(data => {
    console.log(`1 USD = ${data.conversion_rates.EUR} EUR`);
  });

// console.log(promise);

const dropdowns = document.querySelectorAll(".dropdown select");

for (let select of dropdowns) {
  for (code in countryList) {
    let option = document.createElement("option");
    option.innerText = code;
    option.value = code;
    if(select.name === "from" && code === "USD"){
      option.selected = "selected";
    }else if(select.name === "to" && code === "INR"){
        option.selected = "selected";
    }
    select.append(option);
  }
}

const updateFlag = () => {

}