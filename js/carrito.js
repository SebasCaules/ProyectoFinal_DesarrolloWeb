const carrito = [];

const agregarAlCarrito = (productoId) => {
  const producto = arrayProductos.find((el) => el.id === productoId);
  carrito.push(producto);
  carritoLS();
  carritoUpdate();
};

let productosInLS = localStorage.getItem("productos");

function carritoLS() {
  const carritoList = [productosInLS];
  checkArrayP(carritoList);
  for (var i = 0; i < carrito.length; i++) {
    carritoList.push(carrito[i].id);
  }
  localStorage.setItem("productos", carritoList);
}

const productosInLSArray = productosInLS.split(",");

function checkArrayP(array) {
  for (var i = 0; i <= array.length; i++) {
    if (array[i] == "") {
      array.splice(i, 1);
    }
  }
  return array;
}

const carritoUpdate = () => {
  checkArrayP(productosInLSArray);
  $("#carrito").text(`
        Carrito ${productosInLSArray.length + carrito.length}
    `);
};
carritoUpdate();

function count_duplicate(array) {
  let counts = {};

  for (let i = 0; i < array.length; i++) {
    if (counts[array[i]]) {
      counts[array[i]] += 1;
    } else {
      counts[array[i]] = 1;
    }
  }
  return counts;
}

let productosInCarrito = count_duplicate(productosInLSArray);

for (var i = 0; i <= productosInLSArray.length; i++) {
  const producto = arrayProductos;
  if (productosInCarrito[i]) {
    $(".carritoContainer").append(`
              <div class="cardsDiv card-img-top card">
                  <div>
                      <img
                      class="card-img-top"
                      src="${producto[i].img}"
                      alt="${producto[i].nombre} Imagen Portada"
                      />
                      <div class="card-body">
                      <h5 class="card-title">${producto[i].nombre}</h5>
                      <h6 class="card-title">${producto[i].banda}</h6>
                      </div>
                      <ul class="list-group list-group-flush">
                      <li class="list-group-item">Fecha de Entrada : ${producto[i].fechaEntrada[0]} / ${producto[i].fechaEntrada[1]}</li>
                      <li class="list-group-item">${producto[i].precio} $</li>
                      <li class="list-group-item">Contiene ${producto[i].cantidadLPs} LP('s)</li>
                      <li class="list-group-item">Cantidad de Items : ${productosInCarrito[i]}</li>
                      </ul>
                      <div class="card-body">
                      <a href="#" class="card-link">Escuchar en Spotify</a>
                      </div>
                      <button class="btn addBtn" id="addBtn${producto.id}" type="submit">Añadir al Carrito</button>
                  </div>
              </div>`);
  }
}

$("#deleteAll").on("click", () => {
  if (productosInLS) {
    localStorage.removeItem("productos");
    carritoUpdate();
    console.log("hola");
  } else {
    alert("HOLA");
  }
});
