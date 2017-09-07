var Basic = require("./BasicCard.js")

var Cloze = require("./ClozeCard.js")

var firstPresident = new Basic("Who was the first president of the United States?", "George Washington");

console.log(firstPresident.front)
console.log(firstPresident.back)

var secondPresident = new Cloze("John Adams", "John Adams was the second president of the United States");

console.log(secondPresident.cloze)
console.log(secondPresident.partial())
console.log(secondPresident.full)