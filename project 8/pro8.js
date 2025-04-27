// Select elements
let iconCart = document.querySelector('.icon');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let listCart = document.querySelector('.listcart');
let quantitySpan = document.querySelector('header .icon span');
let productContainer = document.querySelector('.product');

// Products array
let products = [
    { id: 1, name: "PURCE", price: 100, image: "img/bag.png" },
    { id: 2, name: "CELINE", price: 120, image: "img/bag1.png" },
    { id: 3, name: "PRADA", price: 150, image: "img/bag2.png" },
    { id: 4, name: "LOEWE", price: 200, image: "img/bag3.png" },
    { id: 5, name: "ZARA", price: 250, image: "img/bag4.png" },
    { id: 6, name: "CHENAL", price: 300, image: "img/bag5.png" },
    { id: 7, name: "GUCCI", price: 350, image: "img/bag6.png" },
    { id: 8, name: "CHRICTION DIOR", price: 400, image: "img/bagg.png" },
];

// Cart array
let cart = [];

// Render products on page
function renderProducts() {
    productContainer.innerHTML = '';
    products.forEach((product, index) => {
        let item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">$${product.price}</div>
            <button class="add cart" data-index="${index}">Add to cart</button>
        `;
        productContainer.appendChild(item);
    });

    // Add event listener to new buttons
    let addCartButtons = document.querySelectorAll('.add.cart');
    addCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            let index = button.getAttribute('data-index');
            addToCart(products[index]);
        });
    });
}

// Open cart
iconCart.addEventListener('click', () => {
    body.classList.toggle('show-cart');
});

// Close cart
closeCart.addEventListener('click', () => {
    body.classList.remove('show-cart');
});

// Add to cart function
function addToCart(product) {
    let productInCart = cart.find(item => item.id === product.id);
    if (productInCart) {
        productInCart.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

// Update cart UI
function updateCart() {
    listCart.innerHTML = '';
    let totalQuantity = 0;

    cart.forEach(product => {
        totalQuantity += product.quantity;

        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
            <div class="img">
                <img src="${product.image}" alt="">
            </div>
            <div class="name">
                ${product.name}
            </div>
            <div class="totalprice">
                $${product.price * product.quantity}
            </div>
            <div class="quantity">
                <span class="minus" data-id="${product.id}"><</span>
                <span>${product.quantity}</span>
                <span class="plus" data-id="${product.id}">></span>
            </div>
        `;
        listCart.appendChild(newItem);
    });

    quantitySpan.innerText = totalQuantity;
    addQuantityEvents();
}

// Increase / Decrease quantity
function addQuantityEvents() {
    let minusButtons = document.querySelectorAll('.minus');
    let plusButtons = document.querySelectorAll('.plus');

    minusButtons.forEach(button => {
        button.addEventListener('click', () => {
            let id = parseInt(button.getAttribute('data-id'));
            let product = cart.find(item => item.id === id);
            if (product) {
                product.quantity--;
                if (product.quantity <= 0) {
                    cart = cart.filter(item => item.id !== id);
                }
            }
            updateCart();
        });
    });

    plusButtons.forEach(button => {
        button.addEventListener('click', () => {
            let id = parseInt(button.getAttribute('data-id'));
            let product = cart.find(item => item.id === id);
            if (product) {
                product.quantity++;
            }
            updateCart();
        });
    });
}

// Initialize
renderProducts();
