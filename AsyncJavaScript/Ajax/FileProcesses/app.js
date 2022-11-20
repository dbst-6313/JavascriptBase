// Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

document.querySelector(".process-button").addEventListener("click",function(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","example.txt",true)
    xhr.send();
    
    xhr.onload = function(){
        if(this.status === 200) {
            document.querySelector(".container").innerHTML = this.responseText 
        }
    }
    xhr.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            console.log(this.responseText)
        }
    }
    console.log(xhr)
})