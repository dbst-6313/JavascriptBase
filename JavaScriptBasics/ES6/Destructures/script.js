array = [100,200,300,400,500]

//Classic Way
number1 = array[0];
number2 = array[1];
console.log(number1,number2)
//Es6 way 
 let [number3,number4] = array
 console.log(number3,number4)

const numbers = {
    a:10,
    b:30,
    c:50,
    d:60
};

const {a:number11,c:number22,e:numbert} = numbers
//or
const {a,c,e} = numbers

const getLangs = () => ["Python","Java","C++"]

const [l1,l2,l3] = getLangs();
console.log(l1,l2,l3)

const person = {
    name:"Ali",
    year:2006,
    salary:1000,
    showInfors : () => console.log("Bilgiler gösteriliyor.....")
}
const {name,year,salary,showInfors} = person

console.log(name,year,salary)
showInfors()