let answer: any[] = [];
let checklist: boolean[] = new Array(26).fill(false);
function solve(input: string[]) {
    input.forEach(el => {
        if (el != "") {
            el.split('').forEach((char, index) => {
                checklist[el.charCodeAt(index) - 97] = true;
            })
        }
        else {
            answer.push(countTrue(checklist))
            checklist = new Array(26).fill(false);
        }
    })
    answer.push(countTrue(checklist))

    return answer.reduce(function (a, b) {
        return a + b;
    }, 0);;
}

function countTrue(list: boolean[]) {
    let teller: number = 0;
    list.forEach(element => {
        if (element == true)
            teller++;
    });
    return teller;
}


export default solve;
