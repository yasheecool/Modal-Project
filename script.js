'use strict';

//on clicking the btns -> modal gets displayed -> overlay gets displayed -> click X or outside the window or ESC key to close the window

const btns = document.querySelectorAll('.show-modal'); // BUTTONS
const modal = document.querySelector('.modal'); // MODAL
const closeBtn = document.querySelector('.close-modal'); // CLOSE BTN
const overlay = document.querySelector('.overlay'); //OVERLAY
const hiddenClass = document.querySelector('.hidden');

//ADDING EVENT LISTENER TO BUTTONS
btns.forEach(btn => {
  btn.addEventListener('click', showModal);
});

function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function hideModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

closeBtn.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') hideModal();
});
