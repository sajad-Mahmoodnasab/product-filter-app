'use strict';
const searchInput = document.getElementById('search-input');
const products = document.querySelectorAll('.prouduct-item');
const buttons = document.querySelectorAll('.filter');
const searchHandler = event => {
  const searchValue = event.target.value.toLowerCase().trim();
  products.forEach(product => {
    const prouctsName = product.children[1].innerText.toLowerCase();
    if (prouctsName.includes(searchValue)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
};
searchInput.addEventListener('keyup', searchHandler);
const showHandler = even => {
    const filter = even.target.dataset.filter;
    products.forEach((product) => {
        const category = product.dataset.category
        
    })
};

buttons.forEach((button) => {
    button.addEventListener('click',showHandler)
})
