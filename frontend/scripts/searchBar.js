function search(){

    const input = document.getElementById("musicInput");
    const yourSearches = document.getElementById("yourSearches");

            input.preventDefault();
            document.getElementById("musicSearch").click();
            let p = document.createElement('p');
            p.textContent = `${input.value}`;
            yourSearches.append(p);

            console.log(input.value);
}