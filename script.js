const carrito = [];

const shoes = [
    { code: 1, model: 'Nike Jordan 1 mid', price: 50000 },
    { code: 2, model: 'Nike Air Force 1', price: 40000 },
    { code: 3, model: 'Nike Court Vision Low', price: 54000 },
    { code: 4, model: 'Nike Air Max Excee', price: 25000 },
    { code: 5, model: 'Nike Air Max 90', price: 19800 },
    { code: 6, model: 'Nike Revolution 5', price: 32000 }
];

const cartList = document.getElementById('cart-list');
const cartTotal = document.getElementById('cart-total');

function searchShoe(code) {
    return shoes.find((shoe) => shoe.code === parseInt(code));
}

function checkout() {
    if (carrito.length === 0) {
        console.warn("No hay nada agregado al carrito.");
        return;
    }

    const shoppingTotal = carrito.reduce((total, shoe) => total + shoe.price, 0);
    alert('El valor final es de: $' + shoppingTotal);

    let answer = confirm("¿Estás seguro que querés confirmar el pago?");
    if (answer === true) {
        alert('Te informamos que tu pago de $' + shoppingTotal + " fue confirmado. ¡Muchas gracias por su compra!");
        carrito.length = 0;
        updateCart();
    }
}

function addToCart(chosenShoe) {
    carrito.push(chosenShoe);
    alert(chosenShoe.model + ' ha sido agregada a su carrito. ');
    updateCart();
}

function updateCart() {
    cartList.innerHTML = '';
    let total = 0;

    carrito.forEach((shoe) => {
        const li = document.createElement('li');
        li.textContent = `${shoe.model} - $${shoe.price}`;
        cartList.appendChild(li);
        total += shoe.price;
    });

    cartTotal.textContent = total;
}

function buy() {
    let code = prompt("Seleccioná la zapatilla que quieras por el código numérico:");

    if (!parseInt(code)) {
        alert("El código ingresado es incorrecto.");
        let answer = confirm("¿Querés probar otra vez?");
        if (answer === true) {
            buy();
        }
        return;
    }

    let chosenShoe = searchShoe(code);

    if (!chosenShoe) {
        alert("El código ingresado es incorrecto.");
        return;
    }

    addToCart(chosenShoe);

    let answer = confirm("¿Querés llevar otra zapatilla?");
    if (answer === true) {
        buy();
    } else {
        checkout();
    }
}

// Inicializar la página
updateCart();

// ...

function addToCart(code) {
    const chosenShoe = searchShoe(code);

    if (chosenShoe) {
        carrito.push(chosenShoe);
        alert(chosenShoe.model + ' ha sido agregada a su carrito. ');
        updateCart();
    } else {
        alert("El código ingresado es incorrecto.");
    }
}

function checkout() {
    if (carrito.length === 0) {
        console.warn("No hay nada agregado al carrito.");
        return;
    }

    const shoppingTotal = carrito.reduce((total, shoe) => total + shoe.price, 0);
    alert('El valor final es de: $' + shoppingTotal);

    let answer = confirm("¿Estás seguro que querés confirmar el pago?");
    if (answer === true) {
        alert('Te informamos que tu pago de $' + shoppingTotal + " fue confirmado. ¡Muchas gracias por su compra!");
        carrito.length = 0;
        updateCart();
    }
}

// ...

