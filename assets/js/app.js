//-------Maite---no puedo hacer que afecte el filtro a la imagen
const filterOption = document.getElementById("filter-option");
const filteredImage= document.getElementById("filtered-image");
const demoImg = document.getElementById("demo-img");

filterOption.appendChild("filteredImage");
filteredImage.appendChild("demoImg");

option.addEventListener('click', function(){

});
//----------------filtro invert----------------
    demoImg.invert = function(pixels) {
  for (var i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] = 255 - pixels.data[i]
    pixels.data[i+1] = 255 - pixels.data[i+1]
    pixels.data[i+2] = 255 - pixels.data[i+2]
  }

  return pixels
}

// 1.-llamo elementos
//const container = document.getElementById('primaryContainer');
//const img = document.getElementById('demo');

/* //2.- creo contenedor secundario y agrego id

  const secondaryContainer =document.createElement('div');
  secondaryContainer.setAttribute('id', 'secundary');*/
// 2.- llamo al contenedor secundario
//secondaryContainer = document.getElementById('secondaryContainer');

// 3.1 creo boton blanco y negro (elemrntos, texto y atributos)
//const btnBlackWhite = document.createElement('button');
//const txtBlackWhite = document.createTextNode('Grises');
//btnBlackWhite.setAttribute('class', 'btn btn-primary');

// 3.2 creo boton sepia (elemrntos, texto y atributos)
//const btnSepia = document.createElement('button');
//const txtSepia = document.createTextNode('Sepia');
//btnSepia.setAttribute('class', 'btn btn-primary');

// 3.3 creo boton invertir colores (elemrntos, texto y atributos)
//const btnInvertColors = document.createElement('button');
//const txtInvertColors = document.createTextNode('Invert Colors');
//btnInvertColors.setAttribute('class', 'btn btn-primary');

// 3.4 creo boton filtro rojo (elemrntos, texto y atributos)
//const btnRedFilter = document.createElement('button');
//const txtRedFilter = document.createTextNode('Red Filter');
//btnRedFilter.setAttribute('class', 'btn btn-primary');


// no pude crear un contenedor secundario con insert y no se veian los botones.
/*  //var reference = document.getElementById('primaryContainer');
  document.body.insertBefore( 'secondaryContainer', 'container'); //inserto div secundario  al inicio del body*/

//
//secondaryContainer.appendChild(btnBlackWhite);
//btnBlackWhite.appendChild(txtBlackWhite);

//secondaryContainer.appendChild(btnSepia);
//btnSepia.appendChild(txtSepia);

//secondaryContainer.appendChild(btnInvertColors);
//btnInvertColors.appendChild(txtInvertColors);

//secondaryContainer.appendChild(btnRedFilter);
//btnRedFilter.appendChild(txtRedFilter);

// document.body.insertBefore(elemento, referencia);

/*----------------------------------------------------------------------------
estaba en index.js
//creando botones del contenedor
//(blanco&negro, sepia, invertir colores y filtro rojo)

const btn-blackWhite = document.createElement('button'); // crea boton
const txt-blackWhite = document.createTextNode('Black & White');  //crea el textNode

const btn-sepia = document.createElement('button');
const txt-sepia = document.createTextNode('Sepia');

const btn-invertColors = document.createElement('button');
const txt-invertColors = document.createTextNode('Invert Colors');

const btn-redFilter = document.createElement('button');
const txt-redFilter = document.createTextNode('Red');
/*----------------------------------------------------------------------------*/
