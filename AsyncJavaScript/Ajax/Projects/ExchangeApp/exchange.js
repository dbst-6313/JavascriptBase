class Exchange {
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency
        this.secondCurrency = secondCurrency
       
        this.amount = null
    }
   // from=SGD&to=MYR&q=1.0
    exchange(){
     return new Promise((resolve,reject) =>{
        fetch("https://open.er-api.com/v6/latest/"+this.firstCurrency).then(response => response.json()).then(data => {
            const parity = data["rates"][this.secondCurrency];
            const amount2 = Number(this.amount);
            let total = parity * amount2
              resolve(total)    
        
        }).catch(err => reject(err))
     });
   
    }

    changeAmount(amount){
        this.amount = amount
    }
    setFirstCurrency(currency){
        this.firstCurrency = currency
    }
    setSeconCurrency(currency){
        this.secondCurrency = currency
    }
}