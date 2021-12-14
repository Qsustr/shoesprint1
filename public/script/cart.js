import { getExistingProducts } from "./utils/productsStorage.js";

const products = getExistingProducts();

const container = document.querySelector(".product-container");
const totalContainer = document.querySelector(".total");
const empty = document.querySelector(".empty-cart");

let total = 0;

products.forEach((product) => {
  empty.innerHTML = "";
  total += product.price;
  container.innerHTML += `<div class="product">
                            <a href="details.html?id=${product.id}">
                            <h4>${product.id}</h4>
                            <p>${product.price}</p>
                            </a></div>`;
});

totalContainer.innerHTML = `Total: ${total}`;
