let carsWrapper = document.querySelector(".wrapper");
const API = "https://www.omdbapi.com/?apikey=b6003d8a&s=All";
fetch(API)
  .then((data) => data.json())
  .then((data) => {
    data.Search.forEach((item) => {
      carsWrapper.innerHTML += `
      <div class = 'cards'  > 
      
      <img data-tooltip="эта подсказка длиннее, чем элемент" class='cards_img' src = ${item.Poster}>
      <h2> ${item.Title}</h2>
      <span> Year ${item.Year}</span>
      
      
      </div>
      `;
    });
  });
