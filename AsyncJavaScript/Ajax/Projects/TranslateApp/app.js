class Requests{
    get(url) {
        return new Promise(function(resolve,reject){
          fetch(url,{
            method: 'GET',
	         headers: {
                'X-RapidAPI-Key': '568b7fbb13mshaf53a4cd5dcea42p1ff86bjsnc31a0bd583c9',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        'Accept-Encoding': 'application/gzip'
	       }
          })
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
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': '568b7fbb13mshaf53a4cd5dcea42p1ff86bjsnc31a0bd583c9',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'

             }
        }).then(response => response.json()).then(data => console.log(data)).catch(err=> console.error(err))
    })
}
}
const encodedParams = new URLSearchParams();
encodedParams.append("q", "Hello, world!");
encodedParams.append("target", "es");
encodedParams.append("source", "en");
const req = new Requests()
document.getElementById("translate").addEventListener("click",function(){
    let value = document.getElementById("translateText").value
  
    var e = document.getElementById("select");
    var text = e.options[e.selectedIndex].text; 
    var optionValue = e.options[e.selectedIndex].value; 
    const encodedParams = new URLSearchParams();
     encodedParams.append("q", value);
     encodedParams.append("target", "tr");
     encodedParams.append("source", optionValue);

     req.post("https://google-translate1.p.rapidapi.com/language/translate/v2",encodedParams).then(function(data){
        document.getElementById("a").textContent = "Your translated word is " + data
     }).catch(err => console.log(err))
    
})
req.get("https://google-translate1.p.rapidapi.com/language/translate/v2/languages").then(data=> console.log(data)).catch(err=> console.error(err))