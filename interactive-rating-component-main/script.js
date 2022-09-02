let wraper=document.querySelector(".main");
let container=document.querySelector(".thank");
let push=document.getElementById("sub");

push.addEventListener("click",()=>{
    container.classList.remove("hiden")
    wraper.style.display="none";
})