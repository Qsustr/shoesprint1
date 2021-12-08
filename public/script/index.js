/////////// HOW TO GET ALL PRODUCTS ///////////

const baseUrl = "http://localhost:1337/";

const productsUrl = baseUrl + "products";

//// products cards
(async function () {
  const container = document.querySelector(".product-container");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    container.innerHTML = "";

    json.forEach(function (product) {
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
})();
