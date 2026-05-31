//ka istemaal bass logic(function) likhne ke kaam ata hai 

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
//naya product cart me ayega to cart update ho jayega uska logic
function updateCartCount() {
  let cart =
    JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cartCount").innerText = cart.length;
}

//jab hum kisi product ko cart me dalenge to ek massage ayega uska logic hai
function showToast(msg) {
  let toast = document.getElementById("toast");

  toast.innerText = msg;
  toast.style.display = "block"

  setTimeout(() => {
    toast.style.display = "none";
  }, 2000);
}

//-+ button ka logic hai bhut inpotent hai.................
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
//ye remove button ka logic hai bhut inpotent.................
function removeItem(index) {
  let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

//ye searching ke liye logic hai bhut inportent.................
let search =
document.getElementById("search");

search.addEventListener("input",function(){

  let value = this.value.toLowerCase();
  
  let ptoducts =
  document.querySelectorAll(".product");

  let productName =
  product.querySelector("h3").innerText.toLowerCase();

  if(productName.iclude(value)){
    product.style.display ="block";
  }
  else
  {
    product.style.display ="none";
  }
});