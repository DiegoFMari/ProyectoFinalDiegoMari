const tbody = document.querySelector('tbody');
const costoCompra = document.querySelector('#span-total')



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

function deleteAlert(){
  Swal.fire({
    title: 'Se Elimino un Articulo del Carrito!',
    icon: 'error',
    confirmButtonText: 'continuar'
  })
}

function calcularTotalCompra() {
  const total = carrito.reduce((acumulador, instrumento) => acumulador + instrumento.precio, 0);
  return total;
}

function DeleteInst() {
  const btnDelete = document.querySelectorAll('.boton-eliminar');
  btnDelete.forEach(btn => {
    btn.addEventListener('click', (e) => {
      deleteAlert();
      const guitarId = parseInt(e.target.id);
      const index = carrito.findIndex(guitarras => guitarras.id === guitarId);
      if (index > -1) {
        carrito.splice(index, 1);
        localStorage.setItem('miCarrito', JSON.stringify(carrito));
        tbody.innerHTML = '';
        carrito.forEach(instrumento => {
          tbody.innerHTML += cargarCompraTabla(instrumento);
        });
        calcularTotalCompra();
        costoCompra.textContent = calcularTotalCompra();
        DeleteInst();
      }
    });
  });
}

DeleteInst();



const totalCompra = calcularTotalCompra();
costoCompra.textContent= totalCompra

function cartelFnB(){
  Swal.fire({
    title: '¿Deseas Terminar con Tu compra?',
    showDenyButton: true,
    confirmButtonText: 'Si, deseo finalizar mi compra',
    denyButtonText: `Seguir Comprando`,
  }).then((result) => {
    if (result.isConfirmed) {
      const { value: email } = Swal.fire({
        title: 'Ingresa tu email para Recibir tu Factura',
        input: 'email',
        inputLabel: 'en las proximas horas recibiras tu factura',
        inputPlaceholder: 'Ingresa tu Correo Electronico'
      })
    } else if (result.isDenied) {
      Swal.fire('Genial! Elije algo mas!', '', 'info')
    }
  })
}

function finalizaCompra(){
  const btnbuy = document.querySelector('#bnt-finish')
  btnbuy.addEventListener('click',()=>{
    cartelFnB()
  })
}
finalizaCompra()