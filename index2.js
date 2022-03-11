let Correios = require('node-correios');
let correios = new Correios();

let products = [
  {
    name: 'Reale Napa Bend',
    
  }
]

let argsSedex = {
  sCepOrigem: '82620300',
  sCepDestino: '81550000',
  nVlPeso: '2',
  nCdFormato: '1',
  nVlComprimento: '29',
  nVlAltura: '36',
  nVlLargura: '20',
  nCdServico: '04014', //Sedex
  nVlDiametro: '20',
  nVlValorDeclarado: 349,
};

let argsPac = {
  sCepOrigem: '82620300',
  sCepDestino: '81550000',
  nVlPeso: '2',
  nCdFormato: '1',
  nVlComprimento: '29',
  nVlAltura: '36',
  nVlLargura: '20',
  nCdServico: '04510', //PAC
  nVlDiametro: '20',
  nVlValorDeclarado: 349,
};
 
correios.calcPreco(argsSedex)
.then(result => {
  console.log(result);
})
.catch(error => {
  console.log(error);
});