import { readFileSync } from "node:fs";

const elves = readFileSync("./data/data.txt", { encoding: "utf-8" });
const [array1, array2] = elves
  .trim() // Remove any extra whitespace
  .split("\n") // Split by line
  .reduce(
    ([arr1, arr2], line) => {
      const [a, b] = line.split(/\s+/).map(Number); // Split by whitespace and convert to numbers
      arr1.push(a);
      arr2.push(b);
      return [arr1, arr2];
    },
    [[], []]
  );

function part1() {
  const d = [];

  const sort1 = array1.sort((a, b) => a - b);
  const sort2 = array2.sort((a, b) => a - b);
  console.log("sort1", sort1);
  console.log("sort2", sort2);

  for (var i = 0; i < array1.length; i++) {
    d.push(Math.abs(sort1[i] - sort2[i]));
  }

  console.log("arr1" + array1);
  console.log("arr2" + array2);
  console.log(d);
  d.reduce((a, b) => a + b, 0);
  console.log(
    "d",
    d.reduce((a, b) => a + b, 0)
  );
}
function part2() {
  let d = [];

  console.log(array1);
  console.log(array2);
  for (var i = 0; i < array1.length; i++) {
    const r = array2.filter((e) => {
      if (e === array1[i]) return e;
    });
    console.log("for i: ", r);
    d.push(array1[i] * r.length);
  }
  d.reduce((a, b) => a + b, 0);
  console.log(
    "arry of multi",
    d.reduce((a, b) => a + b, 0)
  );
}
part1()
part2();

