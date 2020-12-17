const productsURL = 'http://localhost:8000/api/products';
const cartsURL = 'http://localhost:8000/api/carts';

const productsElement = document.querySelector('wrestler__cards');
const productsInCart = document.querySelector('cart__listing');
const cartNumber = document.querySelector('#cartNumber')

let data = [];
let cart = [];

async function getData() {
    try {
        const response = await fetch(productsURL);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.log('ERROR: I am a broken teapot', error);
    }
}

async function getCarts() {
    try {
        const response = await fetch(cartsURL);
        const result = await response.json();
        console.log(result);
        cartNumber.innerHTML = result.length;
    } catch (error) {
        console.log('ERROR: I am an empty teapot', error);
    }
}

function displayProducts() {
    productsElement.innerHTML = '';

    if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
            let productInfo = document.createElement('li');
            let images = document.createElement('product__pic');
            let addButton = document.createElement('add__product');

            productInfo.innerHTML = data[i].shikona + data[i].rank + data[i].height + data[i].weight + data[i].price;
        }
    }
}

getData();
getCarts();

// fetch (localhost:8000)