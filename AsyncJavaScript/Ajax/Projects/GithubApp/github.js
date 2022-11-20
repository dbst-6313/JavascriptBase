class Github{
          
         constructor(){
            this.url = "https://api.github.com/users/"
         }

         async getUser(username){
               const getUser = await fetch(this.url+username)
               const getUserRepos = await fetch(this.url + username + "/repos")

               const userData = await getUser.json()
               const userReposData = await getUserRepos.json()

               return {
                user : userData,
                repos : userReposData
               }
         }
}