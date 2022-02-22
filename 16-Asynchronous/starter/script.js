'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////

// console.log('%c Exercise 1', 'color: red; font-size: 20px;');

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(` ${errorMsg} ${response.status}`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Something went wrong')
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error('No neighbour');

//       return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'County not found');
//     })
//     .then(data => {
//       renderCountry(data, 'neighbour');
//     })
//     .catch(err => {
//       renderError(`Something went wrong ${err.message}`);
//     })
//     .finally(() => {
//       btn.disabled = false;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('Australia');
// });

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentHTML('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country code not found ${response.status}`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(res => res.json())
//     .then(data => {
//       renderCountry(data, 'neighbour');
//     })
//     .catch(err => {
//       renderError(`Something went wrong ${err.message}`);
//     })
//     .finally(() => {
//       btn.disabled = false;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('adadda');
// });

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentHTML('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const renderCountry = function (data, className = '') {
//   const html = `
//    <article class="country ${className}">
//            <img class="country__img" src='${data.flag}' />
//            <div class="country__data">
//              <h3 class="country__name">${data.name}</h3>
//              <h4 class="country__region">${data.region}</h4>
//              <p class="country__row"><span>👫</span>${(
//                data.population / 1000000
//              ).toFixed(1)}M People</p>
//              <p class="country__row"><span>🎤</span>${
//                data.languages[0].name
//              }</p>
//              <p class="country__row"><span>💰</span>${
//                data.currencies[0].name
//              }</p>
//            </div>
//          </article>
//   `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   // AJAX Call
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     // Render country 1
//     renderCountry(data);
//     //  get neighbour 2

//     const [neighbour] = data.borders;
//     if (!neighbour) return;

//     // AJAX Call
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('Finland');

// Challenge #2


Promise.allSettled([
  Promise.reject('Not succedded'),
  Promise.resolve('Success3'),
  Promise.resolve('Success1'),
  Promise.resolve('Success2'),
]).then(res => console.log(res)).catch(err => console.log(err));