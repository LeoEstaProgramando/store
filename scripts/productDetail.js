import { products } from "./products.js";

const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");

const printDetails = (id) => {
    const product = products.find((product) => product.id == id);
    const template = `<section class="product-images-block">
  <div class="product-images">
    ${product.pictures
        .map(
            (picture) => `<img
    class="mini-img"
    src=${picture}
    alt="mini"
  />`
        )
        .join("")}
    
  </div>
  <img
    class="big-img"
    id="big-img"
    src=${product.pictures[0]}
    alt=${product.title}
  />
</section>
<div class="product-description-block">
  <h1 class="product-title">${product.title}</h1>
  <form class="product-selector">
    <fieldset class="product-fieldset">
      <label class="product-label" for="color">Color</label>
      <select
        class="product-select"
        type="text"
        placeholder="Selecciona un color"
        id="color"
      >
        ${product.colors
            .map((color) => `<option value=${color}>${color}</option>`)
            .join("")}
      </select>
    </fieldset>
  </form>
  <div class="product-description">
    <span class="product-label">Descripción</span>
    <p>
      ${product.description}
    </p>
  </div>
</div>
<div class="product-checkout-block">
  <div class="checkout-container">
    <span class="checkout-total-label">Total:</span>
    <h2 id="price" class="checkout-total-price">$${product.price}</h2>
    <p class="checkout-description">
      ${product.taxPolicy}
    </p>
    <ul class="checkout-policy-list">
      <li>
        <span class="policy-icon"
          ><img src="./assets/truck.png" alt="Truck"
        /></span>
        <span class="policy-desc"
          >Agrega el producto al carrito para conocer los costos de
          envío</span
        >
      </li>
      <li>
        <span class="policy-icon"
          ><img src="./assets/plane.png" alt="Plane"
        /></span>
        <span class="policy-desc"
          >Recibí aproximadamente entre 10 y 15 días hábiles,
          seleccionando envío normal</span
        >
      </li>
    </ul>
    <div class="checkout-process">
      <div class="top">
        <input id="quantity" type="number" min="1" value="1" />
        <button id="cart-btn" type="button" class="cart-btn">
          Añadir al Carrito
        </button>
      </div>
    </div>
  </div>
</div>`;
    const container = document.getElementById("details");
    container.innerHTML = template;
};

printDetails(id);

const changeMini = (e) => {
    const selectedSrc = e.target.src;
    const bigSelector = document.querySelector("#big-img");
    bigSelector.src = selectedSrc;
};

const changeSubtotal = (e) => {
    const cantidad = e.target.value;
    const product = products.find((product) => product.id == id);
    document.querySelector("#price").innerHTML = `$${cantidad * product.price}`;
};

const saveProduct = (id) => {
    const found = products.find((product) => product.id === id);
    const product = {
        id: id,
        title: found.title,
        price: found.price,
        image: found.pictures[0],
        color: document.querySelector("#color").value,
        quantity: document.querySelector("#quantity").value,
    };
    if (localStorage.getItem("cart")) {
        const storage = JSON.parse(localStorage.getItem("cart"));
        const stringifyProducts = JSON.stringify([...storage, product]);
        localStorage.setItem("cart", stringifyProducts);
    } else {
        const stringifyProduct = JSON.stringify([product]);
        localStorage.setItem("cart", stringifyProduct);
    }
};

document.querySelectorAll(".mini-img").forEach((mini) => {
    mini.addEventListener("click", changeMini);
});
document.getElementById("quantity").addEventListener("change", changeSubtotal);
document
    .getElementById("cart-btn")
    .addEventListener("click", () => saveProduct(id));
