let answer: any[] = [];
let checklist:any[] = new Array(8).fill(false);
let teller=0
function solve(input: string[]) {
    // console.log(input.length)
    for (const line of input) {
        if (line != "") {
            check(line, "byr:",0);
            check(line, "iyr:",1);
            check(line, "eyr:",2);
            check(line, "hgt:",3);
            check(line, "hcl:",4);
            check(line, "ecl:",5);
            check(line, "pid:",6);
            check(line, "cid:",7);
        }
        else {
            if (validlist(checklist)) {
                answer.push(checklist);
            }
            checklist = new Array(8).fill(false);
            checklist.push(teller)
        }
        teller++;

    }
    
    //this took me like a hour: off by one errors
    if (validlist(checklist)) {
        answer.push(checklist);
    }

    return answer;
}
function check(line: string, field: string,index: number) {
    if (line.includes(field))
        checklist[index]=true;
}

function  validlist(l:boolean[]) {
    for (let index = 0; index < 7; index++) {
        if(!(checklist[index]))
            return false;        
    }
    return true
}



export default solve;
