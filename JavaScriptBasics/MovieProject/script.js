const tableBordered = document.querySelector(".table-bordered")
const deleteButton = document.querySelector(".btn-outline-danger")
const table = document.querySelector(".table-bordered")

const storage = new Storage()
const ui = new UI()
table.addEventListener("click",function(e){
console.log(e.target)
if(e.target.id === "button-delete"){
    ui.deleteMovieFromUi(e.target)
  storage.deleteMoviesFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
}
})
document.addEventListener("DOMContentLoaded",function(){
    let a = 0
    let movies = storage.getMoviesFromStorrage();
    movies.forEach(function(movie){
    const listItem = document.createElement("tr")
    const item1 = document.createElement("td")
    const item2 = document.createElement("td")
    const item3 = document.createElement("td")
    const item5 = document.createElement("td")
    const item4 = document.createElement("th")
     const deleteButton = document.createElement("button")
 deleteButton.setAttribute('type',"button")
 deleteButton.className = "btn btn-outline-danger"
 deleteButton.id = "button-delete"
 deleteButton.style.width = "100%"
 deleteButton.textContent = "Delete"
 item5.appendChild(deleteButton)
    item1.textContent = movie.movieName
    item2.textContent = movie.directors
    item3.textContent = movie.stars
    item4.textContent = a+=1
    listItem.appendChild(item4)
    listItem.appendChild(item1)
    listItem.appendChild(item2)
    listItem.appendChild(item3)
    listItem.appendChild(item5)
    tableBordered.appendChild(listItem)
    })
})