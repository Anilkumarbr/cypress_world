import 'cypress-iframe';

describe("table",()=>{


    it("table",()=>{
       cy.visit("https://www.opencart.com/index.php?route=account/login")
       cy.get('#input-email').type("demo")
       cy.get('#input-password').type("demo")
       cy.get('[type="submit"]').click()
    })
    it.only("money",()=>{
        cy.visit("https://money.rediff.com/sectors/bse/power")
        //cy.frameLoaded('.div_adzone')
        //cy.get('//table[@class="dataTable"]/tbody/tr').should('have.length','13')
        //To Find The Howmany Columns By Using Xpath
        cy.xpath('//table[@class="dataTable"]//tr/th').should('have.length','6')
        //To Find The Howmany Rows By Using Css
        cy.get('table[class="dataTable"]>tbody>tr').should('have.length','13')
        //To Find The Howmany Columns By Using Css
        cy.get('table[class="dataTable"]>thead>tr>th').should('have.length','6')

        //To Get The Particular Row Element
        cy.xpath('//table[@class="dataTable"]/tbody/tr[1]').within(()=>{

         cy.get('td').eq('0').then((ele)=>{
cy.log(ele.text())
         })
        })
         cy.get('table[class="dataTable"]>tbody>tr').each((rows)=>{
     cy.wrap(rows).within((cell)=>{
    cy.log(cell.text())
      })})
    })
})