const form = document.getElementById('searchQueryForm');
const searchQuery = document.getElementById('musicInput');

form.addEventListener('submit', function (e) {

    // prevents refreshing of page
    e.preventDefault();

    const searchQueryValue = searchQuery.value.toLowerCase();

    localStorage.setItem('query', searchQueryValue);

    const redirectURL = 'http://localhost:5500/frontend/pages/home.html';
    window.location.replace(redirectURL);
})