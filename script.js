document.addEventListener("DOMContentLoaded", () => {
  let cartCount = 0;

  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

  if (addToCartButtons.length === 0) {
    console.error("No Add to Cart buttons found!");
    return;
  }

  const cartDisplay = document.createElement("div");
  cartDisplay.id = "cartDisplay";
  cartDisplay.style.position = "fixed";
  cartDisplay.style.bottom = "20px";
  cartDisplay.style.right = "20px";
  cartDisplay.style.backgroundColor = "#27ae60";
  cartDisplay.style.color = "#fff";
  cartDisplay.style.padding = "10px 20px";
  cartDisplay.style.borderRadius = "10px";
  cartDisplay.style.fontSize = "1rem";
  cartDisplay.style.zIndex = "1000";
  cartDisplay.innerText = `Cart: ${cartCount} item(s)`;
  document.body.appendChild(cartDisplay);

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      cartCount++;
      cartDisplay.innerText = `Cart: ${cartCount} item(s)`;
      alert("Product added to cart!");
    });
  });
});
