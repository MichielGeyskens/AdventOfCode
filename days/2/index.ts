let answer: any[] = [];
function solve(input: any[]) {
  input.forEach(el => check(el))
  // console.log(input);
  return answer.length;
}

function check(string: string) {
  const split = string.split(" ");
  let min: number = parseInt(split[0].split("-")[0]);
  let max: number = parseInt(split[0].split("-")[1]);
  const letter = split[1].replace(":", "")
  const pw: string = split[2]
  min -= 1;
  max -= 1;

  // console.log(min, max, letter, pw, pw.indexOf(letter))
  if (pw.charAt(min) == letter || pw.charAt(max) == letter) {
    if(!(pw.charAt(min) == letter && pw.charAt(max) == letter)){
      console.log(min, max, letter, pw, pw.charAt(min),pw.charAt(max))
      answer.push(pw);

    }
  }

  //part One
  // const count: number | undefined = (pw.match(new RegExp(letter, "g") || []))?.length;
  // if ((min <= count) && (count <= max)) {
  //   answer.push(pw);
  // }

}



export default solve;
