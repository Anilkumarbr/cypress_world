describe('suite',()=>{
    it('test',()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
        // cy.selectProduct('[class="ga-nav"]')
cy.mobile('iphone X')
cy.get('[class="nav-link btn btn-primary"]').click()
cy.get('[class="col-sm-1 col-md-1 text-center"]').eq(0).then((value)=>{
    // cy.log(value.text())

    const totalPrice = value.text()
            cy.log(totalPrice)
            var res = totalPrice.split(' ')
         cy.log(res)
       const  res1 = Number(res[1].trim())
                 cy.log(res1)
                 expect(res1).to.equal(100000)

})
// expect(res1).to.equal(100000)
    })
})


//======================================

// it('Homepage - eCommerce', function () {
//     homePage.visitHome()
//      homePage.getName().click().type(products.name)
//     homePage.getEmail().type(products.email)
//     homePage.checkbox().check()
//     homePage.genderMale().select(products.gender)
//     homePage.radioStudent().click()
//     homePage.radioEntrepreneur().should('be.disabled')
//     homePage.twowayDataBinding().should('have.value', products.name)
// })
// it.only('Shop page - eCommerce', function () {
//     cy.visit("https://rahulshettyacademy.com/angularpractice/shop")
//     homePage.shopPage().click({force : true})
//     productPage.getProduct().each(($el) => {
//         const mobileName = $el.text()
//         cy.log(mobileName)
//         if (products.prdocuts.includes(mobileName)) {
//             cy.log('This is "' + mobileName + '"')
//             productPage.clickAdd(mobileName).click()
//         }
//     })
//     productPage.checkOut().click()
//     var sum = 0
//     checkOut.productPrice().each((price, index) => {
//         const totalPrice = price.text()
//         cy.log(totalPrice)
//         var res = totalPrice.split(' ')
//         cy.log(res)
//         res = Number(res[1].trim())
//         cy.log(res)
//         debugger
//         sum = sum + res
//     }).then(function () {
//         cy.log(sum)
//     })
//     checkOut.cartPrice().then((element) => {
//         const value = element.text()
//         var totalValue = value.split(' ')// arr = [ 3, 4, 5] $500  [$,  500]
//         totalValue = Number(totalValue[1].trim())
//         expect(sum).to.equal(totalValue)
//     })
//     checkOut.checkOutSubmit().click()
//     Cypress.config('defaultCommandTimeout', 8000)
//    // checkOut.getCountry().type(productName.deleveryaddress)
//     //checkOut.selectCountry().click()
//     checkOut.agreeCheckbox().click({ force: true })
//     checkOut.purchaseButton().click()
//     checkOut.successMessage().then((message) => {
//         const success = message.text()
//         expect(success.includes(' ')).to.be.true
//     })
// })
// //     /* it('Checkout Page - eCommerce', function () {
// //     //     cy.visit("https://rahulshettyacademy.com/angularpractice/shop")
// //     //     var sum = 0
// //     //     checkOut.productPrice().each((price, index) => {
// //     //         const totalPrice = price.text-+
// //     ()
// //     //         var res = totalPrice.split(' ')
// //     //         res = Number(res[1].trim())
// //     //         cy.log(res)
// //     //         sum = sum + res
// //     //     }).then(function () {
// //     //         cy.log(sum)
// //     //     })
// //     //     checkOut.cartPrice().then((element) => {
// //     //         const value = element.text()
// //     //         var totalValue = value.split(' ')
// //     //         totalValue = Number(totalValue[1].trim())
// //     //         expect(sum).to.equal(totalValue)
// //     //     })
// //     //     checkOut.checkOutSubmit().click()
// //     //     Cypress.config('defaultCommandTimeout', 8000)
// //     //     checkOut.getCountry().type(productName.deliveryLocation)
// //     //     checkOut.selectCountry().click()
// //     //     checkOut.agreeCheckbox().click({ force: true })
// //     //     checkOut.purchaseButton().click()
// //     //     checkOut.successMessage().then((message) => {
// //     //         const success = message.text()
// //     //         expect(success.includes('Success')).to.be.true
// //     //     })
// //     // })
// // })  
// // // describe('Example_Test_Suite_1', () => {

// // //     it("Products are added to cart", () => {
// // //         cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
// // //         cy.get('.products').as('productlocator')
// // //         cy.wait(2000)
// // //         cy.get('@productlocator').find('.product').each(($el, index, $list) => {

// // //             const textVeg = $el.find('h4.product-name').text()
// // //        // cy.log(textVeg)
// // //         cy.log(textVeg)

// // //             if (textVeg.includes('Cashews') || textVeg.includes('Cauliflower') || textVeg.includes('Mushroom')) {
// // //                 cy.wrap($el).find('button').click()
// // //              }
// // //         })
// // //         cy.get('.cart-icon').click()
// // //          cy.get('li[class*="cart-item"] p[class="product-name"]:visible')
// // //          .should('have.text','Cauliflower - 1 KgMushroom - 1 KgCashews - 1 Kg')

// // //         cy.get('li[class*="cart-item"]')
// // //             .find(' p[class="product-name"]:visible')
// // //             .should('have.length', 3)
// // //             .each(($el, index, $list) => {
// // //                 cy.wrap($ ).should('have.text', 'Cauliflower - 1 Kg', 'Cashews - 1 Kg') // code for bag validation

// // //             })

// // //     })
// // // })
// // /*
// // describe('Click on Multiple Matching element', () => {

// //     it('Multiple elememts click', () => {

// //         cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
// //         cy.xpath("//button[text()='ADD TO CART']").click({ multiple: true })

    
// //         cy.wait(5000)
// //         cy.get('.increment').click({ multiple: true })
// //         cy.get('.increment').click({ multiple: true })

// //         //cy.xpath("//button[text()='ADD TO CART']").click({multiple : true})
// //     })
// //   })
// })