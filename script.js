alert("hello");

//const shareBtn=document.getElementById("shareBtn");
const shareBox=document.getElementById("shareBox");

shareBtn.addEventListener("click",()=>{
    shareBox.classList.toggle("active");
});//