const {consultarCep, calcularPrecoPrazo} = require('correios-brasil')

// cep = '81550000'

// consultarCep(cep).then((response)=>{
//     console.log(response)
// })

let args = {
    // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
    sCepOrigem: '82620300',
    sCepDestino: '81550000',
    nVlPeso: '2',
    nCdFormato: '1',
    nVlComprimento: '29',
    nVlAltura: '36',
    nVlLargura: '20',
    nCdServico: ['04014', '04510'], //Array com os códigos de serviço
    nVlDiametro: '20',
    nVlValorDeclarado: 349,
  };
  
  calcularPrecoPrazo(args).then((response) => {
    console.log(response);
  });