///////////details page, getting id
import { baseUrl } from "./settings/api.js";

const detailsContainer = document.querySelector(".details");

const productDetails = document.querySelector(".container");
const title = document.querySelector("title");

const productsUrl = baseUrl + "products/";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const detailUrl = productsUrl + id;

console.log(detailUrl);

const response = await fetch(detailUrl);
const details = await response.json();
console.log(details);

let cartArray = [];

function detailsHTML() {
  detailsContainer.innerHTML = `<p>${details.id}</p>
                                <p>${details.title}</p>
                                <button class="product-button" data-product = "${details.id}">Add to cart</button>`;
}

detailsHTML();

const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.onclick = function (event) {
    cartArray.push(event.target.dataset.product);
    const itemToAdd = detailsHTML.find(
      (item) => item.id === event.target.dataset.product
    );
    console.log(cartArray);
  };
});
