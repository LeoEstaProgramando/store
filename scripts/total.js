const cartproducts = JSON.parse(localStorage.getItem("cart"));

const createTotalTemplate = (products, id) => {
  let total = 0;
  products.forEach(product => {
    total += product.price * product.quantity;
  });
  document.getElementById(id).innerHTML = `
    <h2 class="cart-title">Resumen del pedido</h2>
    <div class="cart-total">
        <h4>Total</h4>
        <h4>AR$ ${total}</h4>
    </div>
    <p class="cart-tax">Incluye impuesto PAIS</p>
    <button class="cart-btn">COMPRAR</button>
  `
}

createTotalTemplate(cartproducts, "total-section")