export const updateProductList = (productList) => {
  productList.forEach((product) => {
    let opt = document.createElement("option");
    opt.value = product.id;
    opt.textContent = product.name + " - " + product.price + "원";
    if (product.quantity === 0) opt.disabled = true;
    cartList.appendChild(opt);
  });
  return cartList
};
