describe('HomePage',()=>{
 it('test',()=>{
 cy.visit('https://rahulshettyacademy.com/angularpractice/')
 cy.clickTheElement('#exampleCheck1')
 
 //cy.selectGender('#exampleFormControlSelect1',2)
 cy.clickRadioBtn('#inlineRadio1')
 cy.selectDate('.form-control','12-02-2001')

 
 })




})