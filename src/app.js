import { Product, products } from './product.js';
import { Cart } from './cart.js';

class App {
  constructor() {
    this.cart = new Cart();
    this.totalAmountElement = document.getElementById("totalAmount");

    this.initialize();
  }

  initialize() {
    const productList = document.getElementById("productList");
    products.forEach((product) => {
      const div = document.createElement("div");
      div.innerHTML = product.render();
      const addToCartBtn = div.querySelector(".add-to-cart-btn");
      addToCartBtn.addEventListener("click", () => {
        this.cart.addItem(product);
        this.cart.render();
        this.updateTotalAmount();
      });
      productList.appendChild(div);
    });

    const clearCartBtn = document.getElementById("clearCartBtn");
    clearCartBtn.addEventListener("click", () => {
      this.cart.clearCart();
      this.cart.render();
      this.updateTotalAmount();
    });

    this.cart.render();
    this.updateTotalAmount();
  }

  updateTotalAmount() {
    const totalAmount = this.cart.calculateTotalAmount();
    this.totalAmountElement.textContent = `Total Amount: $${totalAmount}`;
  }
}

const app = new App();
