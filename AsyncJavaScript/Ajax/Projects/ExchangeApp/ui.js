class UI{
    constructor(firstSelect,secondSelect){
        this.firstSelect = firstSelect 
        this.secondSelect = secondSelect

        this.optionOne = document.getElementById("outputfirst")
        this.optionTwo = document.getElementById("outputSecond")
        this.outputResult = document.getElementById("outputResult")
    }

    setOutputFirst(){
        this.optionOne.textContent = this.firstSelect.options[this.firstSelect.selectedIndex].text; 
    }

    setOutputSecond(){
        this.optionTwo.textContent = this.secondSelect.options[this.secondSelect.selectedIndex].text; 
    }
    displayResult(result){
        this.outputResult.value = result
    }
}