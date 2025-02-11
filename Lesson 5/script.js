let character = "#"
let count = 8;
let result ="";
let rows = [];

for(let i = 0; i < 5; i++){
  rows.push(i);
}
console.log(rows);

for (let row in rows){
  result = result + "\n" + row;
  console.log(count);
}

for(let i = 0; i < count; i++){
  console.log(character.repeat(i+1));
}