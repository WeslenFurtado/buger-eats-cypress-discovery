import signupFactory from '../factories/SignupFactory'
import signupPage from '../pages/SignupPage'

//Cadastro
describe('Signup', () => {

    /* beforeEach(function () {
           cy.fixture('deliver').then((d) => {
               this.deliver = d
           })
       }) /*
  
  
      /* before(function() {
           cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes')
       })
   
       beforeEach(function() {
           cy.log('Tudo aqui é executado sempre ANTES de CADA caso de teste')
       })
   
       after(function() {
           cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes')
       })
   
       afterEach(function() {
           cy.log('Tudo aqui é executado sempre DEPOIS de CADA caso de teste')
       })
       */

    //Usuário deve se tornar um entregador
    it('User should be deliver', function () {

        var deliver = signupFactory.deliver()

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectedMessage)
    })
    //CPF incorreto
    it('Incorrect document', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '000000141aa'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Incorrect email', function () {

        var deliver = signupFactory.deliver()

        deliver.email = 'user.com.br'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Required fields', function () {
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'deliver_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' },
        ]

        before(function () {
            signupPage.go()
            signupPage.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function() {
                signupPage.alertMessageShouldBe(msg.output)
            })
        })
    })

})

