var day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running", "television"]
};
console.log(day1.squirrel);
// -> false
console.log(day1.wolf);
// -> undefined
day1.wolf = false;
console.log(day1.wolf);
// -> false

var descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree",
    football: "Played a game of tag football"
};
console.log(descriptions.football);
// -> Played a game of tag football
delete descriptions.football;
console.log(descriptions.football);
// -> undefined
console.log("football" in descriptions);
// -> false
console.log("work" in descriptions);
// -> true

var journal = [
    {
        events: ["work", "touched tree", "pizza", "running", "television"],
        squirrel: false
    },
    {
        events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
        squirrel: false
    },
    {
        events: ["weekend", "cycling", "break", "peanuts", "beer"],
        squirrel: true
    }
];
console.log(journal[0].events[2]);

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
// -> true
console.log(object1 == object3);
// -> false

object1.value = 15;
console.log(object2.value);
// -> 15
console.log(object3.value);
// -> 10
