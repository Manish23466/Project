let var1=document.getElementById("bttn");
let var2=document.getElementById("btn");
let var3=document.getElementById("id");
let var4=document.getElementById("reset");
//let num=0;
function count(){
    //num=num+1;
    let value=Number(var3.innerText);
    var3.innerText=value+1;
}
function coun(){
    let value=Number(var3.innerText);
    var3.innerText=value-1;
}
function resets(){
    let value=Number(var3.innerText);
    var3.innerText=0;
}
// console.log(var1);
// console.log(var2);
// function counting(){
//     Number(var3.innerText)=count();
// }
// function countin(){
//     Number(var3.innerText)=coun();
// }
bttn.addEventListener("click",count);
btn.addEventListener("click",coun);
reset.addEventListener("click",resets);