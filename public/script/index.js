import { baseUrl } from "./settings/api.js";
import createMenu from "./components/createMenu.js"; ///needs to be in every js main file

const productsUrl = baseUrl + "products";

createMenu(); ///needs to be in every js file

const containerFeatured = document.querySelector(".featured");

//// products cards
async function getFeatured() {
  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    console.log(json);

    for (let i = 0; i < json.length; i++) {
      if (!json[i].featured) {
        continue;
      }

      /////img needs to be replaced with <img src="${json[i].image.url}">

      containerFeatured.innerHTML += `<div class="products">
                                    <a href="details.html?id=${json[i].id}">
                                    <img src="uploads/photo_1491553895911_0055eca6402d_eaf84a6eb4.jpeg">
                                      <h4>${json[i].title}</h4>
                                      <p>Price: ${json[i].price}</p>
                                  </a></div>`;
    }
  } catch (error) {
    console.log(error);
  }
}

getFeatured();

///// HOW TO GET HERO BANNER //////

const heroURL = baseUrl + "home";

const heroContainer = document.querySelector(".hero");

async function getHero() {
  try {
    const response = await fetch(heroURL);
    const json = await response.json();

    console.log(json);
    console.log(json.id);

    heroContainer.innerHTML += `
    <img src="uploads/photo_1544085311_11a028465b03_29d7651dcc.jpeg">`; ///////needs to be replaces with <img src="${json.hero_banner.url}">
  } catch (error) {
    console.log(error);
  }
}
getHero();
