let products = [
    {
        id: "1-harry",
        titulo: "Harry Potter's Wand",
        price: 32,
        img: "../assets/wand-harry-potter.png",
        categoria: {
            nombre:"Gryffindor",
            id:"gryffindor",
        }
    },
    {
        id: "2-ron", 
        titulo: "Ron Weasley's Wand", 
        price: 32, 
        img:"../assets/wand-ron-weasley.png",
        categoria: {
            nombre:"Gryffindor",
            id:"gryffindor",
        }
    },
    {
        id: "3-hermione", 
        titulo: "Hermione Granger's Wand", 
        price: 32, 
        img:"../assets/wand-hermione-granger.png",
        categoria: {
            nombre:"Gryffindor",
            id:"gryffindor",
        }
    },
    {
        id: "4-draco", 
        titulo: "Draco Malfoy's Wand", 
        price: 32, 
        img:"../assets/wand-draco-malfoy.png",
        categoria: {
            nombre:"Slytherin",
            id:"slytherin",
        }
    },
    {
        id: "5-albus", 
        titulo: "Albus Dumbledore's Wand", 
        price: 32, 
        img:"../assets/wand-albus-dumbledore.png",
        categoria: {
            nombre:"Gryffindor",
            id:"gryffindor",
        }
    },
    {
        id: "6-voldemort", 
        titulo: "Lord Voldemort's Wand", 
        price: 32, 
        img:"../assets/wand-lord-voldemort.png",
        categoria: {
            nombre:"Slytherin",
            id:"slytherin",
        }
    },
    {
        id: "7-sirius", 
        titulo: "Sirius Black's Wand", 
        price: 32, 
        img:"../assets/wand-sirius-black.png",
        categoria: {
            nombre:"Gryffindor",
            id:"gryffindor",
        }
    },
    {
        id: "8-bellatrix", 
        titulo: "Bellatrix Lestrange's Wand", 
        price: 32, 
        img:"../assets/wand-bellatrix-lestrange.png",
        categoria: {
            nombre:"Slytherin",
            id:"slytherin",
        }
    },
    {
        id: "9-severus", 
        titulo: "Severus Snape's Wand", 
        price: 32, 
        img:"../assets/wand-severus-snape.png",
        categoria: {
            nombre:"Slytherin",
            id:"slytherin",
        }
    },
    {
        id: "10-luna", 
        titulo: "Luna Lovegood's Wand", 
        price: 32, 
        img:"../assets/wand-luna-lovegood.png",
        categoria: {
            nombre:"Ravenclaw",
            id:"ravenclaw",
        },
    },
    {
        id: "11-newt", 
        titulo: "Newt Scamander's Wand", 
        price: 32, 
        img:"../assets/wand-newt-scamander.png",
        categoria: {
            nombre:"Hufflepuff",
            id:"hufflepuff",
        },
    },
    {
        id: "12-diadem-ravenclaw", 
        titulo: "The Diadem of Ravenclaw Wand", 
        price: 33, 
        img:"../assets/wand-ravenclaw-diadem.png",
        categoria: {
            nombre:"Ravenclaw",
            id:"ravenclaw",
        },
    },
    {
        id: "13-locket-slytherin", 
        titulo: "The Locket Of Slytherin Wand", 
        price: 33, 
        img:"../assets/wand-slytherin-locket.png",
        categoria: {
            nombre:"Slytherin",
            id:"slytherin",
        },
    },
    {
        id: "14-mascot-slytherin", 
        titulo: "The Slytherin Mascot Wand", 
        price: 33, 
        img:"../assets/wand-slytherin-mascot.png",
        categoria: {
            nombre:"Slytherin",
            id:"slytherin",
        },
    },
    {
        id: "15-phoenix", 
        titulo: "Phoenix Wand", 
        price: 33, 
        img:"../assets/wand-phoenix.png",
        categoria: {
            nombre:"Gryffindor",
            id:"gryffindor",
        },
    },
    {
        id: "16-cup-hufflepuff", 
        titulo: "The Cup of Hufflepuff Wand", 
        price: 33, 
        img:"../assets/wand-hufflepuff-cup.png",
        categoria: {
            nombre:"Hufflepuff",
            id:"hufflepuff",
        },
    },
    {
        id: "17-ginny", 
        titulo: "Ginny Weasley's Wand", 
        price: 32, 
        img:"../assets/wand-ginny-weasley.png",
        categoria: {
            nombre:"Gryffindor",
            id:"gryffindor",
        },
    },
    {
        id: "18-minerva", 
        titulo: "Professor McGonagall's Wand", 
        price: 32, 
        img:"../assets/wand-minerva-mcgonagall.png",
        categoria: {
            nombre:"Gryffindor",
            id:"gryffindor",
        },
    },
    {
        id: "20-mascot-ravenclaw", 
        titulo: "The Ravenclaw Mascot Wand", 
        price: 33, 
        img:"../assets/wand-ravenclaw-mascot.png",
        categoria: {
            nombre:"Ravenclaw",
            id:"ravenclaw",
        },
    },
    {
        id: "21-mascot-hufflepuff", 
        titulo: "The Hufflepuff Mascot Wand", 
        price: 33, 
        img:"../assets/wand-hufflepuff-mascot.png",
        categoria: {
            nombre:"Hufflepuff",
            id:"hufflepuff",
        },
    },
    {
        id: "22-mascot-gryffindor", 
        titulo: "The Gryffindor Mascot Wand", 
        price: 33, 
        img:"../assets/wand-gryffindor-mascot.png",
        categoria: {
            nombre:"Gryffindor",
            id:"gryffindor",
        },
    },
    {
        id: "23-horace", 
        titulo: "Professor Slughorn's Wand", 
        price: 32, 
        img:"../assets/wand-horace-slughorn.png",
        categoria: {
            nombre:"Slytherin",
            id:"slytherin",
        },
    },
    {
        id: "24-cedric", 
        titulo: "Cedric Diggory's Wand", 
        price: 32, 
        img:"../assets/wand-cedric-diggory.png",
        categoria: {
            nombre:"Hufflepuff",
            id:"hufflepuff",
        },
    },
    {
        id: "25-nymphadora", 
        titulo: "Nymphadora Tonks's Wand", 
        price: 32, 
        img:"../assets/wand-nymphadora-tonks.png",
        categoria: {
            nombre:"Hufflepuff",
            id:"hufflepuff",
        },
    },
    {
        id: "26-cho", 
        titulo: "Cho Chang's Wand", 
        price: 32, 
        img:"../assets/wand-cho-chang.png",
        categoria: {
            nombre:"Ravenclaw",
            id:"ravenclaw",
        },
    },
    {
        id: "27-fred", 
        titulo: "Fred Weasley's Wand", 
        price: 32, 
        img:"../assets/wand-fred-weasley.png",
        categoria: {
            nombre:"Gryffindor",
            id:"gryffindor",
        },
    },
    {
        id: "28-george", 
        titulo: "George Weasley's Wand", 
        price: 32, 
        img:"../assets/wand-george-weasley.png",
        categoria: {
            nombre:"Gryffindor",
            id:"gryffindor",
        },
    },
    {
        id: "29-leta", 
        titulo: "Leta Lestrange's Wand", 
        price: 32, 
        img:"../assets/wand-leta-lestrange.png",
        categoria: {
            nombre:"Slytherin",
            id:"slytherin",
        },
    },
    {
        id: "30-remus", 
        titulo: "Professor Lupin's Wand", 
        price: 32, 
        img:"../assets/wand-remus-lupin.png",
        categoria: {
            nombre:"Gryffindor",
            id:"gryffindor",
        },
    },
    {
        id: "31-neville", 
        titulo: "Neville Longbottom's Wand", 
        price: 32, 
        img:"../assets/wand-neville-longbottom.png",
        categoria: {
            nombre:"Gryffindor",
            id:"gryffindor",
        },
    },
    {
        id: "32-theseus", 
        titulo: "Theseus Scamander's Wand", 
        price: 32, 
        img:"../assets/wand-theseus-scamander.png",
        categoria: {
            nombre:"Hufflepuff",
            id:"hufflepuff",
        },
    },
    {
        id: "33-filius", 
        titulo: "Filius Flitwick's Wand", 
        price: 32, 
        img:"../assets/wand-filius-flitwick.png",
        categoria: {
            nombre:"Ravenclaw",
            id:"ravenclaw",
        },
    },
    {
        id: "34-xenophilius", 
        titulo: "Xenophilius Lovegood's Wand", 
        price: 32, 
        img:"../assets/wand-xenophilius-lovegood.png",
        categoria: {
            nombre:"Ravenclaw",
            id:"ravenclaw",
        },
    },
    {
        id: "35-loyal", 
        titulo: "Loyal Magic Caster Wand", 
        price: 150, 
        img:"../assets/wand-loyal.jpg",
        categoria: {
            nombre:"Magic Caster",
            id:"magic-caster",
        },
    },
    {
        id: "36-defiant", 
        titulo: "Defiant Magic Caster Wand", 
        price: 150, 
        img:"../assets/wand-defiant.jpg",
        categoria: {
            nombre:"Magic Caster",
            id:"magic-caster",
        },
    },
    {
        id: "37-heroic", 
        titulo: "Heroic Magic Caster Wand", 
        price: 150, 
        img:"../assets/wand-heroic.jpg",
        categoria: {
            nombre:"Magic Caster",
            id:"magic-caster",
        },
    },
];


