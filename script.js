let btn=document.getElementById("btn");
if(btn){
    btn.addEventListener("click", function(){
    alert("WELCOME TO TRAVEL CO YOUR TRUSTED PARTNER");
  } );
}
let form=document.getElementById("ContactForm");
if(form){
    form.addEventListener("submit", function(event){
    event.preventDefault();
    let name= document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let messagebox=document.getElementById("messagebox").value;
    let message=document.getElementById("message");
    if(name === "" || email === "" || messagebox === ""){
        message.innerHTML = "Please fill in all fields";
        message.style.color="red";
    }
    else if (!email.includes("@")){
        message.innerHTML= "Enter a valid email";
        message.style.color="red";
    }
    else{
        message.innerHTML="Message Sent Successfully";
        message.style.color="green";
    }

});
const video=document.getElementById("bg-video");
video.play();
}