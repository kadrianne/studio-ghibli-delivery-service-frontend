fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(movies => addMovies(movies))


function addMovies(movies){
    const moviesList = document.querySelector('.movies-list')

    movies.forEach(movie => {
        createCard(movie, moviesList)
    })


}

function createCard(movie, moviesList){
    const movieCard = document.createElement('li')
    
    movieCard.className = 'movie-card'
    movieCard.innerHTML = `
    <img src='${movie.image}' alt='${movie.title}'>
    <section class='movie-info'>
        <p class='movie-title'>${movie.title}</p>
        <p class='movie-release'>${movie.release_date}</p>
        <p class='movie-director'>Director: ${movie.director}</p>
        <p class='movie-description'>${movie.summary}</p>
    </section>`

    const movieInfo = movieCard.querySelector('.movie-info')

    addToWatchList(movie, movieInfo);
    addToWatchedMovies(movie, movieInfo);
    
    moviesList.append(movieCard)
}


// Need to pass in users!!
const searchParams = new URLSearchParams(window.location.search)
const user_id = searchParams.get('user_id')

function addToWatchList(movie, movieInfo){
    movieInfo.innerHTML += `<form action='http://localhost:3000/unwatched_movies?user_id=${user_id}&movie_id=${movie.id}' method='POST'>
        <input type="submit" value="Add to Watch List">
    </form>`
}

function addToWatchedMovies(movie, movieInfo){
    movieInfo.innerHTML += `<form action='http://localhost:3000/watched_movies?user_id=${user_id}&movie_id=${movie.id}' method='POST'>
        <input type="submit" value="I've watched this!">
    </form>`
}
