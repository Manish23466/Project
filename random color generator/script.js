let bttn=document.getElementById("button");
function colorchange(){
    let num="0123456789ABCDEF";
    let cons="#";
    for(let i=0;i<6;i++){
        cons=cons+num[Math.floor(Math.random()*16)];
    }
    return cons;
}
console.log(colorchange);

function randomcolorchange(){
    document.body.style.backgroundColor=colorchange();
}

bttn.addEventListener("click",randomcolorchange);