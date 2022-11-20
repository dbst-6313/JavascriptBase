$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  
  });
  
const form = document.getElementById("formSubmit");
const movieNameInput = document.getElementById("movieName")
const movieDescriptionInput = document.getElementById("movieDesc")
const movieBannerInput = document.getElementById("movieBanner")
const movieBigBannerInput = document.getElementById("movieBigBanner")
const imdbRateInput = document.getElementById("imdbRate")
const rottenRateInput = document.getElementById("rottenRate")
const previewLinkInput = document.getElementById("trailerLink")
const directorsInput = document.getElementById("directors")
const starsInput = document.getElementById("stars")

const ui = new UI();
const storage = new Storage();
eventListeners();

function eventListeners(){
    form.addEventListener("click",addMovie)
    document.addEventListener("DOMContentLoaded",function(){
        let featuredMovie = storage.getMoviesFromStorrage().slice(-1)[0];
      ui.setMainBackground(featuredMovie)

      let movies = storage.getMoviesFromStorrage();
       ui.loadAllMovies(movies);
       

    });
}
function isURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ 
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ 
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
  '(\\#[-a-z\\d_]*)?$','i'); 
  return pattern.test(str);
}
function addMovie(e){
 
  const movieName = movieNameInput.value;
 
  const movieDescription = movieDescriptionInput.value;
  const movieBanner = movieBannerInput.value;
  const movieBigBanner = movieBigBannerInput.value;
  const imdbRate = imdbRateInput.value;
  const rottenRate = rottenRateInput.value;
  const previewLink =previewLinkInput.value;
  const directors = directorsInput.value;
  const stars = starsInput.value;

  if(movieName === " " || movieDescription === " " || movieBanner === " "|| movieBigBanner === " " || imdbRate === " "|| rottenRate ===" "|| previewLink === " "|| directors === " " || stars === " "){
    ui.displayMessages("Dont left empty input","danger");
  }

  else if(!isURL(movieBanner) || !isURL(movieBigBanner) || !isURL(previewLink)){
    ui.displayMessages("Enter url to specified sections")
  }
  else{
   
    ui.displayMessages("Successful Adding","success");
    const newMovie = new Movie(movieName,movieDescription,movieBanner,movieBigBanner,imdbRate,rottenRate,previewLink,directors,stars )
    ui.addMovieToUi(newMovie);
    storage.addMovieToStorage(newMovie)
  }


e.preventDefault();

}

