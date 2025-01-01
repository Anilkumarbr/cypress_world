
import example from "../../fixtures/example.json"
        describe("Testing The Application",()=> {
            it("Login With Valid Credential",()=>{
           cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            cy.orange(example.validDetails.userName,example.validDetails.password)

            })
        
        })