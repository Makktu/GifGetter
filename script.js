'use strict';

async function getCatGif(searchTerm) {
    msgArea.innerHTML = `<p>"${searchTerm}"</p>`;
    getLinkBtn.innerText = 'COPY LINK';

    try {
        const response = await fetch(
            `https://api.giphy.com/v1/gifs/translate?api_key=cMKYPrx6cw6fB9UYB4vjPH4mCT5AgXFo&s=${searchTerm}`,
            { mode: 'cors' }
        );
        const gifData = await response.json();
        thisImage = gifData.data.images.original.url;
        img.src = thisImage;
    } catch (error) {
        msgArea.innerHTML = `<p>${error}</p>`;
        img.src =
            'https://media4.giphy.com/media/xT9IgIc0lryrxvqVGM/giphy.gif?cid=f6fa26a6azn49z0iy7d5pd2wf84hgi348pn9wck0zwbcg6n9&rid=giphy.gif&ct=g';
    }

    // .catch(function (error) {
    //     console.log('nothing found for', searchTerm);
    //     getCatGif('error');
    // });
}

let searchTerm = 'cats';

let thisImage;

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

const getLinkBtn = document.getElementById('get-link');

getLinkBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(thisImage);
    getLinkBtn.innerText = '👍 COPIED!';
    getLinkBtn.style = 'background-color: cyan;transition: 2s ease';
});

getCatGif(searchTerm);

// https://api.openweathermap.org/data/2.5/weather?lat=52.4128&lon=1.5090&appid=7ac5deb61b3a4bf48a75d86f3f69909b

// 'https://api.giphy.com/v1/gifs/translate?api_key=cMKYPrx6cw6fB9UYB4vjPH4mCT5AgXFo&s=cats'
