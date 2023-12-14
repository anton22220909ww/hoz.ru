const addToCartBtn = document.querySelector('.product__btn');
const cartCounter = document.querySelector('.quantity');

let cartItems = 0;

addToCartBtn.addEventListener('click', () => {
  cartItems++;
  cartCounter.textContent = cartItems;
});
