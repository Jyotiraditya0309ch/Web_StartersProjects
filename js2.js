// var title = document.getElementById("header-title")
// console.log(title)
// title.innerText = 'goodbye';
// title.style.color= 'red'
// var item=document.getElementsByClassName("list-group-item")
// console.log(item[2])

var button= document.getElementById("button");
button.addEventListener("mousedown",eve);

function eve(e){
    console.log("Event type: ",e.type);
}