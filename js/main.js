var hambunguerButton = document.querySelector('.button__hamburguer');
var hamburguerMenu = document.querySelector('.hamburguer__menu');

hambunguerButton.addEventListener('click', () => {
  hamburguerMenu.classList.toggle('active');
});