// fetch("../productos.json")
//     .then(response => response.json())
//     .then(data => {
//         productUpload(data)
//     })

/**************************** ID Calling ****************************/
const productContainer = document.querySelector("#product-container")
const productWishlist = document.querySelector("#wishlist")
const catButtons = document.querySelectorAll(".btn-cat")
const mainTitle = document.querySelector("#main-title")
let addButtons = document.querySelectorAll(".add-product")
const number = document.querySelector("#number");

/**************************** Upload products ****************************/
function productUpload(data) {
    productContainer.innerHTML="";
    data.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("products");
        div.innerHTML = `
        <img class="product-img" src="${product.img}" alt="${product.titulo}">
        <div class="product-detalles">
            <h3 class="product-titulo">${product.titulo}</h3>
            <p class="product-price">US $${product.price}</p>
            <button class="add-product" id="${product.id}">Add</button>
        </div>
        `
        productContainer.append(div);
    })
    updateaddButtons()
}
productUpload(products);

/**************************** Categories Buttons ****************************/
catButtons.forEach(button => {
    button.addEventListener("click", (e) => {

        catButtons.forEach(button => button.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productCategoria = products.find(product => product.categoria.id === e.currentTarget.id);
            mainTitle.innerText = productCategoria.categoria.nombre;
            const productsbutton = products.filter(product => product.categoria.id === e.currentTarget.id);
            productUpload(productsbutton);
        } else {
            mainTitle.innerText = "All products";
            productUpload(products);
        }
    })
})

