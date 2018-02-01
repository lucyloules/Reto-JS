const jsdom = require('jsdom');
const { JSDOM } = jsdom;
let dom = new JSDOM('<!DOCTYPE html><html><body><section><div class="row"><div class="col-lg-12 col-md-12 col-xs-12"><div id="secondaryContainer" align="center"></div></div></div><div class="row"><div class="col-lg-12 col-md-12 col-xs-12"><div id="primaryContainer" align="center"><img id="demo" src="assets/img/demo.jpg" alt="photo demo"></div></div></div></section></body></html>');
const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
  userAgent: 'node.js',
};

const $ = require('jquery');

describe('testeando', ()=>{
  it('pasa cuando el body tiene hijos', function() {
    dom.window.document.body.children.length >= 1;
  });

  it('pasa si la imagen tiene alt', function() {
    $('#demo').attr('alt') !== '';
  });

  it('pasa si la imagen tiene src', function() {
    $('#demo').attr('src') !== '';
  });
});
