import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

import data from '../DATA.json';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

// eslint-disable-next-line no-shadow
const daftarResto = (data) => {
  const restElement = document.querySelector('#findResto');
  restElement.innerHTML = '';
  data.forEach((resto) => {
    const {
      name, description, pictureId, city, rating,
    } = resto;
    const findResto = document.createElement('div');

    findResto.innerHTML = `
      <article class="post-item">
        <img class="post-item__thumbnail"
            src="${pictureId}" alt="${name}">
        <div class="post-item__content">
          <h1 class="post-item__title"><a href="#">${name}</a></h1>
          <span " class="post-item__rating fa fa-star checked"> ${rating}</span>
          <h2 class="post-item__city">${city}</h2>
          <p class="post-item__description">${description}</p>
        </div>
      </article>`;

    restElement.appendChild(findResto);
  });
};
daftarResto(data.restaurants);

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', () => {
  drawer.classList.remove('open');
});

main.addEventListener('click', () => {
  drawer.classList.remove('open');
});
