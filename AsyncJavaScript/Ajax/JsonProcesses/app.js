document.getElementById("processButton").addEventListener("click",function(){
    const xhr = new XMLHttpRequest()
        xhr.open("GET","employees.json")
        xhr.onload = function(){
            if(this.status == 200){
                let list = document.getElementById("employees")
     
                const employees = JSON.parse(this.responseText)
                employees.forEach(function(employee){
                        list.innerHTML += `
                           <tr>
                           <td>${employee.name}</td>
                           <td>${employee.department}</td>
                           <td>${employee.Salary}</td>
                           </tr>
                        `  
                })
            }
        }
        
        xhr.send();
})