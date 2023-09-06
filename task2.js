const header = document.querySelector("h1");
const divElement = document.getElementById("myDiv");
const ulElement = document.getElementById("myList");
const spanElement = document.querySelector("span");

header.style.backgroundColor = "lightgreen";
divElement.children[0].style.fontWeight = "700";
divElement.children[1].style.color = "red";
divElement.children[2].style.textDecoration = "underline";
divElement.children[3].style.fontStyle = "italic";

ulElement.style.display = "flex";
ulElement.style.listStyle = "none";

spanElement.style.color = "transparent";