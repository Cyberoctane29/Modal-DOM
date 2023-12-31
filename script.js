'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal'); //returns a node list
const closeModal = document.querySelector('.close-modal');

// console.log(showModal);

const hide = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const showIt = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  //   console.log(showModal[i].textContent);
  //showModal[i].textContent is written as showModal = document.querySelectorAll('.show-modal') hence its basically document.querySelectorAll('.show-modal').textContent;

  // showModal[i].addEventListener('click', function () {
  //   console.log('Button clicked!');
  //   modal.classList.remove('hidden');
  //   overlay.classList.remove('hidden');
  // });
  showModal[i].addEventListener('click', showIt);
  closeModal.addEventListener('click', hide);
  overlay.addEventListener('click', hide);

  //we dont write
  // overlay.addEventListener('click', hide());
  // as this will make js call the function once we reach the line but we want it to be called when we click

  // closeModal.addEventListener('click', function () {
  //   // modal.classList.add('hidden');
  //   // overlay.classList.add('hidden');
  // });

  // overlay.addEventListener('click', function () {
  //   // modal.classList.add('hidden');
  //   // overlay.classList.add('hidden');
  // });
}
