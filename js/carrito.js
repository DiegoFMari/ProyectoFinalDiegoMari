const tbody = document.querySelector('tbody');


function cargarCompraTabla(arrayGuitarras){
    return`
    <tr>
    <td>${arrayGuitarras.marca}</td>
    <td>${arrayGuitarras.modelo}</td>
    <td>${arrayGuitarras.color}</td>
    <td>${arrayGuitarras.precio}</td>
    <td><button id="${arrayGuitarras.id}" class="boton-eliminar">❌</button></td>
    </tr>
    `;

};

if (carrito.length > 0) {
  carrito.forEach(instrumento => {
    tbody.innerHTML += cargarCompraTabla(instrumento);
  });
};

DeleteInst();