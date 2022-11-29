const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');
const optionsList = document.querySelectorAll('.option')


selected.addEventListener('click', () => {
  optionsContainer.classList.toggle('active');
})

// adding event listener to all options in the collection remember querySelectorAll returns a nodelist (https://www.w3schools.com/jsref/met_document_queryselectorall.asp)

optionsList.forEach( o => {
  o.addEventListener('click', () => {
    selected.innerHTML = o.querySelector('label').innerHTML;
    optionsContainer.classList.remove('active');
  });
});