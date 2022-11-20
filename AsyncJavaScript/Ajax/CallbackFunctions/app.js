let langs = ["Python","C++","Csharp"]


function getAllLangs(){
    langs.forEach(function(lang){console.log(lang)})
}
function addLangs(lang,callback){
         setTimeout(function(){
            langs.push(lang)
            console.log("Added")
            callback();
         },3000)
}
addLangs("Javascript",getAllLangs)