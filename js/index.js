const bodyCards = document.querySelector('.div-grupocards');
const botonBuscar = document.querySelector('input#botonbusqueda')


const armarCardsHTML = (instrumento) => {
  return `
    <div id="card-guitarra-${instrumento.id}" class="card-guitarra">
      <div class="div-cardimg"><img src="${instrumento.imagen}" alt=""></div>
      <div class="div-cardmarca"><p>${instrumento.marca}</p></div>
      <div class="div-cardmodelo"><p>${instrumento.modelo}</p></div>
      <div class="div-cardcolor">${instrumento.color}</div>
      <div class="div-cardprecio">$ ${instrumento.precio}</div>
      <div class="div-boton"><button id="${instrumento.id}" class="boton boton-compra">Comprar</button></div>
    </div>
  `;
};

const filtrarGuitarras = ()=> {
  let resultadoFiltro = arrayGuitarras.filter((guitar )=>guitar.marca.toLocaleLowerCase().includes(botonBuscar.value.trim().toLocaleLowerCase()))
    if(resultadoFiltro.length >0){
      cargarInstrumentos(resultadoFiltro)
    }
  }

  botonBuscar.addEventListener('search',filtrarGuitarras)


  function activarClickEnBotones(){
    const botones = document.querySelectorAll('.boton.boton-compra')
          for (let boton of botones){
            boton.addEventListener('click', (e)=>{
              const guitarraElegida=arrayGuitarras.find((guitarras)=>guitarras.id===parseInt(e.target.id))
              carrito.push(guitarraElegida)
              localStorage.setItem('miCarrito',JSON.stringify(carrito))       
            })
          }
  };
  

const cargarInstrumentos=(array)=>{
    bodyCards.innerHTML = ''
    array.forEach((instrumento) => {
    bodyCards.innerHTML += armarCardsHTML(instrumento)
    });
    activarClickEnBotones()
    DeleteInst()
};




const inputNombre = document.querySelector('#inputNombre');
const btnLocalStorage = document.querySelector('button#btnLocalStorage');

btnLocalStorage.addEventListener('click', ()=>{
  if (inputNombre.value !==''){
    localStorage.setItem('userName', inputNombre.value)
  } 
}); 

if(localStorage.getItem('userName')){
    inputNombre.value=localStorage.getItem('userName')
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