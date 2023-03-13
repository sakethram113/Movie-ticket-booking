const container = document.querySelector('.container')
const seats = document.querySelectorAll('.seat')
const movieSelect = document.getElementById('movie')
const count = document.getElementById('count')
const total = document.getElementById('total')

let ticketPrice = +movieSelect.value;
//save selected movie index
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

}

movieSelect.addEventListener('change', e =>{
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

container.addEventListener('click', e =>{
    if(e.target.classList.contains('seat') && 
    !e.target.classList.contains('occupied'))
    {
        e.target.classList.toggle('selected');
    
    updateSelectedCount();
    }

});