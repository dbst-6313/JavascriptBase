//Get Request
class Request{
        constructor(){
            this.xhr = new XMLHttpRequest
        }
        
        get(url){
              this.xhr.open("GET",url)
              this.xhr.send()
              this.xhr.onload = function(){
                   if(this.xhr.status == 200){
                    console.log(this.xhr.responseText)
                   }
              }.bind(this)
        }
        post(url,data,callback){
            this.xhr.open("POST",url)
            this.xhr.setRequestHeader("Content-type","application/json")
            this.xhr.onload = () =>{
                    
                if(this.xhr.status === 201)
                {
                    callback(null,this.xhr.responseText)
                }
                else{
                    callback("Post Request:Bir Hata Oluştu",null)
                }
               
            }
            this.xhr.send(JSON.stringify(data))
        }
}

const request = new Request();


request.post("https://jsonplaceholder.typicode.com/albums",{userId:5,title:"Sunt quiMa Thrilled"},function(err,data){
     
if(err === null){
    console.log(data)
}
else{
    console.log(err)
}
})