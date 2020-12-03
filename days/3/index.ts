let answer:number[]=[];
function solve(input: string[]) {
  let list:number[][]=[[1,1],[3,1],[5,1],[7,1],[1,2]];
  list.forEach((element,index)=>{
    const [x,y]=element;
    let inputs=input;
    if(y==2){

      inputs =input.filter(function(v, i) {
        // check the index is odd
        return i % 2 == 0;
      });
    }
  
    answer.push(0);
    inputs.forEach((el,i)=> (el.charAt(i*x%el.length)=="#")?answer[index]++:"");
    
    
  });
  console.log(answer);
  return answer.reduce((a:number, b:number)=> a*b, 1);
}



export default solve;
