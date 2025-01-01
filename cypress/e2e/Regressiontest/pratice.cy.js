

describe ("Pratice ",()=>{

    it("checkboxes",()=>{
      //cy.visit("https://register.rediff.com/register/register.php?FormName=user_details")
      cy.visit("https://form-devs.s3.eu-central-1.amazonaws.com/formulario.html")
      //cy.get('[type="checkbox"]').check().should('be.checked')
    //   cy.get('[class="nomargin"]').check()
    //   cy.wait(1234)
    //   cy.get('[class="nomargin"]').uncheck()

    cy.get('[type="checkbox"]').check("Python")
    cy.wait(3000)
    cy.get('[type="checkbox"]').uncheck()
    cy.get('[type="radio"]').check()
    cy.get('[type="radio"]').uncheck()
   

    })
    it("Dropdowns",()=>{
        cy.visit("https://register.rediff.com/register/register.php?FormName=user_details")

        cy.get('[name*="DOB_Day"]').select('20')
        cy.get('[name*="DOB_Month"]').select('JUN')
        cy.get('[name*="DOB_Year"]').select('2024')
    })
    it("Uncaught Exception",()=>{
    cy.visit("https://chercher.tech/pratice/dropdowns")

    })
    it("Alert Msg",()=>{
       cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
       cy.contains('Click for JS Alert').click()
    //    cy.on('window:alert', (text) => {
    //     // You can assert that the alert message is correct
    //     expect(text).to.contains('I am a JS Alert');
    //   });
      cy.on('window:alert',()=>{
      
      })
      cy.wait(2000) 
    })
    it("Conform Msg",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains('Click for JS Confirm',{timeout:4500}).click()
        cy.on('window:confirm',(text)=>{
         expect(text).equal('I am a JS Confirm')
         return false
         //return true

        })
    })
    it("prompts",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get(':nth-child(3) > button').click() 
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('hlo');
          });
          cy.wait(3000)
          cy.contains('Click for JS Prompt').click()
        })

        it("handling mouseover",()=>{

          cy.visit("https://demo-opencart.com/")
          cy.wait(4000)
          cy.screenshot("pdf")
          // cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger("mouseover").click()
          cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('contextmenu').click()

          
        })
        it("screenshot",()=>{



        })
    })
    
