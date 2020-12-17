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
        data = await response.json();
        console.log(data);
        return data;
        // displayProducts();
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
            let productPictures = document.createElement('product__pic');
            let addButton = document.createElement('add__product');

            productInfo.innerHTML = data[i].shikona + data[i].rank;
            // + data[i].height + data[i].weight + data[i].price;

            const imagesURL = 'http://localhost:8000' + data[i].picture;
            productPictures.setAttribute('src', imagesURL);

            addButton.setAttribute('id-code', data[i].id);
            addButton.innerHTML = 'Add to cart';
            productInfo.append(addButton);
            
            productsElement.append(productInfo);
            productInfo.appendChild(productPictures);

            addButton.addEventListener('click', (event) => {
                const code = event.target.getAttribute('id-code');
                addButton.innerHTML = 'In Cart';
                addtoCart(code);
            });

            console.log('Where the fuck is my tepot?!');
        }
    } else {
        console.log('I can not find my fucking teapot!');

        let node = document.createElement('li');
        node.innerHTML = 'No result';
        productsElement.append(node);
    }
}

getData();

displayProducts();



// async function addToCart (code) {
//     const updatedCarts = cartsURL + '1' + code;

//     // console.log(updatedCarts);

//     const response = await fetch(updatedCarts, {method: 'POST'});
//     const result = await response.json();

//     // console.log('Look for ', code);
// }

getCarts();

// addToCart();