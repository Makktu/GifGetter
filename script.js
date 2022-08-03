'use strict';

function getCatGif(searchTerm) {
    console.log(searchTerm);
    msgArea.innerHTML = `<p>"${searchTerm}"</p>`;

    fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=cMKYPrx6cw6fB9UYB4vjPH4mCT5AgXFo&s=${searchTerm}`,
        { mode: 'cors' }
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            img.src = response.data.images.original.url;
        })
        .catch(function (error) {
            console.log('nothing found for', searchTerm);
            getCatGif('error');
        });
}

let searchTerm = 'cats';

const msgArea = document.querySelector('.messages');

const img = document.querySelector('img');

const search = document.getElementById('search');

const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', () => {
    if (!search.value) return;
    searchTerm = search.value;
    search.value = '';
    getCatGif(searchTerm);
});

const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', () => {
    getCatGif(searchTerm);
});

getCatGif(searchTerm);

// https://api.openweathermap.org/data/2.5/weather?lat=52.4128&lon=1.5090&appid=7ac5deb61b3a4bf48a75d86f3f69909b

// 'https://api.giphy.com/v1/gifs/translate?api_key=cMKYPrx6cw6fB9UYB4vjPH4mCT5AgXFo&s=cats'
