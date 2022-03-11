let Correios = require('node-correios');
let correios = new Correios();

let products = [
  {
    name: 'Reale Napa Red Blend',
    price: '349,90',
    height: '36',
    length: '29',
    width: '20',
    diameter: '20',
    weight: '1.5',
    quantity: '1'
  },
  {
    name: 'Disaronno',
    price: '233,99',
    height: '36',
    length: '26',
    width: '20',
    diameter: '20',
    weight: '0.7',
    quantity: '3'
  },
  {
    name: 'Marco Real',
    price: '49,99',
    height: '8',
    length: '33',
    width: '8',
    diameter: '8',
    weight: '1.5',
    quantity: '1'
  },
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