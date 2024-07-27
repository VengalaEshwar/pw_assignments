let person1 = {
    name : "Eshwar",
    age : 19
}
let person2 = {
    name : "Bunny",
    age : 19
}
introduce = function() {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} yeas old.`);
}
introduce.call(person1)
introduce.call(person2)