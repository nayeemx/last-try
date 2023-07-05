export class Product {
  constructor(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
  }

  render() {
    return `
      <div class="flex items-center mb-4">
        <img src="${this.image}" alt="Product Image" class="w-[50px] h-[50px] rounded mr-4">
        <div>
          <h3 class="font-bold">${this.name}</h3>
          <p class="text-gray-600">$${this.price}</p>
        </div>
        <button class="add-to-cart-btn ml-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    `;
  }
}

export const products = [
  new Product("Product 1", 10, "https://source.unsplash.com/random/200x200"),
  new Product("Product 2", 20, "https://source.unsplash.com/random/200x200"),
  new Product("Product 3", 30, "https://source.unsplash.com/random/200x200"),
  // Add more products as needed
];
