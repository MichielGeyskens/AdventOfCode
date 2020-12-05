let answer: number[] = [];
let checklist: any[] = new Array(8).fill(false);
function solve(input: string[]) {
    // console.log(input);
    let r;//row
    let c;//colum
    input.forEach(el => {
        r = row(el.substring(0, 7))
        c = column(el.substring(7, 10))
        answer.push(r*8+c)
    });

    answer.sort(function(a, b) {
        return a - b;
      });

      let prev=answer[0]-1;
    let anws;
    answer.forEach(el=>{
        if(prev+1!=el)
        anws = prev+1;
        prev = el;


    })
    return anws
    // return Math.max(...answer);
}


function row(chars: string) {
    let min = 0;
    let max = 127;
    chars.split('').forEach(char => {
        if (char == "B") {
            min = Math.floor((min + max) / 2) + 1
        }
        else if (char == "F") {
            max = Math.floor((min + max) / 2)
        }
    });
    if (min == max)
        return min
    console.error("row error")
}

function column(chars: string) {
    let min = 0;
    let max = 7;
    chars.split('').forEach(char => {
        if (char == "R") {
            min = Math.floor((min + max) / 2) + 1
        }
        else if (char == "L") {
            max = Math.floor((min + max) / 2)
        }
    });
    if (min == max)
        return min
    console.error("colum error")
}

export default solve;
