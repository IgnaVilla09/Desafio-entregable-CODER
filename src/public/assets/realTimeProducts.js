const socket = io();

socket.on("nuevoProducto", (datos) => {
  let ulItems = document.getElementById("items");
  ulItems.innerHTML += `
    <div>
        <li>Nombre del producto: <i>${datos.title}</i></li>
        <li>Precio: $<i>${datos.price}</i></li>
        <li>Descripción: <i>${datos.description}</i></li>
        <li>Categoría: <i>${datos.category}</i></li>
        <li>Code: <i>${datos.code}</i></li>
        <button class="btn-remove">ELIMINAR</button>
    </div>`;
});

socket.on("productoEliminado", (data) => {
  window.location.href = `http://localhost:8080/realTimeProducts/`;
});
