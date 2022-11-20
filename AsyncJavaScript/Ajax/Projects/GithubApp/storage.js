class Storage {
    static getRecentUsersFromStorage(){
        let users;
        
        if(localStorage.getItem("users") === null){
            users = [];
        }
        else {
            users = JSON.parse(localStorage.getItem("users"))
        }
        return users
    
    }
    static addRecentUserToStorage(username){
        let users = this.getRecentUsersFromStorage()
        users.push(username)
        localStorage.setItem("users",JSON.stringify(users))
    }
}