import { baseUrl } from "./settings/api.js";
import createMenu from "./components/createMenu.js"; ///needs to be in every js main file

const productsUrl = baseUrl + "products";

createMenu(); ///needs to be in every js file

const containerFeatured = document.querySelector(".product-container");

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

      containerFeatured.innerHTML += `<div class="cards">
                                    <div class="card">
                                    <a href="details.html?id=${json[i].id}">
                                    <img src="uploads/photo_1491553895911_0055eca6402d_eaf84a6eb4.jpeg">
                                    <div class ="cardbody">
                                      <h4>${json[i].title}</h4>
                                      <p>Price: ${json[i].price}</p>
                                    </div>
                                  </a>
                                  </div>
                                  </div>`;
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

    ///////needs to be replaces with <img src="${json.hero_banner.url}">
    heroContainer.innerHTML += `
    <div class="heroimage">
    <img src="uploads/photo_1544085311_11a028465b03_29d7651dcc.jpeg">
    </div>
    <div class="herotext">
    <h1>Shop your next running shoes here</h1>
    <ul>
    <li><a href="products.html">Men</a></li>
    <li><span class="line"></li>
    <li><a href="products.html">Women</a></li>
    </ul>
    </div>`;
  } catch (error) {
    console.log(error);
  }
}
getHero();
