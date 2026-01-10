// Fetches external API from backend server
fetch("http://localhost:3000/api/musicData")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const musicDiv = document.getElementById("musicDiv");
        let musicData = data;
        musicData.map((music) => {
            let container = document.createElement("div");
            let artistName = document.createElement("h3");
            let genre = document.createElement("p");
            let releaseYear = document.createElement("p");
            let albumCover = document.createElement("img");
            let lineBreak = document.createElement("br");

            albumCover.src = music.cover_image;
            artistName.textContent = music.title;
            albumCover.alt = `Image of ${music.title}`;
            albumCover.style.height = '300px';
            albumCover.style.width = '300px';

            genre.textContent = music.genre;
            releaseYear.textContent = music.year;



            container.appendChild(albumCover);
            container.appendChild(artistName);
            container.appendChild(genre);
            container.appendChild(releaseYear);
            container.appendChild(lineBreak);
            musicDiv.appendChild(container);
        });
    })
    .catch(err => {
        console.log(err.message);
        const musicDiv = document.getElementById("musicDiv");
        let warning = document.createElement("h3");
        warning.textContent = "An error has occured while displaying music data.";
        musicDiv.appendChild(warning);
    })