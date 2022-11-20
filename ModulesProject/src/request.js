 export class Request{
    constructor(url){
        this.url = url
    }
     async get(){
      let data = await fetch(this.url)
      let response = await data.json();
      return response
    }
     async post(data){
        if(data.salary === "" || data.name === "" || data.department === ""){
            return reject("Alanlar boş olamaz")   
        }
      
        else{
            const response = await fetch(this.url,{
                method:"POST",
                body:JSON.stringify(data),
                headers:{"Content-type":"application/json; charset =UTF-8"}
            })
            const responseData = await response.json();
            return responseData;
        }
       
    }
     async update(id,data){
        const response = await fetch(this.url+ "/"+id,{
            method:"PUT",
            body:JSON.stringify(data),
            headers:{"Content-type":"application/json; charset =UTF-8"}
        })
        const responseData = await response.json();
        return responseData
    }
     async delete(id){
        const response = await fetch(this.url+"/"+id,{
            method:"delete"
        })
        const deletedData = await response.json();
        return deletedData
    }
}