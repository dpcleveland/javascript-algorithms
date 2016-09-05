var myName = "Daniel";
console.log(typeof myName)
// -> string
console.log(typeof myName.toUpperCase);
// -> function
console.log(myName.toUpperCase());
// -> DANIEL
console.log(myName.toLowerCase());
// -> daniel

var pizza = [];
pizza.push("cheese");
pizza.push("hamburger", "vegetarian");
console.log(pizza);
// -> ["cheese", "hamburger", "vegetarian"]
var joined = pizza.join(" ");
console.log(joined);
// -> cheese hamburger vegetarian
console.log(typeof joined);
// -> string
console.log(pizza.pop());
// -> vegetarian
console.log(pizza);
// -> ["cheese", "hamburger"]
