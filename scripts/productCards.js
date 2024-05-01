import { products } from "./products.js";

const productSelector = document.getElementById("products");

function createCard(product) {
    return `
    <a class="product-card" href="./details.html?id=${product.id}">
<img
  class="product-img"
  src=${product.pictures[0]}
  alt=${product.title}
/>
<div class="product-info">
  <span class="product-title">${product.title}</span>
  <span class="product-description">${product.supplier}</span>
  <div class="product-price-block">
    <span class="product-price">${product.price}</span>
    <span class="product-discount">${product.onsale}% Off</span>
  </div>
  <div class="product-tax-policy">
    ${product.taxPolicy}
  </div>
</div>
</a>
  `;
}

// Renderizado Dinámico
export function printCards(products, id) {
    let productsTemplate = "";
    for (const product of products) {
        productsTemplate = productsTemplate + createCard(product);
    }
    document.getElementById(id).innerHTML = productsTemplate;
}

printCards(products, "products");
