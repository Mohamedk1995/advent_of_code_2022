const fs = require("fs")

const lines = fs.readFileSync("input.txt", "utf-8")
//remove whitespace
.trim()
//split onto newline to get array of strings
.split("\n")

const getCharValue = (letter) => {
    if (/[a-z]/.test(letter)) { return letter.charCodeAt(0) - 96 }
    else { return letter.charCodeAt(0) - 38 }
}

const data = lines.map((line)=> {
    first = [...line.slice(0,line.length/2)];
    second = [...line.slice(line.length/2)];

    let firstSet = new Set(first);
    const commonChars = second.filter((char) => firstSet.has(char));
    const chars = [ ...new Set(commonChars)]
    return (getCharValue(chars[0]))
});

sumOfPriorities = data.reduce((a, b) => a + b, 0)
console.log("part 1 = ", sumOfPriorities);

//Part two 
let sum = 0
for (let i = 0; i < lines.length; i += 3) {
  const rucksack = [
    [...lines[i]],
    [...lines[i + 1]],
    [...lines[i + 2]]];

//compare first rucksack with second
//if any common characters exist compare with third rucksack
  
  let rucksackSet = new Set(rucksack[0]);
  let commonChars = rucksack[1].filter((char) => rucksackSet.has(char));

  rucksackSet2 = new Set(commonChars);
  commonChars = rucksack[2].filter((x) => rucksackSet2.has(x));

  const chars = [...new Set(commonChars)];
  
  sum += getCharValue(chars[0]);
}
console.log("part 2 = ", sum);