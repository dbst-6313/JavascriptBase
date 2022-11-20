class UI {
    constructor(){
        this.profileDiv = document.getElementById("profile")
        this.reposDiv = document.getElementById("repos")
    }
    displayTheRepos(reposs){
  
        let result ="" 
        reposs.forEach(repo =>{
            
            result += `     
            <div class="mb-2 card-body">
                 <div class="row">
                     <div class="col-md-2">
                     <span></span> 
                     <a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a>
                     </div>
                     <div class="col-md-6">
                         <button class="btn btn-secondary">
                             Starlar  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                         </button>

                         <button class="btn btn-info">
                             Forklar  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                         </button>
                 
                     </div>
             </div>

             </div> 
             `
        })
        this.reposDiv.innerHTML +=result
       
      }
    displayUserDatas(user){
          
        this.profileDiv.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-4">
            <a href="" target = "_blank">
             <img class="img-fluid mb-2" src=${user.avatar_url}> </a>
             <hr>
             <div id="fullName"><strong> ${user.login}</strong></div>
             <hr>
             <div id="bio">${user.bio}</div>
            </div>
          <div class="col-md-8">
                <button class="btn btn-secondary">
                      Takipçi  <span class="badge badge-light">${user.followers}</span>
                </button>
                <button class="btn btn-info">
                     Takip Edilen  <span class="badge badge-light">${user.following}</span>
                  </button>
                <button class="btn btn-danger">
                    Repolar  <span class="badge badge-light">${user.public_repos}</span>
                </button>
                <hr>
                <li class="list-group">
                    <li class="list-group-item borderzero">
                        <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/mail.png" width="30px"> <span id="company">${user.email}</span>
                        
                    </li>
                    
                </div>
                   
                
          </div>
    </div>  
        
        `
    }
         addSearchedUserToUi(username){
            let users = Storage.getRecentUsersFromStorage()
            const ul = document.getElementById("last-users")
            if(users.indexOf(username) === -1){
                let li = document.createElement("li")
            li.className = "list-group-item"
            li.textContent =  username
            ul.appendChild(li)
            }
         }
    displayRecentSearch(){
        const ul = document.getElementById("last-users")
        let searches = Storage.getRecentUsersFromStorage()
        let result = ""
        searches.forEach((search)=>{
            result +=`<li class="list-group-item">${search}</li> `
        })
        ul.innerHTML += result
    }

    displayFailureAlert(errorText){
      const div = document.createElement("div")
         div.className = "alert alert-danger"
         div.textContent = errorText;
         this.profileDiv.appendChild(div)

         setTimeout(function(){
            div.remove()
         },5000)
    }
}