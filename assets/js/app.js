
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
const container = document.getElementById('primaryContainer');
const img = document.getElementById('demo');

//2.- creo contenedor secundario y agrego id
  const secondaryContainer =document.createElement('div');
  secondaryContainer.setAttribute('id', 'secondaryContainer');*/
//llamo al contenedor secundario
secondaryContainer = document.getElementById('secondaryContainer');

// 3.1 creo boton blanco y negro (elemrntos, texto y atributos)
const btnBlackWhite = document.createElement('button');
const txtBlackWhite = document.createTextNode('Black and White');
btnBlackWhite.setAttribute('class', 'btn btn-primary');

// 3.2 creo boton sepia (elemrntos, texto y atributos)
const btnSepia = document.createElement('button');
const txtSepia = document.createTextNode('Sepia');
btnSepia.setAttribute('class', 'btn btn-primary');

// 3.3 creo boton invertir colores (elemrntos, texto y atributos)
const btnInvertColors = document.createElement('button');
const txtInvertColors = document.createTextNode('Invert Colors');
btnInvertColors.setAttribute('class', 'btn btn-primary');

// 3.4 creo boton Blur (elemrntos, texto y atributos)

const btnBlur = document.createElement('button');
const txtBlur = document.createTextNode('Blur');
btnBlur.setAttribute('class', 'btn btn-primary');
 
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

btnBlackWhite.addEventListener('click', ()=>{
    img.style.filter='grayscale(100%)'; //cambia a blanco y negro
  });

btnSepia.addEventListener('click', ()=>{
    img.style.filter='sepia(100%)'; // cambia a sepia
  });

btnInvertColors.addEventListener('click', ()=>{
    img.style.filter='invert(100%)'; // invierte colores de una imagen
  });

btnBlur.addEventListener('click', ()=>{
    //img.style.filter='saturate(200%)'; saturar de color
    img.style.filter='blur(5px)'; // desenfoque
  });

//funcion que restaurar imagen (no se si crear un nuevo botón
// o darle la funcionalidad  a la misma imagen)
/*btnRestore.addEventListener('click', ()=>{
	img.style.filter='grayscale(0%)'; 
	img.style.filter='invert(0%)';
	img.style.filter='sepia(0%)';
	img.style.filter='blur(5px)';

});*/

img.addEventListener('click', ()=>{
	img.style.filter='grayscale(0%)'; 
	img.style.filter='invert(0%)';
	img.style.filter='sepia(0%)';
	img.style.filter='blur(-5px)';

});