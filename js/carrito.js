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

function DeleteInst() {
  const btnDelete = document.querySelectorAll('.boton-eliminar');
  for (let btn of btnDelete) {
    btn.addEventListener('click', (e) => {
      const guitarDelete = carrito.find((guitarras) => guitarras.id === parseInt(e.target.id));
      const index = carrito.indexOf(guitarDelete);
      if (index > -1) {
        carrito.splice(index, 1);
        localStorage.setItem('miCarrito', JSON.stringify(carrito));
        tbody.innerHTML = '';
        cargarCompraTabla(carrito);
        location.reload();
      }
    });
  }
}

DeleteInst();