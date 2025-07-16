
// products
let products = [

    {
      "id": 0,
      "img": "img/product/product1.jpg",
      "img_hover": "img/product/product-1.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 185,
      "old_price": 225
    },
    {
      "id": 1,
      "img": "img/product/product2.jpg",
      "img_hover": "img/product/product-2.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 100,
      "old_price": 120
    },
    {
      "id": 2,
      "img": "img/product/product3.jpg",
      "img_hover": "img/product/product-3.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 140,
      "old_price": 200
    },
    {
      "id": 3,
      "img": "img/product/product4.jpg",
      "img_hover": "img/product/product-4.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 90,
      "old_price": 110
    },
    {
      "id": 4,
      "img": "img/product/product5.jpg",
      "img_hover": "img/product/product-5.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 350,
      "old_price": 420

    },
    {
      "id": 5,
      "img": "img/product/product6.jpg",
      "img_hover": "img/product/product-6.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 115,
      "old_price": 235
    },
    {
      "id": 6,
      "img": "img/product/product7.jpg",
      "img_hover": "img/product/product-7.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 225,
      "old_price": 280
    },
    {
      "id": 7,
      "img": "img/product/product8.jpg",
      "img_hover": "img/product/product-8.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 150,
      "old_price": 200
    },
    {
      "id": 8,
      "img": "img/product/product-1.jpg",
      "img_hover": "img/product/product1.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 180
    },
    {
      "id": 9,
      "img": "img/product/product-2.jpg",
      "img_hover": "img/product/product2.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 300
    },
    {
      "id": 10,
      "img": "img/product/product-3.jpg",
      "img_hover": "img/product/product3.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 250
    },
    {
      "id": 11,
      "img": "img/product/product-4.jpg",
      "img_hover": "img/product/product4.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 120
    },
    {
      "id": 12,
      "img": "img/product/product-5.jpg",
      "img_hover": "img/product/product5.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 90
    },
    {
      "id": 13,
      "img": "img/product/product-6.jpg",
      "img_hover": "img/product/product6.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 129
    },
    {
      "id": 14,
      "img": "img/product/product-7.jpg",
      "img_hover": "img/product/product7.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 180
    },
    {
      "id": 15,
      "img": "img/product/product-8.jpg",
      "img_hover": "img/product/product8.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 60
    }
  ];
  
all_products = products;

let swiper_item_sale = document.getElementById("swiper_item_sale");
    products.forEach((product) => {
      if( product.old_price ) {

        let discount =  Math.floor(((product.old_price - product.price) / product.old_price) * 100) ;

        swiper_item_sale.innerHTML += `
            <div class="product swiper-slide">

                <div class="icons">
                    <span><i onclick="add_to_cart(${product.id} , this)" class="fa-solid fa-cart-plus"></i></span>
                    <span><i class="fa-solid fa-heart"></i></span>
                    <span><i class="fa-solid fa-share"></i></span>
                </div>

                <span class="sale_preasnt">${discount}%</span>

                <div class="img_product">
                    <img src="${product.img}" alt="">
                    <img class="img_hover" src="${product.img_hover}" alt="">
                </div>

                <h3 class="name_product"> <a href="info_item.html"> ${product.name} </a> </h3>

                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>

                <div class="price">
                    <p> <span> $${product.price} </span> </p>
                    <p class="old_price">$${product.old_price}</p>
                </div>
            </div>
        `;
      };
});

let computer_item = document.getElementById("computer_item");
    products.forEach((product) => {
        computer_item.innerHTML += `
            <div class="product swiper-slide">

                <div class="icons">
                    <span><i onclick="add_to_cart(${product.id} , this)" class="fa-solid fa-cart-plus"></i></span>
                    <span><i class="fa-solid fa-heart"></i></span>
                    <span><i class="fa-solid fa-share"></i></span>
                </div>

                <div class="img_product">
                    <img src="${product.img}" alt="">
                    <img class="img_hover" src="${product.img_hover}" alt="">
                </div>

                <h3 class="name_product"> <a href="info_item.html"> ${product.name} </a> </h3>

                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>

                <div class="price">
                    <p> <span> $${product.price} </span> </p>
                </div>
            </div>
        `;
});

let phone_item = document.getElementById("phone_item");
    products.forEach((product) => {
        phone_item.innerHTML += `
            <div class="product swiper-slide">

                <div class="icons">
                    <span><i onclick="add_to_cart(${product.id} , this)" class="fa-solid fa-cart-plus"></i></span>
                    <span><i class="fa-solid fa-heart"></i></span>
                    <span><i class="fa-solid fa-share"></i></span>
                </div>

                <div class="img_product">
                    <img src="${product.img}" alt="">
                    <img class="img_hover" src="${product.img_hover}" alt="">
                </div>

                <h3 class="name_product"> <a href="index.html"> ${product.name} </a> </h3>

                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>

                <div class="price">
                    <p> <span> $${product.price} </span> </p>
                </div>
            </div>
        `;
});



