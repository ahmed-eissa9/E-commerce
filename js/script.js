//*  open & close cart
let cart = document.querySelector('.cart');

function openCart() {
    cart.classList.add('active');
};
function closeCart() {
    cart.classList.remove('active');
};

//*  open & close menu // Responsive
let menu = document.querySelector('#menu');

function openMenu() {
    menu.classList.add('active');
};
function closeMenu() {
    menu.classList.remove('active');
};


//* info_item_home -- item page
let Big_img_item = document.getElementById("Big_img_item")

function cahnge_img( img ) {
    Big_img_item.src = img;
}



//* Add_item_in_cart
var all_products;
let item_in_cart = document.querySelector(".item-in-cart");

let product_cart = [];

function add_to_cart( id , btn ) {
    product_cart.push(all_products[id]);
    btn.classList.add("active");
    get_item_in_cart();
}

let count_item = document.querySelector(".count-item");
let price_cart = document.querySelector(".price-cart");

let count_item_cart = document.querySelector(".count_item_cart");
let price_cart_total = document.querySelector(".price-cart-total");

function get_item_in_cart() {
    let total_price = 0;
    
    let item_c = "";

    for( let i = 0; i < product_cart.length; i++ ) {
        item_c += `
            <div class="item-cart">
            <img src="${product_cart[i].img}" alt="">
            <div class="content">
            <h4> ${product_cart[i].name} </h4>
            <p class="price-cart"> $${product_cart[i].price}" </p>
            </div>
            
            <button onclick="remove_from_cart(${ i })" class="dellet-item">
            <i class="fa-solid fa-trash-can"></i>
            </button>
            </div>
        `;

        total_price += product_cart[i].price;
    };

    item_in_cart.innerHTML = item_c;    
    
    count_item.innerHTML = product_cart.length;
    price_cart.innerHTML = "$" + total_price; 
    
    count_item_cart.innerHTML = ` ( ${product_cart.length} Item in cart ) `;
    price_cart_total.innerHTML = "$" + total_price;  
    
};

//* remove_item_in_cart
function remove_from_cart( index ) {
    product_cart.splice(index , 1);
    get_item_in_cart();
    
    let addToCartButtons =  document.querySelectorAll(".fa-cart-plus");
    
    for( let i = 0; i < addToCartButtons.length; i++ ) {
        addToCartButtons[i].classList.remove("active");
    
        product_cart.forEach(product => {
            if( product.id === i ) {
                addToCartButtons[i].classList.add("active");
            }
        });
    };
};

//* scroll to top
let to_top = document.querySelector(".to_top");
to_top.addEventListener("click" , () => {
    scrollTo({
        top: 0,
        behavior: "smooth",
    });
});



function go_to_checkout() {
    localStorage.setItem("cart", JSON.stringify(product_cart));
    window.location.href = "checkout.html";
}






