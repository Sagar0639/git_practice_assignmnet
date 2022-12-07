let string="racecar"
 function rev(string){
let bag=""
for(let i=string.length-1;i>=0;i--){
bag=bag+string[i];
}
return bag;
}
let reversed=rev(string);
if(string==reversed){
console.log("palindrome");
}else {
console.log(