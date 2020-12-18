const cartsURL = 'http://localhost:8000/api/carts';
const productsInCart = document.querySelector('.cart__display');
let data = [];

async function getCarts() {
    try {
        const response = await fetch(cartsURL);
        data = await response.json();
        data.forEach(displayCarts);
        // displayCarts();
        console.log(data);
    } catch (error) {
        console.log('ERROR: I am an empty teapot', error);
    }
}
getCarts();

function displayCarts (item, index) {
    const shoppingCart = document.createElement('div');
    shoppingCart.classname += (' cart__listing');
    shoppingCart.setAttribute('product-id', item.id);

    // let thumbnailPictures = document.createElement('img');
    // // productsPicture.className += ' thumbnail';
    // thumbnailPictures.src = item.picture;
    // shoppingCart.appendChild(thumbnailPictures);

    let wrestlerName = document.createElement('p');
    wrestlerName.innerHTML = item.shikona;
    
    shoppingCart.appendChild(wrestlerName);
    console.log(wrestlerName);

    // let productPrice = document.createElement('p');
    // productPrice.innerHTML = 'Price: ' + item.price;
    // shoppingCart.appendChild(productsInCart);
    // console.log(productPrice);

    productsInCart.appendChild(shoppingCart);
}

// displayCarts();

// function displayCarts(item, index) {
//     console.log(item, index);

//     const shoppingCart = document.createElement('div');
//     shoppingCart.classname += (' cart__listing');
//     // setAttribute

//     // let productsPicture = document.createElement('img');
//     // productsPicture.className += ' thumbnail';
//     // productsPicture.src = item.picture;
//     // shoppingCart.appendChild(productsPicture);

//     productsInCart.appendChild(shoppingCart);
// }



// async function addToCart (code) {
//     const updatedCarts = cartsURL + '?id=' + code;

//     console.log(updatedCarts);

//     const response = await fetch(updatedCarts, {method: 'POST'});
//     const result = await response.json();

//     // console.log('Look for ', code);
// }


// addToCart();