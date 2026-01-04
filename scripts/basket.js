const basket = {};


function addToBasket(productName, productPrice) {

    if (basket[productName]) {
        basket[productName].quantity += 1;
        basket[productName].totalPrice += productPrice;
    } else {
        basket[productName] = {
            quantity: 1,
            totalPrice: productPrice
        }


    }
    updateBasket();
    console.log();

}

function updateBasket() {
    const basketList = document.getElementById('cart');
    basketList.innerHTML = '';
    for (let product in basket) {
        const listItem = document.createElement('li');
        const removeItem = document.createElement('button');
        listItem.innerText = `${product} - Quantity: ${basket[product].quantity} - Total Price: ${basket[product].totalPrice}`;
        removeItem.innerText = 'Remove Item';

        removeItem.addEventListener('click', () => {

            removeFromBasket(product);
            console.log();
        })


        basketList.appendChild(listItem);
        basketList.appendChild(removeItem);
    }
}

function removeFromBasket(productName) {

    if (basket[productName]) {
        basket[productName].quantity -= 1;
        basket[productName].totalPrice -= basket[productName].price;
        console.log();
    }

    if(basket[productName].quantity <= 0){
        delete basket[productName];
    }

    updateBasket();

}