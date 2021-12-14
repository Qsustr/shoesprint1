import { getUsername } from "../utils/logInStorage.js";
import logoutButton from "./logOutButton.js";

export default function createMenu() {
  const { pathname } = document.location;

  const container = document.querySelector(".menu-container");

  const username = getUsername();

  let authLink = `<a href="login.html" class="${
    pathname === "/login.html" ? "active" : ""
  }">Login</a>`;

  if (username) {
    ////a href = add.html should come to add.html, only appears when logged in
    authLink = `<a href="add.html" class="${
      pathname === "/add.html" ? "active" : ""
    }">Add Product</a>
                <button id="logout">Logout ${username}</button>`; ///style it using #logout in css width: auto;
  }

  console.log(username);

  container.innerHTML = `<div class="menu">
  <a href="./index.html" class="${
    pathname === "/" || pathname === "/" ? "active" : "" /////check this
  }">Home</a>
  ${authLink}
</div>`;

  logoutButton();
}
