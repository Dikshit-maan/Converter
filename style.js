const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

const dropdowns = document.querySelectorAll(".dropdown select");

for (code in CountryList){
    console.log(code);
}



// for(let select of dropdowns){
//     for ( currCode in countryList){
//         let newOption = document.createElement("option");
//         newOption.innerText = currCode;
//         newOption.value = currOption;
//         select.append("newOption");
//     }
// }


// const BASE_URL =
// "https://cdn.jsdelivr.net/gh/fawazahmedo/currency-api@1/latest/currencies/usd/inr.json"
// const dropdowns = document.querySelectorAll(".dropdown select");
// for (let select of dropdowns) {
// for (currCode in countryList) {
// let newOption = document.createElement("option");
// newOption.innerText = currCode;
// newOption.value = currCode;
// if (select.name === "from" && currCode === "USD") {
// newOption.selected = "selected";
// }
// select.append(newOption);
// }
// }