'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
/* 

// /////////////////////////////////////////////////////////////////////
const renderCountry = (data, className = '') => {
  const html = `
    <article class="country${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} </p>
            <p class="country__row"><span>🗣️</span>${data.languages[0]}</p>
            <p class="country__row"><span>💰</span>${data.currencies}</p>
          </div>
        </article>
      
`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);  
    renderCountry(data);

    // GEt neibour country

    // Assuming `data.borders` is an array of country codes
    const neibour = data.borders;

    if (!neibour || neibour.length === 0) return;

    // Join the array elements into a comma-separated string
    const codesString = neibour.join(',');

    // Construct the URL dynamically
    const url = `https://restcountries.com/v3.1/alpha/${codesString}`;

    // Create a new XMLHttpRequest
    const request2 = new XMLHttpRequest();
    request2.open('GET', url);
    request2.send();

    // Add an event listener to handle the response
    request2.addEventListener('load', function () {
      if (request2.status >= 200 && request2.status < 300) {
        const data = JSON.parse(this.responseText);
        // Call the function to render the country data
        renderCountry(data, 'neighbour');
      } else {
        console.error('Failed to fetch data:', request2.statusText);
      }
    });
  });
};
getCountryData('usa');
getCountryData('nigeria');
getCountryData('peru');
getCountryData('burkina');
getCountryData('ru');
*/

//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

const request = fetch(`https://restcountries.com/v3.1/name/nigeria`);
console.log(request);

