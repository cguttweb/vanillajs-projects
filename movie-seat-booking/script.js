const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row.seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

// using + sets as typeof number could also wrap in parseInt()
let ticketPrice = +movieSelect.value

function updateSelectedCount(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected')

  const selectedSeatsCount = selectedSeats.length
  console.log(selectedSeatsCount)
  count.innerText = selectedSeatsCount
  total.innerText = selectedSeatsCount * ticketPrice
}

// Movie select
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value
  updateSelectedCount()
})

// seat clicks
container.addEventListener('click', e => {

  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
      e.target.classList.toggle('selected')
      updateSelectedCount()
  }
})

