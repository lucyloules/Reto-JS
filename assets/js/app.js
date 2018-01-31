
function IBookstore(){
// 1.-llamo elementos
const container = document.getElementById('primaryContainer');
const img = document.getElementById('demo');

/* //2.- creo contenedor secundario y agrego id
  const secondaryContainer =document.createElement('div');
  secondaryContainer.setAttribute('id', 'secundary');*/
// 2.- llamo al contenedor secundario
secondaryContainer = document.getElementById('secondaryContainer');

// 3.1 creo boton blanco y negro (elementos, texto y atributos)
const btnBlackWhite = document.createElement('button');
const txtBlackWhite = document.createTextNode('Black and White');
btnBlackWhite.setAttribute('class', 'btn btn-primary');
btnBlackWhite.setAttribute('id', 'black');

/*if ('black'== null) {
  black.filter(true)
}else{
  return("error");
}*/
// 3.2 creo boton sepia (elemrntos, texto y atributos)
const btnSepia = document.createElement('button');
const txtSepia = document.createTextNode('Sepia');
btnSepia.setAttribute('class', 'btn btn-primary');
btnSepia.setAttribute('id', 'sepia');

/*if ('sepia'== null) {
  sepia.filter(true)
}else{
  return("error");
}*/

// 3.3 creo boton invertir colores (elemrntos, texto y atributos)
const btnInvertColors = document.createElement('button');
const txtInvertColors = document.createTextNode('Invert Colors');
btnInvertColors.setAttribute('class', 'btn btn-primary');
btnInvertColors.setAttribute('id', 'invert');

/*if ('invert'== null) {
  invert.filter(true)
}else{
  return("error");
}*/

// 3.4 creo boton filtro rojo (elemrntos, texto y atributos)
const btnBlur = document.createElement('button');
const txtBlur = document.createTextNode('Blur');
btnBlur.setAttribute('class', 'btn btn-primary');
btnBlur.setAttribute('id', 'blur');
/*if ('blur'== null) {
  blur.filter(true)
}else{
  return("error");
}*/

// no pude crear un contenedor secundario con insert y no se veian los botones.
//const reference = document.getElementById('primaryContainer');
 //document.body.insertBefore(secondaryContainer, reference);

// appendeo los botones
secondaryContainer.appendChild(btnBlackWhite);
btnBlackWhite.appendChild(txtBlackWhite);

secondaryContainer.appendChild(btnSepia);
btnSepia.appendChild(txtSepia);

secondaryContainer.appendChild(btnInvertColors);
btnInvertColors.appendChild(txtInvertColors);

secondaryContainer.appendChild(btnBlur);
btnBlur.appendChild(txtBlur);


//Modificacion de imagen, funciones
