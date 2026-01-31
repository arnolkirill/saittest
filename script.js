// Замена изображения
function changeImage(event, imgId) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById(imgId).src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// Корзина
let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    document.getElementById("cart-count").textContent = cart.length;

    const list = document.getElementById("cart-items");
    list.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} — ${item.price}€`;
        list.appendChild(li);
        total += item.price;
    });

    document.getElementById("cart-total").textContent = total;
}

function toggleCart() {
    document.getElementById("cart-panel").classList.toggle("open");
}
