let submit=document.getElementById("sub");
submit.addEventListener("click",()=>{
    let username=document.getElementById("user").value;
    let Password=document.getElementById("pass").value;
    let output;
    if(username==="manish" && Password==="12345"){
        output="sucessfully loged in.";
    }else{
        output="wrong username or password.";
    }
    document.getElementById("log").innerText=output;
    alert(output);
})