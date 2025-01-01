import 'cypress-drag-drop'

describe("dragNdrop",()=>{
    it("drap",()=>{
    cy.visit("https://kitchen.applitools.com/ingredients/drag-and-drop")
    //cy.get('#menu-fried-chicken').drag('#plate-items')
    const dataTransfer=new DataTransfer();
    cy.get('#menu-fried-chicken').trigger(('dragstart'),{
        dataTransfer
    })
    cy.get('#plate-items').trigger(('drop'),{
        dataTransfer
    })
    cy.get('#menu-hamburger').trigger(('dragstart'),{
        dataTransfer
    })
    cy.get('#plate-items').trigger(('drop'),{
        dataTransfer
    })



    })
})