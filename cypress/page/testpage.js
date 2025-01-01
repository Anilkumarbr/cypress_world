class Testpage{
    Username(){
        return cy.get('[name="username"]')
    }
    Password()
    {
        return cy.get('[name="password"]')
    }
    Submitbtn()
    {
        return cy.get('[class="btn"]')
    }
}
export default Testpage;