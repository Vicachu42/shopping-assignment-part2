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

getData();

// fetch (localhost:8000)