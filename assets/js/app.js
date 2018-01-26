// 1.-llamo elementos 
const container = document.getElementById('primaryContainer');
const img = document.getElementById('demo');

/* //2.- creo contenedor secundario y agrego id

  const secondaryContainer =document.createElement('div');
  secondaryContainer.setAttribute('id', 'secundary');*/
// 2.- llamo al contenedor secundario
secondaryContainer = document.getElementById('secondaryContainer');

// 3.1 creo boton blanco y negro (elemrntos, texto y atributos)
const btnBlackWhite = document.createElement('button');
const txtBlackWhite = document.createTextNode('Grises');
btnBlackWhite.setAttribute('class', 'btn btn-primary');

// 3.2 creo boton sepia (elemrntos, texto y atributos)
const btnSepia = document.createElement('button');
const txtSepia = document.createTextNode('Sepia');
btnSepia.setAttribute('class', 'btn btn-primary');

// 3.3 creo boton invertir colores (elemrntos, texto y atributos)
const btnInvertColors = document.createElement('button');
const txtInvertColors = document.createTextNode('Invert Colors');
btnInvertColors.setAttribute('class', 'btn btn-primary');

// 3.4 creo boton filtro rojo (elemrntos, texto y atributos)
const btnRedFilter = document.createElement('button');
const txtRedFilter = document.createTextNode('Red Filter');
btnRedFilter.setAttribute('class', 'btn btn-primary');

 
// no pude crear un contenedor secundario con insert y no se veian los botones.
/*  //var reference = document.getElementById('primaryContainer');
  document.body.insertBefore( 'secondaryContainer', 'container'); //inserto div secundario  al inicio del body*/

// 
secondaryContainer.appendChild(btnBlackWhite);
btnBlackWhite.appendChild(txtBlackWhite);

secondaryContainer.appendChild(btnSepia);
btnSepia.appendChild(txtSepia);

secondaryContainer.appendChild(btnInvertColors);
btnInvertColors.appendChild(txtInvertColors);

secondaryContainer.appendChild(btnRedFilter);
btnRedFilter.appendChild(txtRedFilter);

// document.body.insertBefore(elemento, referencia);