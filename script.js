
const contenedor = document.getElementById("productos");
const carritoDiv = document.getElementById("carrito");
const itemsDiv = document.getElementById("items");
const totalSpan = document.getElementById("total");
const cantidadSpan = document.getElementById("cantidad");

let carrito = [];
const productos = [
    {
        id: 1,
        nombre: "Candado dorado 50mm",
        precio: 0,
        img: "imgs/herramientas/candado-dorado-50mm.jpeg"
    },
    {
        id: 2,
        nombre: "Cepillo de acero rojo",
        precio: 0,
        img: "imgs/herramientas/cepillo-de-acero-rojo.jpeg"
    },
    {
        id: 3,
        nombre: "Cuchara albañil 8\"",
        precio: 0,
        img: "imgs/herramientas/cichara-albañol-8``.jpeg"
    },
    {
        id: 4,
        nombre: "Cinta 5mt Giantop",
        precio: 0,
        img: "imgs/herramientas/cinta-5mt-giantop.jpeg"
    },
    {
        id: 5,
        nombre: "Cinta 10mt Giantop",
        precio: 0,
        img: "imgs/herramientas/cinta-10m-giantop.jpeg"
    },
    {
        id: 6,
        nombre: "Destornillador 7pcs bolsa",
        precio: 0,
        img: "imgs/herramientas/dest-x7pc-bolsa .jpeg"
    },
    {
        id: 7,
        nombre: "Destornillador 6pcs taxi blister",
        precio: 0,
        img: "imgs/herramientas/destor-6pc-taxi-blister.jpeg"
    },
    {
        id: 8,
        nombre: "Destornillador 21pcs",
        precio: 0,
        img: "imgs/herramientas/destor-21pc.jpeg"
    },
    {
        id: 9,
        nombre: "Destornillador celular",
        precio: 0,
        img: "imgs/herramientas/destor-celu.jpeg"
    },
    {
        id: 10,
        nombre: "Disco 115mm mayusta",
        precio: 0,
        img: "imgs/herramientas/disco-115mm-mayusta.jpeg"
    },
    {
        id: 11,
        nombre: "Disco 180mm 24T madera",
        precio: 0,
        img: "imgs/herramientas/disco-180mm-24ft-madera.jpeg"
    },
    {
        id: 12,
        nombre: "Disco 180mm 40T madera",
        precio: 0,
        img: "imgs/herramientas/disco-180mm-40dt-madera.jpeg"
    },
    {
        id: 13,
        nombre: "Disco 180mm corte",
        precio: 0,
        img: "imgs/herramientas/disco-180mm-corte.jpeg"
    },
    {
        id: 14,
        nombre: "Disco 180mm lija",
        precio: 0,
        img: "imgs/herramientas/disco-180mm-lases.jpeg"
    },
    {
        id: 15,
        nombre: "Disco 180mm turbo",
        precio: 0,
        img: "imgs/herramientas/disco-180mm-turbo.jpeg"
    },
    {
        id: 16,
        nombre: "Disco madera 24T 115mm",
        precio: 0,
        img: "imgs/herramientas/disco-amdera-24-115mm.jpeg"
    },
    {
        id: 17,
        nombre: "Disco corte 4.5\" bisso",
        precio: 0,
        img: "imgs/herramientas/disco-cirte-4.5-bisso.jpeg"
    },
    {
        id: 18,
        nombre: "Disco corte 115mm",
        precio: 0,
        img: "imgs/herramientas/disco-corte-115mm.jpeg"
    },
    {
        id: 19,
        nombre: "Disco flap 100",
        precio: 0,
        img: "imgs/herramientas/disco-flap-100.jpeg"
    },
    {
        id: 20,
        nombre: "Disco flap 120",
        precio: 0,
        img: "imgs/herramientas/disco-flap-120.jpeg"
    },
    {
        id: 21,
        nombre: "Disco flap A-40",
        precio: 0,
        img: "imgs/herramientas/disco-flap-a-40.jpeg"
    },
    {
        id: 22,
        nombre: "Disco láser 115mm",
        precio: 0,
        img: "imgs/herramientas/disco-lases-115mm.jpeg"
    },
    {
        id: 23,
        nombre: "Disco madera 30T bisso",
        precio: 0,
        img: "imgs/herramientas/disco-madera-30t-bisso.jpeg"
    },
    {
        id: 24,
        nombre: "Disco madera 40DT 115mm",
        precio: 0,
        img: "imgs/herramientas/DISCO-MADERA-40DT-115MM.jpeg"
    },
    {
        id: 25,
        nombre: "Disco turbo 4.5\" bisso",
        precio: 0,
        img: "imgs/herramientas/DISCO-TURBO-4.5-BISSO.jpeg"
    },
    {
        id: 26,
        nombre: "Disco turbo 115mm",
        precio: 0,
        img: "imgs/herramientas/disco-turbo-115mm.jpeg"
    },
    {
        id: 28,
        nombre: "Eslinga remolque acero 8mm",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/eslinga-remolue-acero-8mm.jpeg"
    },
    {
        id: 29,
        nombre: "Espátula 3\" BS45",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/espatula-3``-bs45.jpeg"
    },
    {
        id: 30,
        nombre: "Espátula 4\" BS46",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/espatula-4``-bs46.jpeg"
    },
    {
        id: 31,
        nombre: "Espátula 6\" BS48",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/espatula-6``-bs48.jpeg"
    },
    {
        id: 32,
        nombre: "Formón x4pcs bolsa",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/formon-x4pc-bolsa.900183.jpeg"
    },
    {
        id: 33,
        nombre: "Hidrolavadora",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/hidrolabadora.jpeg"
    },
    {
        id: 34,
        nombre: "Inflador compresor auto azul",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/inflador-compresor-caja-azul-1521.jpeg"
    },
    {
        id: 35,
        nombre: "Juego destector de billetes",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/lapiz-detector-de-billete.jpeg"
    },
    {
        id: 36,
        nombre: "Lija 100-120-180-80 amarillo",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/lija-100-120-180-80-amarillo.jpeg"
    },
    {
        id: 37,
        nombre: "Llave 3 bocas SA220",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/llave-3-boca-y-saa220.jpeg"
    },
    {
        id: 38,
        nombre: "Llave Allen grande BS109",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/llave-alen-grande-bs109.jpeg"
    },
    {
        id: 39,
        nombre: "Llave Allen mediana BS110",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/llave-alen-mediana-bs110.jpeg"
    },
    {
        id: 40,
        nombre: "Llave Allen chica BS111",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/llave-allen-chica-bs111.jpeg"
    },
    {
        id: 41,
        nombre: "Llaves combinadas x8pcs",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/llave-combinada-x8pcs-bisso bs29.jpeg"
    },
    {
        id: 42,
        nombre: "Llaves combinadas x12pcs",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/llave-combinada-x12pcs-2589.jpeg"
    },
    {
        id: 43,
        nombre: "Llaves combinadas x14pcs",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/llave-combinada-x14pcs-2590.jpeg"
    },
    {
        id: 44,
        nombre: "Llave de impacto SD7001",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/llave-de-impacto-sd7001.jpeg"
    },
    {
        id: 45,
        nombre: "Martillo 500gr Bisso",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/martillo-500gr bisso.jpeg"
    },
    {
        id: 46,
        nombre: "Martillo de fibra 80oz",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/martillo-de-fibra-80oz.jpeg"
    }
];




function renderProductos() {
    contenedor.innerHTML = "";

    productos.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
  <div class="img-box">
    <img src="${p.img}" alt="${p.nombre}">
  </div>

  <p class="codigo">Código: ${p.id}</p>
  <h3>${p.nombre}</h3>
  <p>Precio: $${p.precio}</p>
  <button onclick="agregar(${p.id})">Agregar</button>
`;

        contenedor.appendChild(card);
    });
}




function agregar(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    itemsDiv.innerHTML = "";
    let total = 0;

    carrito.forEach((p, i) => {
        total += p.precio;
        itemsDiv.innerHTML += `
      <div class="item">
        <span>${p.nombre}</span>
        <button onclick="quitar(${i})">❌</button>
      </div>
    `;
    });

    totalSpan.textContent = total;
    cantidadSpan.textContent = carrito.length;
}

function quitar(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

document.getElementById("carrito-btn").onclick = () => {
    carritoDiv.classList.toggle("oculto");
};

document.getElementById("vaciar").onclick = () => {
    carrito = [];
    actualizarCarrito();
};

renderProductos();
