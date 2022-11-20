document.querySelector(".processer").addEventListener("click",function(){
      const xhr = new XMLHttpRequest;
      xhr.open("GET","https://open.er-api.com/v6/latest/USD")
      xhr.onload = function(){
        if(this.status == 200){
            const currencies = JSON.parse(this.responseText)
           const responseHeader = document.querySelector(".result-header")
            const lira = document.querySelector("#lira").value
            const usd = document.querySelector("#usd").value
            console.log(lira,usd)
             if(lira == ""  && !usd == "" && isNumber(usd)){
                let exchange = usd * currencies.rates.TRY
              responseHeader.textContent = usd +" " + "Usd "+ "Equals:"+ Math.round(exchange*100)/100+ "lira"
             }
             else if(usd == ""  && !lira == "" && isNumber(lira)){
                let exchange=lira / currencies.rates.TRY
                responseHeader.textContent = lira +" " + "Lira "+ "Equals:"+Math.round(exchange*100)/100+" "+ "lira"
               }
             else{
                console.log("wrong")
             }

        }
      }
      xhr.send();
})
function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }