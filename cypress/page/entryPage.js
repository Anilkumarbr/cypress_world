class entryPage{

   get name()
   {
    return cy.get('.form-control ng-pristine ng-invalid ng-touched')
   }
   get email()
    {
        return cy.get('[name="email"]')
    }
   get password()
   {
    return cy.get('#exampleInputPassword1')
   }
   get clickCheckBox()
   {
    return cy.get('#exampleCheck1')
   }
   get selectGender()
   {
    return cy.get('#exampleFormControlSelect1')
   }
   get clickRadioBtn()
   {
    return cy.get('#inlineRadio1')
   }
   get selectDate()
   {
    return cy.get('.form-control')
   }
   get clickSubmitBtn()
   {
    return cy.get('.btn btn-success')
   }
}
export default entryPage;