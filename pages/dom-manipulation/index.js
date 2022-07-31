const body = document.querySelector("body");
const div = document.createElement("div");

div.setAttribute("id", "container");

const p = document.createElement("p");
p.style.color = "#ff0000";
p.textContent = "Hey I'm red!";

const h3 = document.createElement("h3");
h3.style.color = "#0000ff";
h3.textContent = "I'm a blue h3!";

const div2 = document.createElement("div");
div2.style.borderColor = "#ffffff";
div2.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!";

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";

const butt = document.createElement("button"); // method 1 for events
butt.setAttribute("onclick", "alert('Hello world')");
butt.textContent = "click me";

const butt2 = document.createElement("button");
butt2.textContent = "click me 2";
butt2.onclick = () => {
    alert("hello world lol");
}

const butt3 = document.createElement("button");
butt3.textContent = "click me 3";
butt3.addEventListener('click', () => {
    alert("hello world 3");
});
butt3.addEventListener('click', function(e) {
    console.log(e.target);
    e.target.style.backgroundColor = "pink";
});

div2.appendChild(h1);
div2.appendChild(p2);
div2.appendChild(butt);
div2.appendChild(butt2);
div2.appendChild(butt3);

body.appendChild(div);
div.appendChild(p);
div.appendChild(h3);
div.appendChild(div2);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert('meow');
    })
});