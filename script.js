function addToCart(name, price) {
  let cart =
    JSON.parse(localStorage.getItem("cart")) || [];
  let found = cart.find(item => item.name === name);
  if (found) {
    found.quantity += 1;
  }
  else {
    cart.push({ name, price, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showToast(name + "added");
}

function updateCartCount() {
  let cart =
    JSON.parse(localStorage.getItem("cart")) || [];
  let count = 0;

  cart.forEach(item => {
    count += item.quantity;
  })
  document.getElementById("cartCount").innerText = count;
}
updateCartCount();

function showToast(msg) {
  let toast = document.getElementById("toast");
  toast.innerText = msg;
  toast.style.display = "block"

  setTimeout(() => {
    toast.style.display = "none";
  }, 2000);

  showToast("Product Added To Cart");
}

function changeQty(index, value) {
  let cart =
    JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity += value;
  //agar quantity 0 ho jaye ->remove
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

function removeItem(index) {
  let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

function toggleTheme() {
  document.body.classList.toggle("dark")
}

cart.forEach((Item, index) => {
  // cart display code 
});
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}
