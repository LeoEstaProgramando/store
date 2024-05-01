import { products } from "./products.js";
import { printCards } from "./productCards.js";

const searchSelector = document.querySelector("#search");

searchSelector.addEventListener("keyup", (e) => {
    const text = e.target.value;
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(text.toLowerCase()));
    printCards(filteredProducts, "products");
});
