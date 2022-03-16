const agregarAlCarrito = (producto) => {
    carrito.push(producto);
};

const carrito = [];

const productos = [
    { id: 1, titulo: "ESPEJO SEAGRASS", precio: 7710, stock:10, imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/797/738/products/dsc_67271-a4144a13e2f1605e1a15958939795456-640-01-21bacea219cd15508416424441269153-320-0.jpeg' },
    { id: 2, titulo: "CANASTO JIMBA", precio: 9670, stock:32, imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/797/738/products/canasto-jimbaran-1-raya-1024x10241-c76663c31d2bc0952316438974879270-640-01-1e0dccad84b158109e16468344228804-320-0.jpeg' },
    { id: 3, titulo: "CESTA JULI", precio: 2920, stock:14, imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/797/738/products/whatsapp-image-2022-01-17-at-13-50-291-59f1401021deacacf716424385456572-320-0.jpeg'},
    { id: 4, titulo: "BOTELLON DECO", precio: 5900, stock: 1, imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/797/738/products/whatsapp-image-2022-01-17-at-13-35-40-111-0dfe2ce36f8c2ff9e516424377227881-320-0.jpeg' },
    { id: 5, titulo: "PORTAVELA CAD", precio: 4420, stock: 12, imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/797/738/products/portavela-caddo1-21b7893808b5afcebd16424371194607-320-0.jpeg' },
    { id: 6, titulo: "HOJA MAGNOLIA", precio: 4630, stock: 22, imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/797/738/products/natural_seagrass_doormat-ebe4e593edb4a600f816285665328914-640-01-1c0f45fab33e4f0b4116424448815361-320-0.jpeg' },
    { id: 7, titulo: "JARRON JACIN", precio: 9070, stock: 45, imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/797/738/products/whatsapp-image-2022-01-17-at-13-19-091-928a1a46a5de3b377916424364203235-320-0.jpeg' },
    { id: 8, titulo: "CANASTO TOMI", precio: 3300, stock: 19, imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/797/738/products/tom-set1-4340c3d701c7b9542b16424277447428-320-0.jpeg' },
    { id: 9, titulo: "BANDEJA PARIS", precio: 3050, stock: 3, imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/797/738/products/dsc_7257-21-fd5c379c50ac6a50d515982926044342-640-01-150bb01ac30f45577816424428921586-320-0.jpeg' },
    { id: 10, titulo: "JARRON ROSE", precio: 15080, stock: 0, imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/797/738/products/img_05371-477346f933e624b45316384745890032-320-0.jpg' },
    { id: 11, titulo: "MUG CARRARA", precio: 1550, stock: 23, imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/797/738/products/0106f75-11-6e76cb1a0aa6ffe32116466857072696-320-0.jpeg' },
    { id: 12, titulo: "BANDEJA BARI", precio: 3480, stock: 0, imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/797/738/products/dsc_90261-d131342a19d7e5a60a16075589880581-640-01-1dfe50bb969169c88716424405589001-320-0.jpeg' },
    { id: 13, titulo: "BANDEJA SINTETICA", precio: 1790, stock: 59, imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/797/738/products/0503098-11-6971d7a855257bec4616466866455121-320-0.jpeg' },

];

generarCards(productos);

function generarCards(productosAMostrar){
    let acumuladorDeCards = ``;
    productosAMostrar.forEach((elementoDelArray) => {
        acumuladorDeCards += `<div class="col mb-5">
        <div class="card h-100">
            <!-- Sale badge-->
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
                ${(elementoDelArray.stock > 0) ? 'Esta en venta' : 'Out stock'}
            </div>
            <!-- Product image-->
            <img class="card-img-top" src="${elementoDelArray.imagen}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${elementoDelArray.titulo}</h5>
                    <!-- Product price-->
                    <span class="text-muted text-decoration-line-through"></span>
                    $${elementoDelArray.precio}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
            </div>
        </div>
    </div>`;
    });
    mostrarCardsEnElHTML(acumuladorDeCards);
}

function mostrarCardsEnElHTML(cards) {
    document.getElementById("listado-productos").innerHTML = cards;
};


function buscarProducto() {
    const nombreProductoBuscado = document.getElementById("producto-buscado").value.toUpperCase().trim();

    const productosEncontrados = productos.filter((producto) => {
        return producto.titulo.toUpperCase().match(nombreProductoBuscado);
    });

    generarCards(productosEncontrados);
}