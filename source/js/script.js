import { togglerTemplate } from './templates.js';
import { createElement } from './util.js';
import './carousel.js';
import './filter.js';
import './dropdown.js';
import { initMap } from './map.js';

if (window.screen.width < 768) {
  const userNavigation = document.querySelector('.js-user-navs');
  const pagesNavigation = document.querySelector('.navigation__list--pages');
  const toggler = createElement(togglerTemplate);

  userNavigation.append(toggler);
  pagesNavigation.classList.add('navigation__list--hidden');

  toggler.children[0].addEventListener('click', (evt) => {
    if (pagesNavigation.classList.contains('navigation__list--hidden')) {
      pagesNavigation.classList.remove('navigation__list--hidden')
      evt.target.setAttribute('aria-label', 'Скрыть меню');
      evt.target.children[0].children[0].setAttribute('xlink:href', '/img/icons/stack.svg#close');
    } else {
      pagesNavigation.classList.add('navigation__list--hidden')
      evt.target.setAttribute('aria-label', 'Показать меню');
      evt.target.children[0].children[0].setAttribute('xlink:href', '/img/icons/stack.svg#menu');
    }
  });
}

initMap(18);
