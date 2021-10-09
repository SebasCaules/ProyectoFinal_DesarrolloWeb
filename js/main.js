// Array de Productos


let arrayProductos = [
  {
    id : 0,
    img: "https://images-na.ssl-images-amazon.com/images/I/8145RpwlT1L._SX355_.jpg",
    nombre: "The Wall",
    banda: "Pink Floyd",
    precio: 5000,
    cantidadLPs: 2,
    duracion: [1, 45],
    fechaEntrada: [22, 08]
  },
  {
    id : 1,
    img: "https://www.efeeme.com/wp-content/uploads/supertramp-16-07-13-a.jpg",
    nombre: "Breakfast in America",
    banda: "Supertramp",
    descripcion: "",
    precio: 2500,
    cantidadLPs: 1,
    duracion: [0, 45],
    fechaEntrada: [22, 08]
  },
  {
    id : 2,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Supertramp_-_Even_in_the_Quietest_Moments.jpg/220px-Supertramp_-_Even_in_the_Quietest_Moments.jpg",
    nombre: "Even in the quitest moments",
    banda: "Supertramp",
    precio: 2750,
    cantidadLPs: 1,
    duracion: [0, 45],
    fechaEntrada: [22, 08]
  },
  {
    id : 3,
    img: "https://4.bp.blogspot.com/-19fALnGXDVI/TYgGwRSAHhI/AAAAAAAAA8E/Hiz1dmdmkHI/s1600/hablando-a-tu-coraz%25C3%25B3n.jpg",
    nombre: "Tango",
    banda: "Charly Garcia, Pedro Aznar",
    precio: 2500,
    cantidadLPs: 1,
    duracion: [0, 30],
    fechaEntrada: [22, 08]
  },
  {
    id : 4,
    img: "https://images.clarin.com/2013/08/17/SyfoZ-j3ml_720x0.jpg",
    nombre: "Clix Modernos",
    banda: "Charly Garcia",
    precio: 4500,
    cantidadLPs: 1,
    duracion: [0, 45],
    fechaEntrada: [22, 08]
  },
  {
    id : 5,
    img: "https://i.pinimg.com/originals/32/ff/59/32ff596ad9f170b5651c3f1e0001fed1.jpg",
    nombre: "Peperina",
    banda: "Seru Giran",
    precio: 2400,
    cantidadLPs: 1,
    duracion: [0, 45],
    fechaEntrada: [22, 08]
  },
  {
    id : 6,
    img: "https://images.genius.com/40ea18f3146c97a764d7e6099dcd7fc9.1000x1000x1.jpg",
    nombre: "La Grasa de las Capitales",
    banda: "Seru Giran",
    precio: 5700,
    cantidadLPs: 1,
    duracion: [1, 20],
    fechaEntrada: [22, 08]
  },
  {
    id : 7,
    img: "https://img.discogs.com/1gcRIIOL3sxo_GfE_2hGZFvR_ok=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6377375-1625425102-6846.jpeg.jpg",
    nombre: "Vida",
    banda: "Chico Buarque",
    precio: 1500,
    cantidadLPs: 1,
    duracion: [0, 30],
    fechaEntrada: [22, 08]
  },
  {
    id : 8,
    img: "https://miro.medium.com/max/1400/0*MDgb-RBa1vBVNfrs.jpg",
    nombre: "Construcao",
    banda: "Chico Buarque",
    precio: 1200,
    cantidadLPs: 1,
    duracion: [0, 35],
    fechaEntrada: [22, 08]
  },
  {
    id : 9,
    img: "https://http2.mlstatic.com/D_NQ_NP_683357-MLA46508378619_062021-W.jpg",
    nombre: "Bajo Belgrano",
    banda: "Spinetta Jade",
    precio: 3500,
    cantidadLPs: 1,
    duracion: [2, 1],
    fechaEntrada: [22, 08]
  },
];

// Inicializador del Catalogo
const contenedorProductos = document.getElementById("productos");




function duracionCheck(producto) {
  let duracionChangeResult = '';
  let duracionChangeMin = '';

  //Check Minutos
  if (producto.duracion[1] == 1) {
    duracionChangeMin = `${producto.duracion[1]} minuto`;
  } else {
    duracionChangeMin = `${producto.duracion[1]} minutos`;
  };

  //Check Horas
  if (producto.duracion[0] == 0) {
    return duracionChangeMin;
  } else {
  if (producto.duracion[0] == 1) {
      duracionChangeResult = `${producto.duracion[0]} hora y ${duracionChangeMin}`;
    } else {
      duracionChangeResult = `${producto.duracion[0]} horas y ${duracionChangeMin}`;
    };
  };
  return duracionChangeResult;
}

let idCounter = 0;

arrayProductos.forEach((producto) => {
  //Check de la duracion
  let duracionChange = duracionCheck(producto);

  const div = document.createElement("div");
  div.className = "card-img-top card";
  div.id = "cardsContainer"
  div.style = "width: 22rem; margin-top: 30px";
  div.innerHTML = `
                        <div>
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
                          <li class="list-group-item">Fecha de Entrada : ${producto.fechaEntrada[0]} / ${producto.fechaEntrada[1]}</li>
                          <li class="list-group-item">${producto.precio} $</li>
                          <li class="list-group-item">Contiene ${producto.cantidadLPs} LP('s)</li>
                          <li class="list-group-item">${duracionChange}</li>
                          </ul>
                          <div class="card-body">
                          <a href="#" class="card-link">Escuchar en Spotify</a>
                          </div>
                          <button class="btn" id="addBtn" value="${idCounter}" type="submit">Añadir al Carrito</button>
                        </div>
                    `;
  contenedorProductos.appendChild(div);
  idCounter++;
});


//Generador de borde verde cuando el boton es clickeado
const borderAdquierBtn = document.getElementById('addBtn');
const borderAdquier = document.getElementById('cardsContainer');


borderAdquierBtn.addEventListener('click', () => {
  borderAdquier.classList.toggle('border')
  setTimeout(function(){
    borderAdquier.classList.toggle('border');
  },500)
})