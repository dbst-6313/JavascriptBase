function getTextFile(){
    fetch("document.txt")
    .then(response => response.text()) //chaindeki responsu döndürdük
    .then(data => console.log(data))  //chaindeki döndürdüğümüz datayı kullandı
    .catch((err) => {console.error(err)})
}
function getJsonFile(){
    fetch("movies.json").then(response =>response.json()).then(data => console.log(data)).catch((err) => {console.error(err)})
}

function getExternalApi(){
    fetch("https://jsonplaceholder.typicode.com/albums").then(response =>response.json()).then(data => console.log(data)).catch((err) => {console.error(err)})
}

getTextFile()

getJsonFile()
getExternalApi()
