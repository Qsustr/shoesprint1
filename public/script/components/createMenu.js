import { getUsername } from "../utils/logInStorage.js";
import logoutButton from "./logOutButton.js";

export default function createMenu() {
  const { pathname } = document.location;

  const container = document.querySelector("nav");

  const username = getUsername();

  let authLink = `
  <a href="login.html" class="nav-link away${
    pathname === "/login.html" ? "active" : ""
  }"><ion-icon name="person-outline"></ion-icon></a>`;

  if (username) {
    ////a href = add.html should come to add.html, only appears when logged in
    authLink = `<a href="add.html" class="${
      pathname === "/add.html" ? "active" : ""
    }">Add Product</a>
                <button id="logout"><ion-icon name="log-out-outline"></ion-icon> ${username}</button>`; ///style it using #logout in css width: auto;
  }

  console.log(username);

  container.innerHTML = `
  <a href="./index.html" class="navbar-brand ${
    pathname === "/" || pathname === "/" ? "active" : "" /////check this
  }">Shoppingsprint</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  <ul class="navbar-nav ">
  <li class="nav-item">
  <a href="products.html" class="nav-link${
    pathname === "/" || pathname === "/products.html" ? "active" : "" /////check this
  }">Men</a>
  </li>
  <li class="nav-item">
  <a href="products.html" class="nav-link${
    pathname === "/" || pathname === "/products.html" ? "active" : "" /////check this
  }">Women</a>
  </li>

<a href="./cart.html" class="nav-link away${
    pathname === "/" || pathname === "/" ? "active" : "" /////check this
  }"><ion-icon name="cart-outline"></ion-icon></a>
  ${authLink}  
  </div>`;

  logoutButton();
}

/////dont touch

// import { getUsername } from "../utils/logInStorage.js";
// import logoutButton from "./logOutButton.js";

// export default function createMenu() {
//   const { pathname } = document.location;

//   const container = document.querySelector(".menu-container");

//   const username = getUsername();

//   let authLink = `<a href="login.html" class="login${
//     pathname === "/login.html" ? "active" : ""
//   }"><ion-icon name="person-outline"></ion-icon></a>`;

//   if (username) {
//     ////a href = add.html should come to add.html, only appears when logged in
//     authLink = `<a href="add.html" class="${
//       pathname === "/add.html" ? "active" : ""
//     }">Add Product</a>
//                 <button id="logout"><ion-icon name="log-out-outline"></ion-icon> ${username}</button>`; ///style it using #logout in css width: auto;
//   }

//   console.log(username);

//   container.innerHTML = `<div class="menu">
//   <a href="./index.html" class="logo nav-link${
//     pathname === "/" || pathname === "/" ? "active" : "" /////check this
//   }">Shoppingsprint</a>
//   <a href="products.html" class="sidelinks${
//     pathname === "/" || pathname === "/products.html" ? "active" : "" /////check this
//   }">Men</a>
//   <a href="products.html" class="sidelinks${
//     pathname === "/" || pathname === "/products.html" ? "active" : "" /////check this
//   }">Women</a>
// <a href="./cart.html" class="shoppingcart${
//     pathname === "/" || pathname === "/" ? "active" : "" /////check this
//   }"><ion-icon name="cart-outline"></ion-icon></a>

//   ${authLink}

// </div>`;

//   logoutButton();
// }
