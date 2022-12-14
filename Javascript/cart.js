/**************************** Llamado de products (LocalStorage) ****************************/
let productsEnCarrito = localStorage.getItem("in-cart-products");
productsEnCarrito = JSON.parse(productsEnCarrito);

/**************************** Llamado de elementos HTML ****************************/
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoproducts = document.querySelector("#carrito-products");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let buttonesEliminar = document.querySelectorAll(".carrito-product-eliminar")
const buttonVaciar = document.querySelector("#carrito-acciones-vaciar")
const buttonComprar = document.querySelector("#carrito-acciones-comprar")
const contenedorTotal = document.querySelector("#total")


/**************************** Cargar products al carrito ****************************/
function productUploadCarrito() {
    if (productsEnCarrito && productsEnCarrito.length > 0) {
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoproducts.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        contenedorCarritoproducts.innerHTML = "";

        productsEnCarrito.forEach(product => {
            const div = document.createElement("div");
            div.classList.add("carrito-product")
            div.innerHTML = `
                <img class="carrito-product-img" src="${product.img}" alt="${product.titulo}">
                <div class="carrito-product-titulo">
                    <small>Title</small>
                    <h3>${product.titulo}</h3>
                </div>
                <div class="carrito-product-cantidad">
                    <small>Quantity</small>
                    <p>${product.cantidad}</p>
                </div>
                <div class="carrito-product-price">
                    <small>Price</small>
                    <p>$${product.price}</p>
                </div>
                <div class="carrito-product-subtotal">
                    <small>Subtotal</small>
                    <p>$${product.price * product.cantidad}</p>
                </div>
                <button class="carrito-product-eliminar" id="${product.id}"><i class="bi bi-trash-fill"></i></button>
                `
            contenedorCarritoproducts.append(div);
        })
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoproducts.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }
    updatebuttonesEliminar()
    updateTotal()
}
productUploadCarrito()

/**************************** Actualizacion del button "Eliminar" ****************************/
function updatebuttonesEliminar() {
    buttonesEliminar = document.querySelectorAll(".carrito-product-eliminar");
    buttonesEliminar.forEach(button => {
        button.addEventListener("click", eliminarDelCarrito);
    });
}

/**************************** Funcion al button "Eliminar" ****************************/
function eliminarDelCarrito(e) {
    const idbutton = e.currentTarget.id;
    const index = productsEnCarrito.findIndex(product => product.id === idbutton);

    productsEnCarrito.splice(index, 1);
    productUploadCarrito();

    localStorage.setItem("in-cart-products", JSON.stringify(productsEnCarrito));
}

/**************************** button vaciado del carrito ****************************/
buttonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
    productsEnCarrito.length = 0;
    localStorage.setItem("in-cart-products", JSON.stringify(productsEnCarrito));
    productUploadCarrito();
}

/**************************** Actualizacion del monto total ****************************/
function updateTotal() {
    const totalCalculado = productsEnCarrito.reduce((acc, product) => acc + (product.price * product.cantidad), 0);
    total.innerText = `US $${totalCalculado}`
}

/**************************** Accion compra ****************************/
buttonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {
    productsEnCarrito.length = 0;
    localStorage.setItem("in-cart-products", JSON.stringify(productsEnCarrito));
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoproducts.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
}