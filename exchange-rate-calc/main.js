const currencyEl_one = document.getElementById('currency-one')
const amountOne = document.getElementById('amount-one')
const currencyEl_two = document.getElementById('currency-two')
const amountTwo = document.getElementById('amount-two')

const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')

// const apiKey = '65db746aa152edeb0cd52b32'

// Gett rates and update DOM
function calculate() {
  const currency_one = currencyEl_one.value
  const currency_two = currencyEl_two.value

  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency_one}`

  fetch(url).then(resp => resp.json())
  .then(data => {

    const rate = data.conversion_rates[currency_two]

    rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`
  })
}

// Event Listeners
currencyEl_one.addEventListener('change', calculate)
amountOne.addEventListener('input', calculate)
currencyEl_two.addEventListener('change', calculate)
amountTwo.addEventListener('input', calculate)

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value
  currencyEl_one.value = currencyEl_two.value
  currencyEl_two.value = temp
  calculate()
})

calculate()