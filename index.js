const character = "$";
const count = 8;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount, inverted) {
  if(inverted){
    rowNumber = rowCount - rowNumber + 1;
  }
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1);
}

let result = ""
for (let i = 1; i <= count; i++) {
    result += padRow(i, count, inverted);
    
    if(i != count)result += "\n";
}

console.log(result);
