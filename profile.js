const searchParams = new URLSearchParams(window.location.search)
const userID = searchParams.get('user_id')

fetch(`http://localhost:3000/users/${userID}`)
    .then(response => response.json())
    .then(user => displayProfile(user))

function displayProfile(user){
    const header = document.querySelector('header')
    const h2 = document.createElement('h2')
    h2.innerText = `${user.user_name}'s Profile`
    header.append(h2)
    
    const moviesLink = document.createElement('a')
    moviesLink.innerHTML = `<a href='movies.html?user_id=${userID}'>Back to Movies</a>`
    header.append(moviesLink)
    
    getWatchList()
    getWatchedMovies()
}
    
function getWatchList(){
        fetch(`http://localhost:3000/unwatched_movies/`)
        .then(response => response.json())
        .then(unwatched_movies => showWatchList(unwatched_movies))
    }
    
function showWatchList(unwatched_movies){
    const main = document.querySelector('main')
    const watchList = document.createElement('ul')
    watchList.innerHTML = '<h3>My Watch List</h3>'
    
    const userMovies = unwatched_movies.filter(toWatch => toWatch.user_id == userID)

    if (userMovies.length == 0) {
        const message = document.createElement('p')
        message.innerText = "No movies added to this list yet!"
        watchList.append(message)
    } else {
        userMovies.forEach(movie => {
            const movieItem = document.createElement('li')
            movieItem.innerHTML = `<img src='${movie.movie.image}'>`
            watchList.append(movieItem)
        })
    }
    main.append(watchList)
}

function getWatchedMovies(){
    fetch(`http://localhost:3000/watched_movies/`)
    .then(response => response.json())
    .then(watched_movies => showWatchedMovies(watched_movies))
}

function showWatchedMovies(watched_movies){
    const main = document.querySelector('main')
    const watchedMovies = document.createElement('ul')
    watchedMovies.innerHTML = '<h3>Movies I\'ve Watched</h3>'
    
    const userMovies = watched_movies.filter(watched => watched.user_id == userID)
    
    if (userMovies.length == 0) {
        const message = document.createElement('p')
        message.innerText = "No movies added to this list yet!"
        watchedMovies.append(message)
    } else {
        userMovies.forEach(movie => {
            const movieItem = document.createElement('li')
            movieItem.innerHTML = `<img src='${movie.movie.image}'>`
            watchedMovies.append(movieItem)

 all_movies


            // removeWatchedMovie(movie, movieItem)

        })
    }
 master
    main.append(watchedMovies)
}

// function removeWatchedMovie(movie, movieItem){
//     movieItem.innerHTML += `<button type="submit" class="remove-button">Remove from Movies I've watched</button>`
//     const removeButton = document.querySelector(".remove-button")
//     removeButton.addEventListener('submit', function (event) {
//     fetch(`http://localhost:3000/watched_movies?user_id=${userID}&movie_id=${movie.id}`, method: 'DELETE')
//         .then(response => response.json())
//     })
// }