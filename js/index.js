const bodyCards = document.querySelector('.div-grupocards');

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




const cargarInstrumentos=(array)=>{
    bodyCards.innerHTML = ''
    array.forEach((instrumento) => {
    bodyCards.innerHTML += armarCardsHTML(instrumento)
    });
    activarClickEnBotones()
};


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

