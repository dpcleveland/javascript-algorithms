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
