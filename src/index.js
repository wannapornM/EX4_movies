import './main.scss'
import moviesCollection from './movies.json'

document.addEventListener('DOMContentLoaded',function(){
    const moviesCategory = document.getElementById('moviesCategory')
    const movies = moviesCollection

    movies.forEach(movie => {
        const movieDom = buildMovieDOM(movie)
        moviesCategory.insertAdjacentHTML('beforeend',movieDom)
    })
})

function buildMovieDOM(movie){
    let t = movie.tomatoScore
    let iconURL = ``

    if (t < 60) {
        iconURL = `https://staticv2-4.rottentomatoes.com/static/images/icons/splat-16.png`
    }
    else if (t < 81) {
        iconURL = `https://staticv2-4.rottentomatoes.com/static/images/icons/CF_16x16.png`
    }
    else {
        iconURL = `https://staticv2-4.rottentomatoes.com/static/images/icons/fresh-16.png`
    }

    return  `<div class="movie">
                <img class="movie-poster" src="${movie.posters.primary}">
                <div class="movie-title">${movie.title}</div>
                <div class="icon-score">
                    <img class="icon-rate" src="${iconURL}">
                    <div class="percent-rate">${movie.tomatoScore}%</div>
                </div>
                <div class="release-date">Available ${movie.theaterReleaseDate}</div>
            </div>`
}