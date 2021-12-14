import { getExistingProducts } from "./utils/productsStorage.js";
import createMenu from "./components/createMenu.js"; ///needs to be in every js main file

createMenu(); ///needs to be in every js file

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
                            <img src="${product.image.url}">
                            <h4>${product.id}</h4>
                            <p>${product.price}</p>
                            </a></div>`;
});

totalContainer.innerHTML = `Total: ${total}`;
