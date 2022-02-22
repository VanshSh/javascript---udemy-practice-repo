'use strict';
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.overlay');
const modalCloseBtn = document.querySelector('.close-modal');
const modalShowBtn = document.querySelectorAll('.show-modal');

modalShowBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    modalAndOverlay('block');
  });
});

modalCloseBtn.addEventListener('click', () => {
  modalAndOverlay('none');
});

modalOverlay.addEventListener('click', () => {
  modalAndOverlay('none');
});

function modalAndOverlay(status) {
  modal.style.display = status;
  modalOverlay.style.display = status;
}
