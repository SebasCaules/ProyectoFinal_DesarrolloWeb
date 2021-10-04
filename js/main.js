const btnAdd = document.getElementById("btnCatalogo");

let arrayProductos = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/8145RpwlT1L._SX355_.jpg",
    nombre: "The Wall",
    banda: "Pink Floyd",
    precio: 5000,
    cantidadLPs: 2,
    duracion: [1, 45],
    fehcaEntrada: [22, 08]
  },
  {
    img: "https://www.efeeme.com/wp-content/uploads/supertramp-16-07-13-a.jpg",
    nombre: "Breakfast in America",
    banda: "Supertramp",
    descripcion: "",
    precio: 2500,
    cantidadLPs: 1,
    duracion: [0, 45],
    fehcaEntrada: [22, 08]
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Supertramp_-_Even_in_the_Quietest_Moments.jpg/220px-Supertramp_-_Even_in_the_Quietest_Moments.jpg",
    nombre: "Even in the quitest moments",
    banda: "Supertramp",
    precio: 2750,
    cantidadLPs: 1,
    duracion: [0, 45],
    fehcaEntrada: [22, 08]
  },
  {
    img: "https://4.bp.blogspot.com/-19fALnGXDVI/TYgGwRSAHhI/AAAAAAAAA8E/Hiz1dmdmkHI/s1600/hablando-a-tu-coraz%25C3%25B3n.jpg",
    nombre: "Tango",
    banda: "Charly Garcia, Pedro Aznar",
    precio: 2500,
    cantidadLPs: 1,
    duracion: [0, 30],
    fehcaEntrada: [22, 08]
  },
  {
    img: "https://images.clarin.com/2013/08/17/SyfoZ-j3ml_720x0.jpg",
    nombre: "Clix Modernos",
    banda: "Charly Garcia",
    precio: 4500,
    cantidadLPs: 1,
    duracion: [0, 45],
    fehcaEntrada: [22, 08]
  },
  {
    img: "https://i.pinimg.com/originals/32/ff/59/32ff596ad9f170b5651c3f1e0001fed1.jpg",
    nombre: "Peperina",
    banda: "Seru Giran",
    precio: 2400,
    cantidadLPs: 1,
    duracion: [0, 45],
    fehcaEntrada: [22, 08]
  },
  {
    img: "https://images.genius.com/40ea18f3146c97a764d7e6099dcd7fc9.1000x1000x1.jpg",
    nombre: "La Grasa de las Capitales",
    banda: "Seru Giran",
    precio: 5700,
    cantidadLPs: 1,
    duracion: [1, 20],
    fehcaEntrada: [22, 08]
  },
  {
    img: "https://img.discogs.com/1gcRIIOL3sxo_GfE_2hGZFvR_ok=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6377375-1625425102-6846.jpeg.jpg",
    nombre: "Vida",
    banda: "Chico Buarque",
    precio: 1500,
    cantidadLPs: 1,
    duracion: [0, 30],
    fehcaEntrada: [22, 08]
  },
  {
    img: "https://miro.medium.com/max/1400/0*MDgb-RBa1vBVNfrs.jpg",
    nombre: "Construcao",
    banda: "Chico Buarque",
    precio: 1200,
    cantidadLPs: 1,
    duracion: [0, 35],
    fehcaEntrada: [22, 08]
  },
  {
    img: "https://http2.mlstatic.com/D_NQ_NP_683357-MLA46508378619_062021-W.jpg",
    nombre: "Bajo Belgrano",
    banda: "Spinetta Jade",
    precio: 3500,
    cantidadLPs: 1,
    duracion: [0, 40],
    fehcaEntrada: [22, 08]
  },
];

const contenedorProductos = document.getElementById("productos");

arrayProductos.forEach((producto) => {
  const div = document.createElement("div");
  div.className = "card-img-top card col-md-4 justify-content-around";
  div.style = "width: 22rem; margin-top: 30px";
  div.innerHTML = `
                        <img
                        class="card-img-top"
                        src="${producto.img}"
                        alt="${producto.nombre} Imagen Portada"
                        />
                        <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <h6 class="card-title">${producto.banda}</h6>
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">Fecha de Entrada : ${producto.fehcaEntrada[0]} / ${producto.fehcaEntrada[1]}</li>
                        <li class="list-group-item">${producto.precio} $</li>
                        <li class="list-group-item">Contiene ${producto.cantidadLPs} LP('s)</li>
                        <li class="list-group-item">${producto.duracion[0]} hora y ${producto.duracion[1]} minutos</li>
                        </ul>
                        <div class="card-body">
                        <a href="catalogo.html" class="card-link">Ir al Catalogo</a>
                        <a href="#" class="card-link">Escuchar en Spotify</a>
                        </div>
                    `;
  contenedorProductos.appendChild(div);
});
