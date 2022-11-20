const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");
const currency = new Exchange("USD","TRY")
const ui = new UI(firstSelect,secondSelect)
eventListeners()

function eventListeners(){
 
        amountElement.addEventListener("input",exchangeCurrency);
    
   
    firstSelect.onchange = function(){
    
        var text = firstSelect.options[firstSelect.selectedIndex].text; 
        ui.setOutputFirst()
        currency.setFirstCurrency(text)
    }
    secondSelect.onchange = function(){
        var text = secondSelect.options[secondSelect.selectedIndex].text; 
        ui.setOutputSecond()
        currency.setSeconCurrency(text)
    }
}

function exchangeCurrency(){
    currency.changeAmount(amountElement.value)
currency.exchange().then(result => ui.displayResult(result)).catch(err=> console.info(err))

}