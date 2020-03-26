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
    const moviesLink = document.createElement('a')
    
    title.innerText = movie.title
    videoContainer.className = 'trailer'
    videoContainer.innerHTML = movie.trailer
    moviesLink.innerHTML = `<p><a href='movies.html?user_id=${userID}'>Back to Movies</a></p>`

    main.append(title,videoContainer,moviesLink)
}