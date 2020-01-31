const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

function updateSelectedCount() {
  const seletedSeats = document.querySelectorAll('.row .seat.selected');
  count.textContent = seletedSeats.length;
  total.textContent = seletedSeats.length * ticketPrice;

  const seatsIndex = [...seletedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  console.log(seatsIndex);
}

// Save Selected Movie Index and Price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

function populateData() {
  const movieIndex = localStorage.getItem('selectedMovieIndex');
  const moviePrice = localStorage.getItem('selectedMoviePrice');
  const selectedSeatsIndex = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeatsIndex !== null && selectedSeatsIndex.length > 0) {
    selectedSeatsIndex.forEach(seat => [...seats][seat].classList.add('selected'))
  }

  if (movieIndex !== null) {
    movieSelect.selectedIndex = movieIndex;
  }

  if (moviePrice !== null) {
    ticketPrice = +moviePrice;
  }

  updateSelectedCount()
}

// Movie Select Event Listener
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount()
})

// Seat Selection Event Listener
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
})

populateData()