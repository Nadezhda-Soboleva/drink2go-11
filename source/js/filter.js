const form = document.querySelector('.filter__form');
const slider = form.querySelector('#slider');
const minPrice = form.querySelector('[name="price_from"]');
const maxPrice = form.querySelector('[name="price_to"]');

noUiSlider.create(slider, {
  start: [0, 123],
  connect: true,
  step: 1,
  range: {
    'min': 0,
    'max': 150
  }
});

slider.noUiSlider.on('update', function (values) {
  minPrice.value = Math.floor(values[0]);
  maxPrice.value = Math.floor(values[1]);
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  console.log({
    price: {
      from: evt.target.price_from.value,
      to: evt.target.price_to.value,
    },
    milk: evt.target.milk.value,
    country: {
      ['Brazil']: evt.target.Brazil.checked,
      ['Ethiopia']: evt.target.Ethiopia.checked,
      ['Colombia']: evt.target.Colombia.checked,
      ['Costa-Rica']: evt.target['Costa-Rica'].checked,
    }
  });
});
