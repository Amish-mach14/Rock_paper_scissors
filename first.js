let btn = document.querySelector("#btn");
let div = document.querySelector("body");
let currentmode = "light";
btn.addEventListener("click", () => {
    if(currentmode === "light") {
        currentmode = "dark";
        div.style.backgroundColor = "black";
    } else {
        currentmode = "light";
        div.style.backgroundColor = "white";
    }})