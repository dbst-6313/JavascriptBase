async function test(){
    let data = new Promise(function(resolve,reject){
        resolve("Naber")
    })
    let response = await data
    
    return response
}
test();