const searchParams = new URLSearchParams(window.location.search)
const movieID = searchParams.get('movie_id')
const userID = searchParams.get('user_id')

fetch(`http://localhost:3000/movies/${movieID}`)
    .then(response => response.json())
    .then(movie => showInfo(movie))

function showInfo(movie) {
    const main = document.querySelector('main')
    const title = document.createElement('h2')
    const videoContainer = document.createElement('section')
    const buttons = document.createElement('section')
    const moviesLink = document.createElement('a')
    
    title.innerText = movie.title
    videoContainer.className = 'trailer'
    videoContainer.innerHTML = movie.trailer
    buttons.className = 'button-container'
    moviesLink.innerHTML = `<p><a href='movies.html?user_id=${userID}'>Back to Movies</a></p>`

    addToWatchList(movie,buttons)
    addToWatchedMovies(movie,buttons)

    main.append(title,videoContainer,buttons,moviesLink)
}

function addToWatchList(movie, buttons){
    const unwatchedButton = document.createElement('form')

    unwatchedButton.action = `http://localhost:3000/unwatched_movies?user_id=${userID}&movie_id=${movie.id}`
    unwatchedButton.method = 'POST'
    unwatchedButton.innerHTML = `<input type="submit" value="Add to Watch List">`

    buttons.append(unwatchedButton)
}

function addToWatchedMovies(movie,buttons){
    const watchedButton = document.createElement('form')

    watchedButton.action = `http://localhost:3000/watched_movies?user_id=${userID}&movie_id=${movie.id}`
    watchedButton.method = 'POST'
    watchedButton.innerHTML = `<input type="submit" value="I've watched this!">`

    buttons.append(watchedButton)
}