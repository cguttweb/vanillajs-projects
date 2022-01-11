const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

// using + sets as typeof number could also wrap in parseInt()
let ticketPrice = +movieSelect.value

function saveMovieData(movieIndex, moviePrice){
  localStorage.setItem('selectedMovieIndex', movieIndex)
  localStorage.setItem('selectedMoviePrice', moviePrice)
}

function updateSelectedCount(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected')

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat))

  // as array seatsIndex needs wrapping in JSON stringify
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))

  const selectedSeatsCount = selectedSeats.length

  count.innerText = selectedSeatsCount
  total.innerText = selectedSeatsCount * ticketPrice
}

// Movie select
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value
  updateSelectedCount()
  saveMovieData(e.target.selectedIndex, e.target.value)
})

// seat clicks
container.addEventListener('click', e => {

  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
      e.target.classList.toggle('selected')
      updateSelectedCount()
  }
})

