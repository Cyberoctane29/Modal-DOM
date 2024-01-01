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
  document.addEventListener('keydown', function (e) {
    // console.log(e);
    //or
    // console.log(e.key);

    //     So our handler function is waiting for that event to happen.

    // And anytime that an event like this occurs

    // JavaScript does in fact generate an object.

    // And that object contains all the information

    // about the event itself,

    // and we can then actually access that

    // object inside event handler function.

    // if (e.key === 'Escape') {
    //   if (!modal.classList.contains('hidden')) {
    //     hide();
    //   }
    // }

    //or

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      //&& !modal.classList.contains('hidden') is wrritten so that there would be no unexpected behaviour if hidden is already not there and the modals arent open but the escape key has been pressed
      //
      {
        hide();
      }
    }
  });
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
