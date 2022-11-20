function isNumber(data){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
              if(typeof data === "number"){
                resolve(data + " " + "Is a number")
                
              }
              else{
                reject(data + " " + "Is not a number")
              }
        },5000)
    })
}

isNumber(5).then( response =>{
     console.log(response)
}).catch(err =>{
    console.error(err)
})
//you can use .then() multiple time.But cant use catch multiple time