const dropdown = document.querySelector('.dropdown');
const dropdownButton = dropdown.querySelector('.dropdown__button');

dropdownButton.addEventListener('click', dropdownButtonClickHandler);

function dropdownButtonClickHandler() {
  if (dropdown.classList.contains('dropdown--shown')) {
    dropdown.classList.remove('dropdown--shown');
    document.removeEventListener('click', documentClickHandler);
    document.removeEventListener('keydown', documentKeydownHandler);
  } else {
    dropdown.classList.add('dropdown--shown');
    document.addEventListener('click', documentClickHandler);
    document.addEventListener('keydown', documentKeydownHandler);
  }
}

function documentClickHandler(evt) {
  if (!evt.target.closest('.dropdown')) {
    dropdown.classList.remove('dropdown--shown');
    document.removeEventListener('click', documentClickHandler);
    document.removeEventListener('keydown', documentKeydownHandler);
  }
}

function documentKeydownHandler(evt) {
  if (evt.key === 'Escape') {
    dropdown.classList.remove('dropdown--shown');
    document.removeEventListener('click', documentClickHandler);
    document.removeEventListener('keydown', documentKeydownHandler);
  }
}
