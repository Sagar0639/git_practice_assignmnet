
 function rev(string){
let bag=""
for(let i=string.length-1;i>=0;i--){
bag=bag+string[i];
}


if(bag==string){
  return true
}else{
 return false
}
}

let answer=rev("rwacawr");
console.log(answer)