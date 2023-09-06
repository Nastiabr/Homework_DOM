const body = document.createElement("body");

const main = document.createElement("main");
main.className = "mainClass check item";

const div = document.createElement("div");
div.id = "myDiv";

const p = document.createElement("p");
p.textContent = "First paragraph";

div.appendChild(p);

main.appendChild(div);

body.appendChild(main);

document.body = body;