class login{

    userName(){
        return cy.get('[name="username"]')
    }
    password(){
        return cy.get('[name="password"]')
    }
    submitBtn(){
        return cy.get('[type="submit"]')
    }

}
export default login;