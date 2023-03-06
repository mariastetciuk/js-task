'use strict';

const countries = [
  {
    name: 'Ukraine',
    capital: 'Kyiv',
    population: '41 342 465',
    area: '603.628',
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    population: '47 450 795',
    area: '505.990',
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    population: '109 035 343',
    area: '300.000',
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    population: '31 127 674',
    area: '1.246.700',
  },
  {
    name: 'Gibraltar',
    capital: 'Gibraltar',
    population: '34 003',
    area: '6.8',
  },
];

const inputEl = document.querySelector('.search-input');
const outputEl = document.querySelector('.output-error');
const countryCard = document.querySelector('.country-card');

function createCardCountry({ name, capital, population, area } = {}) {
  return `
  <li class="country-card__item"><strong>Країна:</strong> ${name}</li>
  <li class="country-card__item"><strong>Столиця:</strong> ${capital}</li>
  <li class="country-card__item"><strong>Населення:</strong> ${population}</li>
  <li class="country-card__item"><strong>Площа:</strong> ${area}</li>
  `;
}

const onHadleEvent = event => {
  const searchQuery = event.target.value.toLowerCase().trim();

  if (!searchQuery) {
    outputEl.innerHTML = '';
    countryCard.innerHTML = '';
    return;
  }

  const foundCountry = countries.find(el => {
    return el.name.toLocaleLowerCase() === searchQuery;
  });

  if (!foundCountry) {
    countryCard.innerHTML = '';
    outputEl.textContent = `No such country was found`;
    return;
  }

  outputEl.innerHTML = '';

  countryCard.innerHTML = createCardCountry(foundCountry);
};
inputEl.addEventListener('input', onHadleEvent);
