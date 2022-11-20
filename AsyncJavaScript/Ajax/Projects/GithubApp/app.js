
const searchForm = document.getElementById("github-form");
const valueOfSearch = document.getElementById("githubname")
const github = new Github()
const ui = new UI()
eventListeners();

function eventListeners(){
    searchForm.addEventListener("submit",searchUser)
    document.addEventListener("DOMContentLoaded",addRecentSearches)
}
function addRecentSearches(){
    ui.displayRecentSearch();
}
function searchUser(e){
    let userName = valueOfSearch.value.trim()
    if(userName === ""){
        console.error("Whatsthat")
    }
    else{
      const datas = github.getUser(userName);
       
      datas.then(data => {
        if(data.user.message === "Not Found"){
            ui.displayFailureAlert("The user you have been searched is not exist")
        }
        else{
            ui.displayUserDatas(data.user)
            ui.addSearchedUserToUi(userName)
            Storage.addRecentUserToStorage(userName);
            ui.displayTheRepos(data.repos)
        }
      }).catch(err => ui.displayFailureAlert(err))


    }
    
         

        
    e.preventDefault()
}