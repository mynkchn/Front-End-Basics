let button=document.getElementById("btn")
// Events in JavaScript
button.addEventListener("dblclick", ()=> {
    alert("I was clicked")
    document.querySelector(".box").innerHTML="I am changed"

})
 button.addEventListener("keydown", (e)=>{
    console.log(e.key,e.keycode)
 })
 