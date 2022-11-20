function UI(){

}
UI.prototype.addMovieToUi = function(movie){



// <!-- <div class="movie-cardd">
// <img src="https://cdn.discordapp.com/attachments/1040963919285592214/1042584009496088706/indir_1.jpg" alt="">
// <p style="font-size: 0.8vw;">    The Godfather | IMDB - 9.4</p>
// </div>
const filmList = document.querySelector('.movie-list-container')

filmList.innerHTML += `
 <div class="movie-cardd">
 <img src="${movie.movieBanner}" alt="">
 <p style="font-size: 0.8vw;">${movie.movieName} | Imdb: ${movie.imdbRate}</p>
 </div>

`;
}
UI.prototype.clearInputs = function (element1,element2,element3,element4,element5,element6,element7,element8,element9){
    element1.value =  "";
    element2.value = "";
    element3.value = "";
    element4.value = "";
    element5.value = "";
    element6.value = "";
    element7.value = "";
    element8.value = "";
    element9.value = "";
}
UI.prototype.displayMessages = function(message,type){
    const cardBody = document.querySelector(".modal-content")
    const div = document.createElement("div")
    div.className = `alert alert-${type}`
    div.textContent = message;

    cardBody.appendChild(div);
    
    setTimeout(function(){
        div.remove();
    },1000)
}
UI.prototype.loadAllMovies = function(movies){
    const filmList = document.querySelector('.movie-list-container')
  movies.forEach(function(movie){
    filmList.innerHTML += `
    <div class="movie-cardd">
    <img src="${movie.movieBanner}" alt="">
    <p style="font-size: 0.8vw;">${movie.movieName} | Imdb: ${movie.imdbRate}</p>
    </div>
   
   `
  })
  

}
UI.prototype.setMainBackground = function(movie){

    $('.featured-movie').css("background-image","linear-gradient(to left bottom,rgba(155, 146, 197, 0.322), rgba(56, 71, 56, 0.7)), url("+movie.movieBigBanner+")")
    $('.featured-movie-header').text(movie.movieName)
    $('.featured-movie-description').text(movie.movieDescription)
    $('.featured-movie-director').text("Directors"+": "+movie.directors)
    $('.featured-movie-stars').text("Starts" + " :"+movie.stars)
    $('.featured-movie-imdb').text("IMDB:"+movie.imdbRate + " " )
    $('.featured-movie-rotten').text("Rotten Tomatoes"+""+movie.rottenRate)
    $('.preview-featured-movie').attr("href",movie.previewLink);  

}
UI.prototype.deleteMovieFromUi = function(target){
target.parentElement.parentElement.remove();
}