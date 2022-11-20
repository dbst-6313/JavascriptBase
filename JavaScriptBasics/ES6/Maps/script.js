//Key-Value

let myMap = new Map();

const key1 = "Ali"
const key2 =  {a:10,b:20}
const key3 = () => 2;

//set
myMap.set(key1,"String")
myMap.set(key2,"Object Literal")
myMap.set(key3,"Function")
//get
console.log(myMap.get(key3))