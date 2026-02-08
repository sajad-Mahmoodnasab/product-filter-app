'use strict';
const searchInput = document.getElementById('search-input');
const products = document.querySelectorAll('.prouduct-item');
const searchHandler = event => {
  const searchValue = event.target.value.toLowerCase().trim();
    products.forEach(product => {
     
    const prouctsName = product.children[1].innerText.toLowerCase();
        if (prouctsName.includes(searchValue)) {
       product.style.display='block'
        } else {
            product.style.display='none'
    }
  });
};
searchInput.addEventListener('keyup', searchHandler);
