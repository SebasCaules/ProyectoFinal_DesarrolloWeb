// Cuenta de usuario en LS
let usuario = onClick()
let usuarioLS = localStorage.getItem(usuario);

function display() {
  $(".dpUsuarios").addClass("dpActivo");
}

$("#dpCerrar").click(() => {
  $(".dpUsuarios").removeClass("dpActivo");
});

function onClick() {
  $("#dpSubmit").on("click", () => {
    let usuario;
    usuario = $("#dpInput").val();
    console.log(usuario);
    localStorage.setItem("usuario", usuario);
    $(".dpUsuarios").removeClass("dpActivo");
    return usuario
  });
}

if (!usuarioLS) {
  display();
  usuario
} else {
  usuario = usuarioLS;
}

// Array de Productos
class Productos {
  constructor(
    id,
    img,
    nombre,
    banda,
    precio,
    cantidadLPs,
    duracion,
    fechaEntrada
  ) {
    this.id = id;
    this.img = img;
    this.nombre = nombre;
    this.banda = banda;
    this.precio = precio;
    this.cantidadLPs = cantidadLPs;
    this.duracion = duracion;
    this.fechaEntrada = fechaEntrada;
  }
}
const arrayProductos = [
  new Productos(
    0,
    "https://images-na.ssl-images-amazon.com/images/I/8145RpwlT1L._SX355_.jpg",
    "The Wall",
    "Pink Floyd",
    5000,
    2,
    [1, 45],
    [22, 08]
  ),
  new Productos(
    1,
    "https://www.efeeme.com/wp-content/uploads/supertramp-16-07-13-a.jpg",
    "Breakfast in America",
    "Supertramp",
    2500,
    1,
    [0, 45],
    [22, 08]
  ),
  new Productos(
    2,
    "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Supertramp_-_Even_in_the_Quietest_Moments.jpg/220px-Supertramp_-_Even_in_the_Quietest_Moments.jpg",
    "Even in the quitest moments",
    "Supertramp",
    2750,
    1,
    [0, 45],
    [22, 08]
  ),
  new Productos(
    3,
    "https://4.bp.blogspot.com/-19fALnGXDVI/TYgGwRSAHhI/AAAAAAAAA8E/Hiz1dmdmkHI/s1600/hablando-a-tu-coraz%25C3%25B3n.jpg",
    "Tango",
    "Charly Garcia, Pedro Aznar",
    2500,
    1,
    [0, 30],
    [22, 08]
  ),
  new Productos(
    4,
    "https://images.clarin.com/2013/08/17/SyfoZ-j3ml_720x0.jpg",
    "Clix Modernos",
    "Charly Garcia",
    4500,
    1,
    [0, 45],
    [22, 08]
  ),
  new Productos(
    5,
    "https://i.pinimg.com/originals/32/ff/59/32ff596ad9f170b5651c3f1e0001fed1.jpg",
    "Peperina",
    "Seru Giran",
    2400,
    1,
    [0, 45],
    [22, 08]
  ),
  new Productos(
    6,
    "https://images.genius.com/40ea18f3146c97a764d7e6099dcd7fc9.1000x1000x1.jpg",
    "La Grasa de las Capitales",
    "Seru Giran",
    5700,
    1,
    [1, 20],
    [22, 08]
  ),
  new Productos(
    7,
    "https://img.discogs.com/1gcRIIOL3sxo_GfE_2hGZFvR_ok=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6377375-1625425102-6846.jpeg.jpg",
    "Vida",
    "Chico Buarque",
    1500,
    1,
    [0, 30],
    [22, 08]
  ),
  new Productos(
    8,
    "https://miro.medium.com/max/1400/0*MDgb-RBa1vBVNfrs.jpg",
    "Construcao",
    "Chico Buarque",
    1200,
    1,
    [0, 35],
    [22, 08]
  ),
  new Productos(
    9,
    "https://http2.mlstatic.com/D_NQ_NP_683357-MLA46508378619_062021-W.jpg",
    "Bajo Belgrano",
    "Spinetta Jade",
    3500,
    1,
    [2, 1],
    [22, 08]
  ),
];

const carrito = [];

const agregarAlCarrito = (productoId) => {
  const producto = arrayProductos.find((el) => el.id === productoId);
  carrito.push(producto);
  carritoUpdate();
};

const carritoUpdate = () => {
  $("#carrito").text(`
      Carrito ${carrito.length}
  `);
};

carritoUpdate();

// Inicializador del Catalogo
function duracionCheck(producto) {
  let duracionChangeResult = "";
  let duracionChangeMin = "";
  //Check Minutos
  if (producto.duracion[1] == 1) {
    duracionChangeMin = `${producto.duracion[1]} minuto`;
  } else {
    duracionChangeMin = `${producto.duracion[1]} minutos`;
  }
  //Check Horas
  if (producto.duracion[0] == 0) {
    return duracionChangeMin;
  } else {
    if (producto.duracion[0] == 1) {
      duracionChangeResult = `${producto.duracion[0]} hora y ${duracionChangeMin}`;
    } else {
      duracionChangeResult = `${producto.duracion[0]} horas y ${duracionChangeMin}`;
    }
  }
  return duracionChangeResult;
}

arrayProductos.forEach((producto) => {
  //Check de la duracion
  let duracionChange = duracionCheck(producto);

  $(".productosCards").append(`
          <div class="cardsDiv card-img-top card">
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
              <button class="btn addBtn" id="addBtn${producto.id}" type="submit">Añadir al Carrito</button>
            </div>
          </div>`);

  $(`#addBtn${producto.id}`).on("click", () => {
    agregarAlCarrito(producto.id);
  });
});

// Alerta Boton
$(".addBtn").click(() => {
  Swal.fire({
    icon: "success",
    title: "Tu producto fue agregado al carrito",
    html:
      " Vaya al " +
      '<a href="carrito.html">carrito</a> ' +
      "para finalizar su compra",
  });
});
