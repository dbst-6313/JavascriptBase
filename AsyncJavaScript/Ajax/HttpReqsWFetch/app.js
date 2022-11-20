class Request{
     get(url) {
          return new Promise(function(resolve,reject){
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
          })
    }
    post(url,data){
        return new Promise(function(resolve,reject){
            fetch(url,{
                 method:'POST',
                 body:JSON.stringify(data),
                 headers:{
                    "Content-type":"application/json; charset=utf-8"
                 }
            }).then(response => response.json()).then(data => console.log(data)).catch(err=> console.error(err))
        })
    }
}

const req = new Request();
req.get("https://jsonplaceholder.typicode.com/albums").then(response => console.log(response)).catch(err=> console.error(err))
req.post("https://jsonplaceholder.typicode.com/albums",{userId:55,title:"Thrilled"}).then(response=> console.log(response).catch(err=> console.error(err)))