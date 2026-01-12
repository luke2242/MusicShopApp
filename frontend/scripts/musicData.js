
// When the search button is pressed, the API is fetched
document.getElementById("musicSearch").addEventListener("click", async (e) => {
    e.preventDefault();

    await fetchMusicData();
})


// Fetches external API from backend server
async function fetchMusicData() {

    try {

        const musicSearch =  document.getElementById("musicInput").value.toLowerCase();

        const response = await fetch(`http://localhost:3000/api/musicData?q=${encodeURIComponent(musicSearch)}`);

        const musicData = await response.json();

        if (!response.ok) {
            throw new Error("Could not retrieve data from API");
        }

        const musicDiv = document.getElementById("musicDiv");
        musicDiv.innerHTML = '';

        musicData.map((music) => {

            // Renders the music data in html
            let container = document.createElement("div");
            let artistName = document.createElement("h3");
            let genre = document.createElement("p");
            let releaseYear = document.createElement("p");
            let albumCover = document.createElement("img");
            let lineBreak = document.createElement("br");
            let linkToDiscogs = document.createElement("a");


            linkToDiscogs.textContent = "View Here";
            linkToDiscogs.href = "https://www.discogs.com" + music.uri;
            linkToDiscogs.target = '_blank';
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
            container.appendChild(linkToDiscogs);
            container.appendChild(lineBreak);
            musicDiv.appendChild(container);
        });

    }
    catch (err) {
        console.log(err.message);
        const musicDiv = document.getElementById("musicDiv");
        let warning = document.createElement("h3");
        warning.textContent = "An error has occured while displaying music data.";
        musicDiv.appendChild(warning);
    }

}