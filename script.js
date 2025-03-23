let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');
let form =document.querySelector("form");

function validateInput(){
    //check username
    if(username.value.trim()===""){
        onError(username, "username cannot be empty")

    }else{
        onsuccess(username);
        //check if password is not empty
    }
    if(password.value.trim()===""){
        onError(password, "password cannot be empty")

    }else{
        onsuccess(password);

    }
    if(password2.value.trim()===""){
        onError(password2, " pliz confirm password")

    }else{
        if(password.value.trim()!==password2.value.trim()){
            onError(password2,"Password doesnt match")
        }else{
        onsuccess(password);}

    }
    if(email.value.trim()===""){
        onError(email,"email cant be null");
    }else{
         onsuccess(email);
    }
    
}
 document.querySelector("button")
 .addEventListener("click",(event)=>{
     event.preventDefault();
    validateInput();

 })
 function onsuccess(input){
    let parent =input.parentElement;
    let messageEle= parent.querySelector("small");
    messageEle.style.visibility="hidden";
    parent.classList.remove("error");
    parent.classList.add("success");

 }
 function onError(input,message){
    let parent =input.parentElement;
    let messageEle= parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.style.color ="red";
    messageEle.innerText=message;
    parent.classList.add("error");
    parent.classList.remove("success");

 }
 //password show
 function showPassword(){
    let passwordFIeld = document.getElementById("password");
    if(passwordFIeld.type==="password"){
        passwordFIeld.type="text";
    }else{
        passwordFIeld.type="password";
    }
 };