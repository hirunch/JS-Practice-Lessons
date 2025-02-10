//arays

let rows = ["Apple", "Orange", "Mango"];
console.log(typeof(rows));
console.log(rows);
console.log(rows[0]); //firstValue

//update value
rows[2] = "Pine Apple";
console.log(rows);
rows[rows.length - 2] = "Mango";
console.log(rows);

let cities = ["Kandy", "Colombo", "Galle", "New York"];
console.log(cities);
cities[cities.length - 1] = "Jaffna";
console.log(cities);

//add
let pushed = cities.push("Polonnaruwa");
console.log(pushed);
console.log(cities);

//remove
let popped = cities.pop();
console.log(popped);
console.log(cities);