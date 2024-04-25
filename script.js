const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const cartCount = document.getElementById("cart-count");
const addressInput = document.getElementById("address");
const addressWarn = document.getElementById("address-warn");

let cartItems = [];

cartBtn.addEventListener("click", () => {
  updateCartModal();
  cartModal.style.display = "flex";
});

cartModal.addEventListener("click", (e) => {
  if (e.target === cartModal) {
    cartModal.style.display = "none";
  }
});

closeModalBtn.addEventListener("click", () => {
  cartModal.style.display = "none";
});

menu.addEventListener("click", (event) => {
  let button = event.target.closest(".add-to-cart-btn");
  if (button) {
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));
    addCartItem(name, price);
  }
});

function addCartItem(name, price) {
  const existingItem = cartItems.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.push({
      name: name,
      price: price,
      quantity: 1,
    });
  }
  updateCartModal();
}

function updateCartModal() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cartItems.forEach((item) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("flex", "justify-between", "mb-4", "flex-col")

    cartItemElement.innerHTML = `
            <div class = "flex items-center justify-between">
                <div>
                    <p class = "font-medium">${item.name}</p>
                    <p>Qtd: ${item.quantity}</p>
                    <p class ="font-medium mt-2">R$ ${item.price.toFixed(2)}</p>
                    
                </div>
               
                    <button class= "remove-cart-btn" data-name="${item.name}">
                        Remover
                    </button>
                
            
            </div>
    `
    total += item.price * item.quantity;
    cartItemsContainer.appendChild(cartItemElement);
  });

  cartTotal.textContent = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  cartCount.textContent = cartItems.length;
}

cartItemsContainer.addEventListener("click", (event) => {
  if(event.target.classList.contains("remove-cart-btn")){
    const name = event.target.getAttribute("data-name");
    removeItemCart(name);  
  }
});

function removeItemCart(name){
    const index = cartItems.findIndex((item) => item.name === name);
    if(index !== -1){
        const item = cartItems[index];
        if(item.quantity > 1){
            item.quantity--;
        }else{
            cartItems.splice(index, 1);
        }
        updateCartModal();
    }
}



