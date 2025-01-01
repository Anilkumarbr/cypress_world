class login{
    launchLoginBtn(){
        return cy.get('#login2')
    }
    userName()
    {
        return cy.get('#loginusername')
    }
    password()
    {
       return cy.get('#loginpassword')
    }
    clickLoginBtn()
    {
        return cy.get('[onclick="logIn()"]')
    }



}
export default login;