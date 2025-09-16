console.log("Script is connected!");
let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = '<b>Yayy you are clicked</b><br>Enjoy your click!';
})