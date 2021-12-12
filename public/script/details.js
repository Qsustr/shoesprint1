///////////details page, getting id
import { baseUrl } from "./settings/api.js";

const productDetails = document.querySelector(".container");
const title = document.querySelector("title");

const productsUrl = baseUrl + "products/";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const detailUrl = productsUrl + id;

console.log(detailUrl);

// let cartArray = [];

(async function () {
  try {
    const response = await fetch(detailUrl);
    const details = await response.json();
    console.log(details);

    const detailsContainer = document.querySelector(".details");

    detailsContainer.innerHTML = `<p>${details.id}</p>
<p>${details.title}</p>`;
  } catch (error) {
    console.log("error");
  }
})();

// function detailsHTML() {
//   detailsContainer.innerHTML = `<p>${details.id}</p>
//                                 <p>${details.title}</p>
//                                 <button class="product-button" data-product = "${details.id}">Add to cart</button>`;
// }

// const buttons = document.querySelectorAll("button");

// buttons.forEach(function (button) {
//   button.onclick = function (event) {
//     cartArray.push(event.target.dataset.product);
//     const itemToAdd = detailsHTML.find(
//       /////here
//       (item) => item.id === event.target.dataset.product
//     );
//     console.log(cartArray);
//   };
// });
