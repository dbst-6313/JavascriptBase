function Employee(name,salary,age){
   this.name = name;
   this.age = age;
   this.salary = salary 
   this.showInfos =this.name+' '+this.age+' '+this.salary
}

const employeeOne = new Employee("Betül",20000,34);
const employeeTwo = new Employee("Ali",500,13)
textOne = document.querySelector('.text-one')
textTwo = document.querySelector('.text-two')

textOne.appendChild(document.createTextNode(employeeOne.showInfos))
textTwo.appendChild(document.createTextNode(employeeTwo.showInfos))
console.log(employeeOne.showInfos)
console.log(employeeTwo.showInfos)