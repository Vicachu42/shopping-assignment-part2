const productsURL = 'http://localhost:8000/api/products';
const cartsURL = 'http://localhost:8000/api/carts';

const productsElement = document.querySelector('.wrestler__cards');
const productsInCart = document.querySelector('.cart__listing');
const cartNumber = document.querySelector('#cartNumber')

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
        console.log(result);
        cartNumber.innerHTML = result.length;
    } catch (error) {
        console.log('ERROR: I am an empty teapot', error);
    }
}

function displayProducts(item, index) {
    console.log('Object', item, index);
    const wrestlerCard = document.createElement('div');
    wrestlerCard.className += ' wrestler__cards';

    let productsPicture = document.createElement('img');
    productsPicture.src = item.picture;
    wrestlerCard.appendChild(productsPicture);

    let wrestlerName = document.createElement('p');
    wrestlerName.className += ' shikona';
    wrestlerName.innerHTML = item.shikona;
    wrestlerCard.appendChild(wrestlerName);

    let wrestlerInfo = document.createElement('li');
    wrestlerInfo.innerHTML = 'Rank: ' + item.rank + 'Height: ' + item.height + 'Weight: ' + item.weight + 'Price: ' + item.price;
    wrestlerCard.appendChild(wrestlerInfo);

    let addButton = document.createElement('button');
    addButton.className += ' add__product';
    addButton.innerHTML = 'Add to Cart';
    wrestlerCard.appendChild(addButton);

    productsElement.appendChild(wrestlerCard);
}

getData();
getCarts();





// async function addToCart (code) {
//     const updatedCarts = cartsURL + '1' + code;

//     // console.log(updatedCarts);

//     const response = await fetch(updatedCarts, {method: 'POST'});
//     const result = await response.json();

//     // console.log('Look for ', code);
// }


// addToCart();