const chai= require("chai");
const function(IBookstore)=('../assets/app.js');
let test=('<Doctype html><html><body><img id=demo></img></body></html>');
const { window }= dom;
global.document= dom;
global.window = window;
global.navigator= {
  useAgent:'node.js'
};

describe(function(IBookstore), ()=>{
  it(IBookstore==null){
    assert.equal(true, IBookstore.btnBlackWhite('btn-black'))
  }
});
