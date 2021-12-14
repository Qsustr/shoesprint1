import { baseUrl } from "./settings/api.js";
import createMenu from "./components/createMenu.js"; ///needs to be in every js main file

createMenu(); ///needs to be in every js file

const productsUrl = baseUrl + "products";
const container = document.querySelector(".products-container");
const search = document.querySelector(".search");

const response = await fetch(productsUrl);
const json = await response.json();
let productsToRender = json;

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

//// GETTING ALL PRODUCTS ////

async function getProducts() {
  try {
    container.innerHTML = "";

    productsToRender.forEach(function (product) {
      ///change back to details.html?id=${product.id} after
      container.innerHTML += `<div class="products">
                                    <a href="edit.html?id=${product.id}"> 
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
