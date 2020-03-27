const searchParams = new URLSearchParams(window.location.search)
const userID = searchParams.get('user_id')

fetch(`http://localhost:3000/users/${userID}`)
    .then(response => response.json())
    .then(user => profileLink(user))

function profileLink(user){
    const header = document.querySelector('header')
    const moviesLink = document.createElement('a')
    moviesLink.innerHTML = `<a href='profile.html?user_id=${userID}'>Go to ${user.user_name}'s Profile</a>`
    header.append(moviesLink)
}

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
    <img class="responsive" src='${movie.image}' alt='${movie.title}'>
    <section class='movie-info'>
        <p class='movie-title'>${movie.title}</p>
        <p class='movie-release'>${movie.release_date}</p>
        <p class='movie-director'>Director: ${movie.director}</p>
        <p class='movie-rating'>Rating: ${movie.rating}%</p>
        <p class='movie-description'>${movie.summary}</p>
    </section>`

    const movieInfo = movieCard.querySelector('.movie-info')

    watchTrailer(movie, movieInfo)
    checkMovieOnWatchList(movie, movieInfo)
    checkMovieOnWatchedMovies(movie, movieInfo)
    
    moviesList.append(movieCard)
}

function checkMovieOnWatchList(movie, movieInfo){
    fetch(`http://localhost:3000/unwatched_movies/`)
    .then(response => response.json())
    .then(unwatched_movies => {
        const movieOnList = unwatched_movies.find(toWatch => toWatch.user_id == userID && toWatch.movie_id == movie.id)

        if (movieOnList == undefined) {
            addToWatchList(movie, movieInfo)
        } else {
            movieInfo.innerHTML += `<button disabled>Added to Watch List</button>`
        }
    })
}

function addToWatchList(movie, movieInfo){
    movieInfo.innerHTML += `<form action='http://localhost:3000/unwatched_movies?user_id=${userID}&movie_id=${movie.id}' method='POST'>
        <input type="submit" value="Add to Watch List"></form>`
}

function checkMovieOnWatchedMovies(movie, movieInfo){
    fetch(`http://localhost:3000/watched_movies/`)
    .then(response => response.json())
    .then(watched_movies => {
        const movieOnList = watched_movies.find(watched => watched.user_id == userID && watched.movie_id == movie.id)

        if (movieOnList == undefined) {
            addToWatchedMovies(movie, movieInfo)
        } else {
            movieInfo.innerHTML += `<button disabled>Added to Watched Movies</button>`
        }
    })
}

function addToWatchedMovies(movie, movieInfo){
    movieInfo.innerHTML += `<form action='http://localhost:3000/watched_movies?user_id=${userID}&movie_id=${movie.id}' method='POST'>
        <input type="submit" value="I've watched this!"></form>`
    }

function watchTrailer(movie, movieInfo){
    movieInfo.innerHTML += `<button onclick="window.location='trailer.html?user_id=${userID}&movie_id=${movie.id}';">Watch Trailer</button>`
}

