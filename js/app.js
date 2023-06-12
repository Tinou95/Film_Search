document.addEventListener("DOMContentLoaded", () => {

  //use ghibli api
  const url = "https://ghibliapi.vercel.app/films";
    const container = document.querySelector(".container");
    const card = document.querySelector(".card");
    const title = document.querySelector("h1");
    const producer = document.querySelector("h2");
    const director = document.querySelector("h3");
    const release_date = document.querySelector("h4");
    const rt_score = document.querySelector("h5");
    const text = document.querySelector("p");
    const img = document.querySelector("img");
    const btn = document.querySelector("button");

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            data.forEach((movie) => {
                const clone = card.cloneNode(true);
                clone.querySelector("h1").textContent = movie.title;
                clone.querySelector("p").textContent = movie.description;
                clone.querySelector("img").src = movie.image;
                //producer
                clone.querySelector("h2").textContent = movie.producer;
                //director
                clone.querySelector("h3").textContent = movie.director;
                //release date
                clone.querySelector("h4").textContent = movie.release_date;
                //rt score
                clone.querySelector("h5").textContent = movie.rt_score;
                clone.querySelector("button").addEventListener("click", () => {
                    clone.classList.toggle("active");
                });
                container.appendChild(clone);
            });
        });

        //barre de recherche pour les films LIVE PAR TITRE, par date, producer, director, DE FILML
        const search = document.querySelector("input");
        search.addEventListener("keyup", (e) => {
            const searchValue = e.target.value.toLowerCase();
            const cards = document.querySelectorAll(".card");
            cards.forEach((card) => {
                const title = card.querySelector("h1").textContent.toLowerCase();
                const date = card.querySelector("h4").textContent.toLowerCase();
                const producer = card.querySelector("h2").textContent.toLowerCase();
                const director = card.querySelector("h3").textContent.toLowerCase();
                if (
                    title.includes(searchValue) ||
                    date.includes(searchValue) ||
                    producer.includes(searchValue) ||
                    director.includes(searchValue)
                ) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });




  });
  