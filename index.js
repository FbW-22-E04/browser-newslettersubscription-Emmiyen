const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");
const body = document.querySelector('body')

popup.style.display = "none"

button.addEventListener("click", () => {
  popup.style.display = "block";
});

close.addEventListener("click", ()=> {
    popup.style.display ="none"
})

popup.addEventListener("click", () => {
    popup.style.display="none"
})
document.addEventListener('mousemove', (e)=>{
if(e.clientY > 10){
    popup.style.display = "block";
}
})