let answer: any[] = [];
let checklist: boolean[] = new Array(26).fill(false);
function solve(input: string[]) {
    let indexperson=0;
    input.forEach(el => {
        if (el != "") {
            if(indexperson==0){
                el.split('').forEach((char, index) => {
                    checklist[el.charCodeAt(index) - 97] = true;
                })
            }
            else{
                checklist.forEach((element,index) => {
                    if(element){
                        if(-1==el.indexOf(String.fromCharCode(97 + index)))
                        checklist[index]=false;
                    }
                });
            }
            indexperson++;
        }
        else {
            indexperson=0;
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
