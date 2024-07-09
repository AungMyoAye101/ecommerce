import products from "./product.js";

const productsCon = document.getElementById("product-container");

const mobileLinks = document.getElementById("mb-link");

const open = document.getElementById("open");

open.onclick = () => {
  console.log(22);
  mobileLinks.style.transform = "translateX(0)";
  open.style.display = "none";
  close.style.display = "block";
};
const close = document.getElementById("close");

close.onclick = () => {
  mobileLinks.style.transform = "translateX(120px)";
  open.style.display = "block";
  close.style.display = "none";
};
const render = () => {
  products.map((item, i) => {
    productsCon.innerHTML += `
        <div class="card">
            <img src="${item.image}" alt="product image" />
       
            <div class="product-info">
              <h2>${item.title}</h2>
              <div class="flex info">
                <p class="type">${item.type}</p>
                <p class="price">
                  <span>${item.price} $</span>
                
                </p>
              </div>
            <button> Add to Cart</button>
            </div>
          </div>
    
    `;
  });
};
render();
