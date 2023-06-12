document.addEventListener("DOMContentLoaded", () => {

  //use ghibli api
  const url = "https://ghibliapi.herokuapp.com/films";
  const container = document.querySelector("#container");

  //fetch data from api
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //loop through data
      data.forEach((movie) => {
        //create card div
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        //create h1 element
        const h1 = document.createElement("h1");
        h1.textContent = movie.title;

        //create p element
        const p = document.createElement("p");
        movie.description = movie.description.substring(0, 300);
        p.textContent = `${movie.description}...`;

        //append card to container
        container.appendChild(card);

        //append h1 and p to card
        card.appendChild(h1);
        card.appendChild(p);
      });
    }
  );
  

  });
  