/**************************** Actualizacion de los buttones agregar ****************************/
function updateaddButtons() {
    addButtons = document.querySelectorAll(".add-product");
    addButtons.forEach(button => {
        button.addEventListener("click", agregarAlCarrito);
    });
}

let productsEnCarrito;
let productsEnCarritoLS = localStorage.getItem("in-cart-products");

if (productsEnCarritoLS) {updateNumber
    productsEnCarrito =  JSON.parse(productsEnCarritoLS);
    updateNumber()
} else {
    productsEnCarrito = [];
}

/**************************** Agregar products carrito ****************************/
function agregarAlCarrito(e) {
    const idbutton = e.currentTarget.id;
    const productAgregado = products.find(product => product.id === idbutton);
    
    if(productsEnCarrito.some(product => product.id === idbutton)) {
        const index = productsEnCarrito.findIndex(product => product.id === idbutton);
        productsEnCarrito[index].cantidad++;
    } else {
        productAgregado.cantidad = 1;
        productsEnCarrito.push(productAgregado);
    };
    updateNumber();

    localStorage.setItem("in-cart-products", JSON.stringify(productsEnCarrito))
};

/**************************** update contador del carrito ****************************/
function updateNumber() {
    let nuevoNumber = productsEnCarrito.reduce((acc, product) => acc+product.cantidad, 0)
    number.innerText = nuevoNumber
}



/**************************** Abrir wishlist ****************************/

// const botonModalDerecha = document.querySelector("#boton-modal-derecha");
// const modalDerecha = document.querySelector("#modal-derecha");
// const cerrarModalDerecha = document.querySelector("#cerrar-modal-derecha");

// botonModalDerecha.addEventListener("click", () => {
//     modalDerecha.classList.add("active");
// }) 

// cerrarModalDerecha.addEventListener("click", () => {
//     modalDerecha.classList.remove("active");
// })


/**************************** Cargar productos wishlist ****************************/



/**************************** Log in ****************************/
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const buttonLogin = document.querySelector("#button-login")

buttonLogin.addEventListener("click", (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    console.log(data)
})