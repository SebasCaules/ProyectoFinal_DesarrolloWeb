function productos(id, nombre, banda, precio, cantidadLPs, duracion) {
    this.id = id;
    this.nombre = nombre;
    this.banda = banda;
    this.precio = precio;
    this.cantidadLPs = cantidadLPs;
    this.duracion = duracion;
};

let arrayProductos = [
    { img: 'https://via.placeholder.com/200', nombre: "The Wall",
    banda: "Pink Floyd", precio: 5000, cantidadLPs: 2, duracion: [1, 45]},
    { img: 'https://via.placeholder.com/200', nombre: "Breakfast in America",
    banda: "Supertramp", precio: 2500, cantidadLPs: 1, duracion: [0, 45]},
    { img: 'https://via.placeholder.com/200', nombre: "Even in the quitest moments",
    banda: "Supertramp", precio: 2750, cantidadLPs: 1, duracion: [0, 45]},
    { img: 'https://via.placeholder.com/200', nombre: "Tango",
    banda: "Charly Garcia, Pedro Aznar", precio: 2500, cantidadLPs: 1, duracion: [0, 30]},
    { img: 'https://via.placeholder.com/200', nombre: "Clix Modernos",
    banda: "Charly Garcia", precio: 4500, cantidadLPs: 1, duracion: [0, 45]},
    { img: 'https://via.placeholder.com/200', nombre: "Peperina",
    banda: "Seru Giran", precio: 2400, cantidadLPs: 1, duracion: [0, 45]},
    { img: 'https://via.placeholder.com/200', nombre: "La Grasa de las Capitales",
    banda: "Seru Giran", precio: 5700, cantidadLPs: 1, duracion: [1, 20]},
    { img: 'https://via.placeholder.com/200', nombre: "Vida",
    banda: "Chico Buarque", precio: 1500, cantidadLPs: 1, duracion: [0, 30]},
    { img: 'https://via.placeholder.com/200', nombre: "O que Sera",
    banda: "Chico Buarque", precio: 1200, cantidadLPs: 1, duracion: [0, 35]},
    { img: 'https://via.placeholder.com/200', nombre: "Bajo Belgrano",
    banda: "Spinetta Jade", precio: 3500, cantidadLPs: 1, duracion: [0, 40]}
];


function duracionCondi(duracion) {
    if (this.duracion[0] == 0) {
        this.duracion = this
    }
}

document.getElementById('carrito').innerHTML = `Carrito ${arrayProductos.length}`

const contenedorProductos = document.getElementById('productos')

arrayProductos.forEach((producto) => {

    const div = document.createElement('div')
    div.className = "card-img-top productosDiv"
    div.style = "width: 18rem; margin: 10px auto auto auto"
    div.innerHTML = `
                    <img src=${producto.img} class="card-img-top" alt="...">
                    <div class="card-body divProductos">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <h6 class="card-title">${producto.banda}</h6>
                        <p class="card-text">Precio: $${producto.precio}</p>
                        <p class="card-text">${producto.duracion[0]} h ${producto.duracion[1]} m</p>
                        <p class="card-text">Cantidad LPs: ${producto.cantidadLPs}</p>
                    </div>
                `
    contenedorProductos.appendChild(div)

})

