'use strict';
const searchInput = document.getElementById('search-input');
const priceButton = document
  .getElementById('search-price')
  .querySelector('button ');

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
const changeClass = filter => {
  buttons.forEach(button => {
    button.dataset.filter === filter
      ? button.classList.add('selected')
      : button.classList.remove('selected');
  });
};
const showHandler = event => {
  const filter = event.target.dataset.filter;
  changeClass(filter);
  products.forEach(product => {
    const category = product.dataset.category;
    if (filter === 'all') {
      product.style.display = 'block';
    } else {
      filter === category
        ? (product.style.display = 'block')
        : (product.style.display = 'none');
    }
  });
};

const priceButtonHandler = event => {
  const searchPrice = +event.target.parentElement.children[0].value;
  products.forEach(product => {
    const productPrice = product.children[2].innerText;
    const price = +productPrice.split(' ')[1];
    if (!searchPrice) {
      product.style.display = 'block';
    } else {
      searchPrice === price
        ? (product.style.display = 'block')
        : (product.style.display = 'none');
    }
  });
};

const start = start => {
  buttons.forEach(button => {
    button.addEventListener('click', showHandler);
  });

  searchInput.addEventListener('keyup', searchHandler);

  priceButton.addEventListener('click', priceButtonHandler);
};

window.addEventListener('load', start);
