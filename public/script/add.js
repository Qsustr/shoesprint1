import displayMessage from "./components/displayMessage.js";
import createMenu from "./components/createMenu.js";
import { getToken } from "./utils/logInStorage.js";
import { baseUrl } from "./settings/api.js";

const token = getToken();
if (!token) {
  location.href = "./index.html"; //////THIS work
}

createMenu();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const price = document.querySelector("#price");
const image = document.querySelector("#image");
const featured = document.querySelector("#featured");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  ////every time form is submitted
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const descriptionValue = description.value.trim();
  const priceValue = parseFloat(price.value);
  const imageValue = image.value.trim();
  const featuredValue = featured.value;
  if (typeof featuredValue == "boolean") {
    ////works
    console.log(featuredValue);
  } else {
    console.log("error");
  }
  /////in here fit in featured, bolean
  ///remove description dont have it, checks --> strapi admin --> content builder --> products (for the fields)

  console.log("priceValue", priceValue);
  console.log("featuredValue", featuredValue);

  ////cheks if price is a number, do same with featured (bolean, true/false)
  if (
    titleValue.length === 0 ||
    descriptionValue.length === 0 ||
    priceValue.length === 0 ||
    isNaN(priceValue) ||
    imageValue.length === 0 ||
    featuredValue.length === 0
  ) {
    return displayMessage(
      "warning",
      "Please supply proper values",
      ".message-container"
    );
  }

  addProduct(
    titleValue,
    descriptionValue,
    priceValue,
    imageValue,
    featuredValue
  ); ////remove description, dont have it
}

async function addProduct(title, description, price, image_url, featured) {
  const url = baseUrl + "products";

  const data = JSON.stringify({
    title: title,
    description: description,
    price: price,
    image_url: image_url, /////unsure
    featured: featured,
  }); ////update this, add in the right fields --> content builder --> products

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.created_at) {
      displayMessage("success", "Product created", ".message-container");
      form.reset();
    }

    if (json.error) {
      displayMessage("error", json.message, ".message-container");
    }

    console.log(json);
  } catch (error) {
    console.log(error);
    displayMessage("error", "An error occured", ".message-container");
  }
}
