class mobile{
    
    mobileName(){
        return cy.get('.hrefch').last()
    }
    textVisible(){
        return cy.contains('Samsung galaxy s6')
    }
    addCart(){
        return cy.contains('Add to cart')
    }
    clickCartBttn()
    {
        return cy.contains('Cart')
    }
    clickPlaceOrder()
    {
         return cy.contains('Place Order')
    }
    userName()
    {
        return cy.get('#name')
    }
    country()
    {
        return cy.get('#country')
    }
    city()
    {
        return cy.get('#city')
    }
    cardNumber()
    {
        return cy.get('#card')
    }
    month()
    {
        return cy.get('#month')
    }
    year()
    {
        return cy.get('#year')
    }
    clickPurchaseBtn()
    {
        return cy.get('[onclick="purchaseOrder()"]')
    }

}
export default mobile;