var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '31999999999',
            address: {
                postalcode: '32611076',
                street: 'Rua Pyra',
                number: '3450',
                details: 'Ap 123',
                district: 'Icaivera',
                city_state: "Betim/MG"
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}   


