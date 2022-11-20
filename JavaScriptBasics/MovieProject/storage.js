function Storage(){

}
Storage.prototype.addMovieToStorage = function(newFilm){
    let movies = this.getMoviesFromStorrage()
    movies.push(newFilm)
    localStorage.setItem("movies",JSON.stringify(movies))
}
Storage.prototype.getMoviesFromStorrage = function()
{
    let movies;
    if(localStorage.getItem("movies") === null){
        movies = [];
    }
    else {
        movies = JSON.parse(localStorage.getItem("movies"))
    }
    return movies

}
Storage.prototype.deleteMoviesFromStorage = function(target){
    let movies = this.getMoviesFromStorrage();
    movies.forEach(function(movie,index){
        if(movie.movieName === target){
            movies.splice(index,1)
        }
    });
    localStorage.setItem("movies",JSON.stringify(movies))
}