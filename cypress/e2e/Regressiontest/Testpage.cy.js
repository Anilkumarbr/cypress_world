
import example from "../../fixtures/example.json"
describe("Verify Login Functrionality", () => {

    it.only('positive Login Test ',()=>{

        cy.visit("https://practicetestautomation.com/practice-test-login/")
       cy.logintestpage(example.validDetails.userName,example.validDetails.password);
        cy.url().should('eq','https://practicetestautomation.com/logged-in-successfully/')
        cy.contains('Logged In Successfully').should('be.visible')
        cy.contains('Congratulations student. You successfully logged in!').should('be.visible')
        //cy.contains('Log out').should('exist')
        //cy.xpath('//ul[@class="menu-primary-items"]/li[4]').click
        cy.xpath('//ul[@class="menu-primary-items"]/li[5]').click()
        cy.get('[name="wpforms[fields][0][first]"]').type("anil")
        cy.get('[name="wpforms[fields][0][last]"]').type("kumar")
        cy.get('[name="wpforms[fields][1]"]').type("anilkumardvp143@gmail.com")
        cy.get('[id="wpforms-161-field_2"]').type("Hello This Is Anil kumar From Ap I Want clarif0y the is this good or bad")
       //cy.get('[class="recaptcha-checkbox-border"]').click();
       cy.get('[class="recaptcha-checkbox-checkmark"]').click()
        cy.get('[name="wpforms[submit]"]').click()


    })   
    it('Negative Username Test',()=>{
        
        cy.visit("https://practicetestautomation.com/practice-test-login/")
    cy.logintestpage(example.invalidUserDetails.userName,example.invalidUserDetails.password);
        cy.contains('Your username is invalid!').should('be.visible')
        cy.wait(3000)
       cy.get('[class="show"]').should('contains.text',example.invalidUserDetails.ErrorMsg)

    })
    it('Negative Passwordtest',()=>{

        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.logintestpage(example.invalidPasswordDetails.userName,example.invalidPasswordDetails.password)
        
        cy.contains('Your password is invalid!').should('exist')
        cy.get('[id="error"]').should('contains.text',example.invalidPasswordDetails.ErrorMsg)

      })
})