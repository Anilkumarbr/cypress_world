class hrmOrange{
userName()
{
    return cy.get('[name="username"]')
}
passWord()
{
    return cy.get('[name="password"]')
}
subBtn()
{
   return cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]')
}
}
export default hrmOrange;