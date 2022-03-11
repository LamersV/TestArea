
const moip = require('moip-sdk-node').default({
    //accessToken: 'basic QjdOUENRV1FWMUxXS0VQVURQNFpDRVdLQ0ZLQlNRNFE6NkdDQUlJN1BZQ1ZPQUMyMVJMUk1YWlhESldGVUtLRVJTS01EQjNPRA==',
    token: 'B7NPCQWQV1LWKEPUDP4ZCEWKCFKBSQ4Q',
    key: '6GCAII7PYCVOAC21RLRMXZXDJWFUKKERSKMDB3OD',
    production: false
})

// moip.customer.create({
//     ownId: '9600120',
//     fullname: 'Victor Teste',
//     email: 'victorteste@email.com',
//     birthDate: '2000-01-01',
//     taxDocument: {
//         type: 'CPF',
//         number: '22233344405'
//     },
//     phone: {
//         countryCode: '55',
//         areaCode: '41',
//         number: '990000000'
//     },
//     shippingAddress: {
//         city: 'Curitiba',
//         complement: '3',
//         district: 'Uberaba',
//         street: 'Rua Capitão Leonidas Marques',
//         streetNumber: '10',
//         zipCode: '81550000',
//         state: 'PR',
//         country: 'BRA'
//     }
// }).then((response) => {
//     console.log(response.body)
// }).catch((err) => {
//     console.log(err)
// })

moip.customer.getOne('9600120')
    .then((response) => {
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })

    const queryObj = {
        limit: 14,
        offset: 0
      }
      moip.customer.query(queryObj)
          .then((response) => {
              console.log(response)
          })
          .catch((err) => {
              console.log(err)
          })