import { Request } from "./request"
import { UI } from "./ui"
const employeeForm = document.getElementById("employee-form")
const nameValue = document.getElementById("name")
const departmentValue = document.getElementById("department")
const employeeList = document.getElementById("employees")
const updateButton = document.getElementById("update")
const salaryValue = document.getElementById("salary")

const request = new Request("http://localhost:3000/employees")
const ui = new UI()

eventListeners()
let id = null;
function eventListeners() {
    document.addEventListener("DOMContentLoaded", getAllDatas)
    employeeForm.addEventListener("submit", addEmployee);
    employeeList.addEventListener("click", deleteOrUpdate)
    updateButton.addEventListener("click",updateEmployee)
}
function deleteOrUpdate(e) {
   
    if (e.target.id === "delete-employee") {
        const idDelete = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;

        request.update(idDelete).then(data => {
            ui.deleteEmployeeFromTable(e.target.parentElement.parentElement);
        }).catch(err => { ui.displayDangerAlert(err) })
    }
    else if (e.target.id === "update-employee") {
        ui.toggleUpdateButton(e.target.parentElement.parentElement)
        ui.addDatasToValueInputs(e.target.parentElement.parentElement)
        id = e.target.parentElement.previousElementSibling.textContent
    }
}

function updateEmployee() {
const data = {
    name:nameValue.value,
    department:departmentValue.value,
    salary:salaryValue.value
}
    request.update(id,data).then(data=>{
        ui.displaySuccessAlert("Başarıyla güncellendi")
        request.get().then(data=>{
            ui.displayAllEmployees(data);
        })
       
    })
 
}
function addEmployee(e) {
    const newEmployee = {
        name: nameValue.value,
        department: departmentValue.value,
        salary: salaryValue.value
    }
    request.post(newEmployee).then(data => {

        ui.addEmployeeToTable(data)
        ui.displaySuccessAlert()


    }).catch(err => {
        ui.displayDangerAlert("Error")
    })

    e.preventDefault();
}
function getAllDatas() {
    request.get().then(data => {
        ui.displayAllEmployees(data)
    }).catch(err => console.log(err))

}