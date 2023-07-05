function recuperarLs() {
    if (localStorage.getItem('miCarrito')) {
        return JSON.parse(localStorage.getItem('miCarrito'))
    } else {
        return []
    }

};

const carrito = recuperarLs()
const URL = 'js/guitarras.json'
const arrayGuitarras = []




