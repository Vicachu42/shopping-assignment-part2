const cartsURL = 'http://localhost:8000/api/carts';
const productsInCart = document.querySelector('.cart__display');
let data = [];

async function getCarts() {
    try {
        const response = await fetch(cartsURL);
        data = await response.json();
        data.forEach(displayCarts);
    } catch (error) {
        console.log('ERROR: I am an empty teapot', error);
    }
}
getCarts();

function displayCarts (item, index) {
    const shoppingCart = document.createElement('div');
    shoppingCart.className += ' cart__listing';
    shoppingCart.setAttribute('product-id', item.id);

    let wrestlerName = document.createElement('p');
    wrestlerName.className += ' shikona';
    wrestlerName.innerHTML = item.shikona;
    shoppingCart.appendChild(wrestlerName);

    let productPrice = document.createElement('p');
    productPrice.className += ' price__listing';
    productPrice.innerHTML = 'Price: ' + item.price;
    shoppingCart.appendChild(productPrice);

    let addButton = document.createElement('button');
    addButton.className += ' remove__product';
    addButton.innerHTML = 'Remove from Cart';
    addButton.setAttribute('data-code', item.id);
    shoppingCart.appendChild(addButton);

    addButton.addEventListener('click', (event) => {
        const code = event.target.getAttribute('data-code');
        deleteFromCarts(code);
    });

    let thumbnailPictures = document.createElement('img');
    thumbnailPictures.className += ' thumbnail';
    thumbnailPictures.src = item.picture;
    shoppingCart.appendChild(thumbnailPictures);

    productsInCart.appendChild(shoppingCart);
}

async function deleteFromCarts (code) {
    const updatedCarts = cartsURL + '/' + code;
    console.log(updatedCarts);

    const response = await fetch(updatedCarts, {method: 'DELETE'});
    const result = await response.json();
    window.location.reload();

    getCarts();
}