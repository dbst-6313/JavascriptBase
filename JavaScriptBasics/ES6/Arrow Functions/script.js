const helloAlert = (firstName,lastName) => console.log("Merhaba",firstName,lastName)
helloAlert("Ali","Halıcıoğlu")

//Also can use like this if there is just 1 parameter
const helloAlert2 = firstName => console.log("Merhaba",firstName)

//You can return a value without return keyword
const squareOfNumber = x => x*x

console.log(squareOfNumber(10))