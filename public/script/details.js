/////////////details page

const productDetails = document.querySelector(".container");
const title = document.querySelector("title");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const baseUrl = "http://localhost:1337/";
const productsUrl = baseUrl + "products";

const productsUrlx = productsUrl + id;
console.log(productsUrlx);

async function details() {
  try {
    const response = await fetch(productsUrl);

    const details = await response.json();
    console.log(details);

    detailsHTML(details);
  } catch (error) {
    console.log(error);
    detailsContainer.innerHTML = errorY("error", error);
  }
}

details();

function detailsHTML(details) {
  title.innerHTML = `${details.name}`;
  detailsContainer.innerHTML = `<h1>${details.name}</h1>
                                <p><span class="tag">Id:</span> ${details.id}</p>
                                <p><span class="tag">Height:</span> ${details.height.metric} cm</p>
                                <p><span class="tag">Weight:</span> ${details.weight.metric} kg</p>`;
}
