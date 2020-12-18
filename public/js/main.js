const productsURL = 'http://localhost:8000/api/products';
const cartsURL = 'http://localhost:8000/api/carts';

const productsElement = document.querySelector('.main__display');
const productsInCart = document.querySelector('.cart__display');

let data = [];
let cart = [];

async function getData() {
    try {
        const response = await fetch(productsURL);
        data = await response.json();
        data.forEach(displayProducts);
    } catch (error) {
        console.log('ERROR: I am a broken teapot', error);
    }
}

async function getCarts() {
    try {
        const response = await fetch(cartsURL);
        const result = await response.json();
        cartNumber.innerHTML = result.length;
    } catch (error) {
        console.log('ERROR: I am an empty teapot', error);
    }
}

function displayProducts(item, index) {
    const wrestlerCard = document.createElement('div');
    wrestlerCard.className += ' wrestler__cards';
    wrestlerCard.setAttribute('wrestler-id', item.id);

    let productsPicture = document.createElement('img');
    productsPicture.className += ' product__pic';
    productsPicture.src = item.picture;
    wrestlerCard.appendChild(productsPicture);

    let wrestlerName = document.createElement('p');
    wrestlerName.className += ' shikona';
    wrestlerName.innerHTML = item.shikona;
    wrestlerCard.appendChild(wrestlerName);

    let wrestlerInfo = document.createElement('li');
    wrestlerInfo.innerHTML = 'Rank: ' + item.rank + '<br>' + 'Height: ' + item.height + '<br>' + 'Weight: ' + item.weight + '<br>' + 'Price: ' + item.price;
    wrestlerCard.appendChild(wrestlerInfo);

    let addButton = document.createElement('button');
    addButton.className += ' add__product';
    addButton.innerHTML = 'Add to Cart';
    wrestlerCard.appendChild(addButton);

    productsElement.appendChild(wrestlerCard);
}

getData();

getCarts();