const cartproducts = JSON.parse(localStorage.getItem("cart"));

const createCartCard = (product) => {
    return `
          <article id="cartproducts" class="product-cart">
            <img src=${product.image} alt="${product.title}" class="product-img">
            <div class="product-details">
              <p class="product-title">${product.title}</p>
              <p class="product-description">This phone is unlocked and compatible with any carrier of choice</p>
              <input type="number" class="product-input" value=${product.quantity}>
            </div>
            <p class="product-price">AR$ ${product.price}</p>
          </article>
  `;
};

const printCartCards = (products, id) => {
  let template = ""
  products.forEach(product => {
    template += createCartCard(product)
  });
  document.getElementById(id).innerHTML = template;
};

printCartCards(cartproducts, "cart-section")