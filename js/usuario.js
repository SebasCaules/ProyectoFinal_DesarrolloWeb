// Cuenta de usuario en LS
let usuario;
let usuarioEnLS = localStorage.getItem("usuario");

function displayOn() {
  $(".dpUsuarios").addClass("dpActivo");
  $(".dpUsuarios").append(`
      <div class="dpContenido">
        <h1 id="dpTitle">Ingrese su nombre</h1>
        <input id="dpInput" type="text">
        <button id="dpSubmit">Registrar</button>
        <button id="dpCerrar">Cerrar</button>
      </div>
  `);
  $("#dpCerrar").click(() => {
    $(".dpUsuarios").removeClass("dpActivo");
  });
}

function onClick() {
  $("#dpSubmit").on("click", () => {
    usuario = $("#dpInput").val();
    localStorage.setItem("usuario", usuario);
    $(".dpUsuarios").removeClass("dpActivo");
    return usuario;
  });
}

if (!usuarioEnLS) {
  displayOn();
  usuario = onClick();
} else {
  usuario = usuarioEnLS;
}
