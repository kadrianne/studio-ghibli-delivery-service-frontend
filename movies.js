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
    
    movieCard.innerHTML = `<img src='${movie.image}' alt='${movie.title}'>`
    addToWatchList(movie, movieCard);
    addToWatchedMovies(movie, movieCard);
    
    moviesList.append(movieCard)
}


// Need to pass in users!!
function addToWatchList(movie, movieCard){
    movieCard.innerHTML += `<form action='http://localhost:3000/unwatched_movies?user_id=1&movie_id=${movie.id}' method='POST'>
        <input type="submit" value="Add to Watch List">
    </form>`
}

function addToWatchedMovies(movie, movieCard){
    movieCard.innerHTML += `<form action='http://localhost:3000/watched_movies?user_id=1&movie_id=${movie.id}' method='POST'>
        <input type="submit" value="I've watched this!">
    </form>`
}