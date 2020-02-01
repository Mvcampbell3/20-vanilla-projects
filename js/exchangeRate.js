const base_url = `https://api.exchangerate-api.com/v4/latest/`

const currency_one =  document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');
const swap = document.getElementById('swap');
const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');

let rate;

const rate_holder = document.getElementById('rate');

function getExchangeRate() {
  fetch(base_url + currency_one.value)
    .then(response => response.json())
    .then(results => {
      rate = results.rates[currency_two.value];
      rate_holder.textContent = `Exchange Rage is ${rate}`
      displayAmountsAmountOne()
    })
}

function displayAmountsAmountOne() {
  amount_two.value = (amount_one.value * rate).toFixed(2);
}

function displayAmountsAmountTwo() {
  amount_one.value = (amount_two.value / rate.toFixed(2));
}

function swapCurrencies() {
  const storedValue = currency_one.value;
  currency_one.value = currency_two.value;
  currency_two.value = storedValue;
  const storedAmount = amount_two.value;
  amount_two.value = amount_one.value;
  amount_one.value = storedAmount;
  getExchangeRate()
}

amount_one.addEventListener('input', displayAmountsAmountOne)
amount_two.addEventListener('input', displayAmountsAmountTwo)

currency_one.addEventListener('change', getExchangeRate)
currency_two.addEventListener('change', getExchangeRate)

swap.addEventListener('click', swapCurrencies)

getExchangeRate()