import { baseUrl } from "./settings/api.js";

const productsUrl = baseUrl + "products";
const container = document.querySelector(".products-container");
const search = document.querySelector(".search");

const response = await fetch(productsUrl);
const json = await response.json();
let productsToRender = json;

//// GETTING ALL PRODUCTS ////

async function getProducts() {
  try {
    container.innerHTML = "";

    productsToRender.forEach(function (product) {
      container.innerHTML += `<div class="products">
                                    <a href="details.html?id=${product.id}">
                                      <img src="${product.image.url}">
                                      <h4>${product.title}</h4>
                                      <p>Price: ${product.price}</p>
                                  </a></div>`;
    });
  } catch (error) {
    console.log(error);
    // displayMessage("error", error, ".product-container");
  }
}

getProducts();

////// FILTER SEARCH ////
search.onkeyup = function (event) {
  const searchValue = event.target.value.trim().toLowerCase();

  const filteredProducts = json.filter(function (product) {
    if (product.title.toLowerCase().startsWith(searchValue)) {
      return true;
    }
  });

  console.log(filteredProducts);

  productsToRender = filteredProducts;

  getProducts();
};
