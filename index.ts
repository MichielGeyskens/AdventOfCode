import fs from "fs";
const day = 1;//(new Date).getDay();

import solve from "./days/1/index";// needs to be dynamic

const input: Array<number>  = fs
  .readFileSync(`days/`+day+`/input.txt`)
  .toString()
  .split("\n")
  .map((s) => s.replace(/\r$/, ""))
  .filter((s) => s.length > 0)
  .map(s=>parseInt(s));

// const solver = require(`./days/`+day+`/index.js`);


let data = solve(input);
console.log(data);