describe("alerts",()=>{
    it("alert",()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.contains("Click for JS Alert").click()
    cy.on('window:alert',(text)=>{
    
        expect(text).contains("I am a JS Alert")
        //added a comment
        //hlo
        //hello guys how are tyou
        //hlo the
    
    })
})
})