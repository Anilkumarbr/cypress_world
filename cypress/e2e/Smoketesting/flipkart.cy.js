//import { before } from "mocha"

describe("Verify Login Functrionality", () => {
    
    before("",()=>{
        cy.log("before")
    })
    it.only("positive Login Test ", () => {

        cy.visit("https://www.flipkart.com/")
        //cy.get('[class="_1ch8e_ _1mZ8pZ"]').eq('3').click()
        cy.get('[aria-label="Fashion"]').click()
        cy.get('[class="_1BJVlg _11MZbx"]').click()
        //cy.get('[class="TSD49J"]').last().click()
        cy.get('[class="gqcSqV YGE0gZ"]').click()
        cy.get('[class="wsejfv"]').click()
    })
        //cy.get('[aria-label="Fashion"]').click
        
        beforeEach("",()=>{
   cy.log("beforeeach")
        }
        )
        after("",()=>{
cy.log("after")
        })
        afterEach("",()=>{

            cy.log("aftereach")
        })
        
    })

