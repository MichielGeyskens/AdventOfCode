//Will return same answer multiple times 
//Not optimized O(N^3))
let answer: number[] = [];
function solve(input: number[]) {
  input.forEach((e1: number) => input.forEach((e2: number) => input.forEach((e3: number) => check(e1, e2, e3))));
  return answer;
}

function check(a: number, b: number, c: number) {
  if (a + b + c == 2020) {
    answer.push(a * b * c);
  }
}

export default solve;
