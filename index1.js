var container = document.getElementById("container");
var p1 = document.createElement("p");
p1.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa totam illo modi cumque natus quis perspiciatis! Vero voluptas expedita nihil consectetur soluta deleniti in aspernatur amet vel sunt, quidem assumenda."
function paragraph(){
    container.appendChild(p1)
}


var container2 = document.getElementById("container2");
var p2 = document.createElement("p");
p2.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa totam illo modi cumque natus quis perspiciatis! Vero voluptas expedita nihil consectetur soluta deleniti in aspernatur amet vel sunt, quidem assumenda."
container2.appendChild(p2);
var p3 = document.createElement("p");
p3.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa totam illo modi cumque natus quis perspiciatis! Vero voluptas expedita nihil consectetur soluta deleniti in aspernatur amet vel sunt, quidem assumenda."
container2.appendChild(p3);
function remove(){
    p3.remove()
}


var container3 = document.getElementById("container3");
container3.style.background="brown"
function c(){
    container3.style.opacity=0
}


var container4 = document.getElementById("container4");
var btn = document.getElementById("btn1");
function c1(){
    btn.innerText="Change Button text"
}


var container5 = document.getElementById("container5");
var ul = document.createElement("ul")
var l1 = document.createElement("li")
var l2 = document.createElement("li")
var l3 = document.createElement("li")
var l4 = document.createElement("li")
l1.innerText="list-1"
l2.innerText="list-2"
l3.innerText="list-3"
l4.innerText="list-4"
ul.append(l1,l2,l3,l4)
function ad1(){
    container5.appendChild(ul)
}
function r2(){
    l4.remove()
}