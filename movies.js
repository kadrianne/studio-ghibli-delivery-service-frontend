fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(movies => addMovies(movies))


function addMovies(movies){
    const moviesList = document.querySelector('.movies-list')

    movies.forEach(movie => {
        const movieCard = document.createElement('li')

        movieCard.innerHTML = `<img src='${movie.image}' alt='${movie.title}'>`
        moviesList.append(movieCard)
    })
} 


