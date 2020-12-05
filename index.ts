import fs from "fs";
const day = 5;//(new Date).getDay();

import solve from "./days/5/index";// needs to be dynamic

const input: Array<any>  = fs
  .readFileSync(`days/`+day+`/input.txt`)
  .toString()
  .split("\n")
  .map((s) => s.replace(/\r$/, ""))
  // .filter((s) => s.length > 0);
  // .map(s=>parseInt(s));

// const solver = require(`./days/`+day+`/index.js`);


let data = solve(input);
console.log(data);