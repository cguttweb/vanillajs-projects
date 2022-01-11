const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

populateUI()

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

function populateUI(){
  // convert back to an array with JSON.parse
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
  
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected')
      }
    })
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex
  }
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

updateSelectedCount()