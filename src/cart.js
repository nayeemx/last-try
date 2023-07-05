export class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    const existingProduct = this.items.find(item => item.product.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.items.push({ product, quantity: 1 });
    }
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

  clearCart() {
    this.items = [];
  }

  calculateTotalAmount() {
    return this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  render() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    this.items.forEach((item, index) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="flex items-center mb-2">
          <img src="${item.product.image}" alt="Product Image" class="w-8 h-8 rounded-full mr-2">
          <p>${item.product.name} - $${item.product.price} (Quantity: ${item.quantity})</p>
          <button class="remove-btn ml-auto bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
            Remove
          </button>
        </div>
      `;

      const removeBtn = div.querySelector(".remove-btn");
      removeBtn.addEventListener("click", () => {
        this.removeItem(index);
        this.render();
        app.updateTotalAmount();
      });

      cartItems.appendChild(div);
    });
  }
}
