export class UI{
    constructor(){
        this.employeeList =  document.getElementById("employees")
        this.alertArea = document.getElementById("alert")
        this.updateButton = document.getElementById("update")
        this.salaryInput = document.getElementById("salary")
        this.departmentInput = document.getElementById("department")
        this.name = document.getElementById("name")
    }
    clearInputs(){
      console.log( this.salaryInput.value) 
        this.departmentInput.value
        this.name.value
    }
    toggleUpdateButton(target){
        if(this.updateButton.style.display === "none"){
            this.updateButton.style.display = "inline"
            this.addDatasToValueInputs(target)
        }
        else{
            this.clearInputs();
            this.updateButton.style.display ="none"
            
        }
    }
    addDatasToValueInputs(target){
          const children = target.children
          this.name.value = children[0].textContent;
          this.departmentInput.value = children[1].textContent
          this.salaryInput.value = children[2].textContent
    }
    displayAllEmployees(datas){
    
        let result = ""
        datas.forEach(data =>{
            result+= `
            <tr>                            
            <td>${data.name}</td>
            <td>${data.department}</td>
            <td>${data.salary}</td>
            <td>${data.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr>
          
            `

            
        })
        this.employeeList.innerHTML =result
    }
    deleteEmployeeFromTable(employee){
        employee.remove();
    }
    displaySuccessAlert(){
        const div = document.createElement("div")
        div.className = "alert alert-success"
        div.textContent = "Çalışan Başarıyla Eklendi"
        this.alertArea.appendChild(div)

        setTimeout(function(){
            div.remove()
        },5000)
    }
    addEmployeeToTable(employee){
        const tr = document.createElement("tr")
           const tableValue = `
           <td>${employee.name}</td>
           <td>${employee.department}</td>
           <td>${employee.salary}</td>
           <td>${employee.id}</td>
           <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
           <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
           `
           tr.innerHTML += tableValue
           this.employeeList.appendChild(tr);
    }
    displayDangerAlert(warn){
      const div = document.createElement("div")
      div.className = "alert alert-danger"
      div.textContent = warn
      this.alertArea.appendChild(div)
    }
}