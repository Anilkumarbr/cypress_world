import 'cypress-iframe';
import 'cypress-drag-drop'
describe("hndle Links",()=>{
    it("Links",()=>{
cy.visit("https://en.wikipedia.org/wiki/Main_Page")
cy.get('a').then((tet)=>{

   cy.log(tet.text()+"  ")
})
cy.get('[class="user-links-collapsible-item mw-list-item user-links-collapsible-item"]').eq(3).should('have.length',3)

    })
    it.only("Drag N Drop",()=>{
      
        cy.visit("https://kitchen.applitools.com/ingredients/drag-and-drop")
        
        
        cy.get('#menu-fried-chicken').drag('#plate-items')
    })


    it("Iframe",()=>{

        cy.visit("https://Jqueryui.com/checkboxradio/")
        cy.get('.demo-frame').then((frame)=>{

           let raju= frame.contents().find('#radio-2')
            cy.wrap(raju).click()
        })
        //cy.contains('New York').click({force: true})
    })
    it('OtherWay',()=>{
        cy.visit("https://Jqueryui.com/checkboxradio/")
       var ll= cy.get('.demo-frame')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
        cy.log(ll)
        //cy.get('[class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"]').first().click()
    })
    it("iframe",()=>
    {
        cy.visit('https://Jqueryui.com/checkboxradio/')
        cy.frameLoaded('.demo-frame')
        //cy.iframe('.demo-frame')
        //cy.get('label[for="radio-1"]').click()
        //cy.contains('Download').click({force: true})
        cy.get('[name="radio-1"]').check()
    })

})