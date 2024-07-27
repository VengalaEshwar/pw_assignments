var displayInfo = function(name,role) {
    console.log(name + " " +role)
}
displayInfo.call(null,"Ej","coder")
displayInfo.apply(null,["Ej","coder"])
var greet = function()
{
    console.log("Hello")
}
greet()
