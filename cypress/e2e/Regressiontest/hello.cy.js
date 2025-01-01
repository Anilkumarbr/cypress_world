describe("Verify Login Functrionality", () => {
     it("Login With Valid Credentials", () => {
      //cy.visit('https://phyzii.cirrius.in/')
    //  cy.get('[name="txtClientID"]').type("12345")
    //  cy.get('#txtUserID').type("702609")
    //  cy.get('#txtPassword').type("wert")
    //  cy.get('[name="btn"]').click() 
     cy.visit('https://www.flipkart.com/')
     //cy.get('[title="Login"]').first().click()
     cy.get('._1TOQfO > span').click()
     cy.get('[type="text"]').last().type("9868985822")
     cy.contains('Request OTP').click()
     })
    })
