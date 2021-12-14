///////////details page, getting id

import { getExistingProducts } from "./utils/productsStorage.js";

import { baseUrl } from "./settings/api.js";

const productsUrl = baseUrl + "products/";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const detailUrl = productsUrl + id;

console.log(detailUrl);

// let cartArray = [];

const response = await fetch(detailUrl);
const details = await response.json();
console.log(details);

const productDetails = document.querySelector(".details");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

productDetails.innerHTML = `<p>${details.id}</p>
                            <img src="${details.image.url}">
                            <p>${details.title}</p>
                            <p>${details.price}</p>
                            <button class="product-button" data-product = "${details.id}">Add to cart</button>`;

const favButtons = document.querySelectorAll("button");

favButtons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

function handleClick() {
  const id = details.id;
  const title = details.title;
  const price = details.price;

  const currentProducts = getExistingProducts();

  const productExist = currentProducts.find(function (product) {
    return product.id === id;
  });

  if (productExist === undefined) {
    const product = { id: id, title: title, price: price };
    const detail = details;
    currentProducts.push(details);
    saveProducts(currentProducts);
  } else {
    const newProduct = currentProducts.filter((product) => product.id !== id);
    saveProducts(newProduct);
  }
}

function saveProducts(favs) {
  localStorage.setItem("inCart", JSON.stringify(favs));
}

// //////CART ON DETAILS PAGE
// function showCart(cartItems) {
//   cart.style.display = "block"; /////not important, see what looks best, maybe flex
//   cartList.innerHTML = "";
//   let total = 0; /////total price
//   cartItems.forEach(function (cartElement) {
//     total += cartElement.price;
//     cartList.innerHTML += `<div class="cart-item">
//     <h4>${cartElement.title}</h4>
//     </div>`;
//   });
//   totalContainer.innerHTML = `Total: ${total}`;
// }
