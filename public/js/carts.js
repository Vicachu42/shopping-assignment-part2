const cartsURL = 'http://localhost:8000/api/carts';
const productsInCart = document.querySelector('.cart__display');
let cart = [];

async function getCarts() {
    try {
        const response = await fetch(cartsURL);
        const result = await response.json();
        cartNumber.innerHTML = result.length;
    } catch (error) {
        console.log('ERROR: I am an empty teapot', error);
    }
}
getCarts();



// function displayCarts (item, index) {
//     console.log('Fuuuuuuuuuuuuuuuuck this');
//     // const shoppingCart = document.createElement('div');
//     // shoppingCart.classname += (' cart__listing');
//     // console.log(shoppingCart);

//     // productsInCart.appendChild(shoppingCart);
// }

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