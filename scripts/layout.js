// create navbar layout
const navSelector = document.getElementById("navbar");

const options = [
    {title: "Ofertas", linkTo: "./outlet.html", opts: ["Laptops", "Audio", "Auriculares"]},
    {title: "Cómo comprar", linkTo: "./how.html", opts: ["Formas de pago", "Envíos", "Devoluciones"]},
    {title: "Costos y tarifas", linkTo: "./taxs.html", opts: ["Impuestos", "Facturacion"]},
    {title: "Mis pedidos", linkTo: "./orders.html", opts: ["Pedir nuevamente", "Lista de deseos"]},
    {title: "Garantía", linkTo: "./warranty.html", opts: [""]},
]

for (const option of options) {
    const li = document.createElement("li");
    li.className = "nav-li";
    const a = document.createElement("a");
    a.textContent = option.title;
    a.setAttribute("href", option.linkTo);
    a.className = "nav-a";
    li.appendChild(a);
    navSelector.appendChild(li);
}

// create footer layout
const footerSelector = document.querySelector("#footer");

for (const option of options) {
    const ul = document.createElement("ul");
    ul.className = "footer-ul";
    const li = document.createElement("li");
    li.className = "footer-main-item";
    const a = document.createElement("a");
    a.className = "footer-a";
    a.setAttribute("href", option.linkTo);
    a.textContent = option.title;
    li.appendChild(a);
    ul.appendChild(li);

    for (const opt of option.opts) {
        const li = document.createElement("li");
        li.className = "footer-li";
        const a = document.createElement("a");
        a.className = "footer-a";
        a.setAttribute("href", "./index.html");
        a.textContent = opt;
        li.appendChild(a);
        ul.appendChild(li);
    }

    footerSelector.appendChild(ul);
}
