// /// PRODUCTS IN CART ///

export function getExistingProducts() {
  const inCartProducts = localStorage.getItem("favorites");

  if (inCartProducts === null) {
    return [];
  } else {
    return JSON.parse(inCartProducts);
  }
}
