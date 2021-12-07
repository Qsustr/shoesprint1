const baseUrl = "http://localhost:1337/";

const productsUrl = baseUrl + "products";

(async function () {
  const container = document.querySelector(".product-container");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    container.innerHTML = "";

    json.forEach(function (product) {
      container.innerHTML += `<a class="product" href="edit.html?id=${product.id}">
                                      <img src="${productsUrl}/${product.image.name}">
                                      <h4>${product.title}</h4>
                                      <p>Price: ${product.price}</p>
                                  </a>`;
    });
  } catch (error) {
    console.log(error);
    // displayMessage("error", error, ".product-container");
  }
})();
