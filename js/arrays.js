function recuperarLs(){
    if (localStorage.getItem('miCarrito')){
        return JSON.parse(localStorage.getItem('miCarrito'))  
    }else{
        return []
    }
     
};

const carrito = recuperarLs()

const arrayGuitarras = [{imagen: src="https://bairesrocks.vteximg.com.br/arquivos/ids/239197-900-900/L46833000001000-02-2000x2000.jpg?v=637992107250800000"  , id: 111, marca: "Fender", modelo:"stratocaster",color: "Negro" , precio: 680000},
                         {imagen: src="https://http2.mlstatic.com/D_Q_NP_606749-MLA46365746591_062021-O.webp"  , id: 112, marca: "Fender", modelo:"Telecaster",color: "Cream",tipo:"Electricas" , precio: 470000 },
                         {imagen: src="https://www.tubesoundbcn.com/img/p/3/4/3/5/8/34358.jpg"  , id: 114, marca: "Gibson", modelo:"Les Paul",color: "Sunburst" ,tipo:"Electrica", precio: 1500000 },
                         {imagen: src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCiCqNX4-CBjqOga-Zy7tVw5uzkTpZrvf1lw&usqp=CAU"  , id: 115, marca: "Gibson", modelo:"SG",color: "Cherry" ,tipo:"Electrica" ,precio:800000 },
                         {imagen: src="https://therockstore.com.ar/wp-content/uploads/2021/10/1620875093287.jpg"  , id: 116, marca: "Gibson", modelo:"335",color: "" ,tipo:"Electrica", precio: 1200000 },
                         {imagen: src="https://s.ek.ua/jpg_zoom1/1551165.jpg"  , id: 117, marca: "Washburn", modelo:"Wr-154",color: "Negro" ,tipo:"Electrica", precio: 90000 },
                         {imagen: src="https://bairesrocks.vteximg.com.br/arquivos/ids/201863-900-900/783657-MLA40544635648_012020-F.jpg?v=637313060668470000"  , id: 118, marca: "Texas", modelo:"Stratocaster",color: "Sunburst" ,tipo:"Electrica", precio: 25000 },
                         {imagen: src="https://bairesrocks.vteximg.com.br/arquivos/ids/201930-900-900/833259-MLA31112937284_062019-F.jpg?v=637313060855770000"  , id: 119, marca: "Krammer", modelo:"Grobvater",color: "Psycho" ,tipo:"Electrica", precio: 150000 },
                         {imagen: src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCiCqNX4-CBjqOga-Zy7tVw5uzkTpZrvf1lw&usqp=CAU"  , id: 1110, marca: "Ephipone", modelo:"SG",color: "Cherry" ,tipo:"Electrica" ,precio: 110000 },
                         {imagen: src="https://www.melodyhousemi.com/assets/library/Ibanez/V50NJP-VS-2.jpg"  , id: 1111, marca: "Ibanez", modelo:"V",color: "Wood" ,tipo:"Electroacustica", precio: 180000 },
 ]

 cargarInstrumentos(arrayGuitarras);
