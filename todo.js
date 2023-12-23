let val = document.querySelector("input");
let btn1 = document.querySelector(".add");
let ul = document.querySelector("ul");
let li = document.querySelector("li");
btn1.addEventListener("click", function () {
    let item = document.createElement("li");
    let bt = document.createElement("button");
    bt.innerText = "X";
    bt.classList.add("del");
    if (val.value === "") {
        alert("invalid input");
    }
    else {
        item.innerText = val.value;
        item.appendChild(bt);
        ul.appendChild(item);
        val.value = "";
    }
})
ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        event.target.parentElement.remove();
    }
    // console.dir(event.target.remove());
})
// let btns=document.querySelectorAll(".del");
// for(btn of btns){
//     btn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.dir(this);
//         par.remove();
//         // alert("Do you want to delete your task!");
//     })
// }