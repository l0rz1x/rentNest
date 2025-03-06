import { products } from "./products.js";

let productHTML = '';

products.forEach((product) => {
    productHTML += `
    <div class="products">
            <a href="second.html?id=${product.id}"> <img class="image" src="${product.image}" alt="image"></a>
             <section class="information">
             <div class="dateAddress">
                 <p class="date">${product.dateAded}</p>
                 <p class="isAvailable">${product.isAvailable}</p>
                 
            </div>
            <div class="priceAvailable">
                 <p class="price">${product.price} tl</p>
                 <p class="address">${product.address}</p>
            </div>
             </section>
             
         </div>
    `;

});

document.querySelector('.js-sales').innerHTML = productHTML;

document.querySelectorAll("p").forEach((p) => {
    if (p.textContent.trim().toLowerCase() === "rented") {
      p.style.color = "#B31B1B"; 
    }
  });

  document.getElementById('one').textContent = "+90 531 284 34 19";
  document.getElementById('two').textContent = "+90 535 961 77 58";