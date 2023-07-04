const bodyCards = document.querySelector('.div-grupocards');
const botonBuscar = document.querySelector('input#botonbusqueda')
const inputNombre = document.querySelector('#botonbusqueda');



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

function toastError(){
  Swal.fire('UPS! algo salio mal', '', 'error')
}

const filtrarGuitarras = ()=> {
  let resultadoFiltro = arrayGuitarras.filter((guitar )=>guitar.marca.toLocaleLowerCase().includes(botonBuscar.value.trim().toLocaleLowerCase()))
    if(resultadoFiltro.length >0){
      cargarInstrumentos(resultadoFiltro)
    }
  };

  botonBuscar.addEventListener('keyup',filtrarGuitarras)


function activarClickEnBotones(){
    const botones = document.querySelectorAll('.boton.boton-compra')
          for (let boton of botones){
            boton.addEventListener('click', (e)=>{
              const guitarraElegida=arrayGuitarras.find((guitarras)=>guitarras.id===parseInt(e.target.id))
              carrito.push(guitarraElegida)
              localStorage.setItem('miCarrito',JSON.stringify(carrito))
              Swal.fire({
                title: 'Tu Guitarra se agrego al Carrito!',
                text: 'pulsa continuar para seguir comprando',
                icon: 'success',
                confirmButtonText: 'continuar'
              })       
            })
          }
  };
 




 function botonComprar(){
    const btnLocalStorage = document.querySelector('.boton-compra');
    btnLocalStorage.addEventListener('click', ()=>{
      if (inputNombre.value !==''){
        localStorage.setItem('userName', inputNombre.value)
      } 
    }); 
    
    if(localStorage.getItem('userName')){
        inputNombre.value=localStorage.getItem('userName')
    }
    };
    
    

const cargarInstrumentos=(array)=>{
    bodyCards.innerHTML = ''
    array.forEach((instrumento) => {
    bodyCards.innerHTML += armarCardsHTML(instrumento)
    });
    activarClickEnBotones()
    botonComprar()

};

// cargarInstrumentos(arrayGuitarras);


function cargarInst(){
  fetch(URL)
    .then((response)=>response.json())
    .then((data)=> arrayGuitarras.push(...data))
    .then(()=>cargarInstrumentos(arrayGuitarras))
    .catch((error)=> toastError())
}

cargarInst()