let links = document.querySelectorAll(".box a ");

for(let i = 0; i < links.length; i++){
    links[i].style.color = "green";
}
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click me";



document.querySelector("body").append(input);
document.querySelector("body").append(button);

button.setAttribute("id","btn");
input.setAttribute("placeholder","username");



let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");



let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(h1);



let tbt = document.createElement(" p");
tbt.innerHTML = "ApnaCollege <b>Delta</b> Practice";
document.querySelector("body").append(tbt);


