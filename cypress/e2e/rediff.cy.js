describe("Verify Login Functrionality", () => {
  it("positive Login Test ", () => {
    cy.visit(
      "https://register.rediff.com/register/register.php?FormName=user_details"
    );

    cy.get('[name^="name"]').type("Anilr")
    cy.get('[name^="login"]').type("anilr")
    cy.get('[class="btn_checkavail"]').click()
    //to Hadle error Msg
    //cy.contains('Sorry, the ID that you are looking for is taken.').should('exist')
    //to Handle try new id
    //cy.get('[class="f12"]').should('contains.text','Type a new ID or choose from the suggested IDs')
    //To Handle Check Availability
    cy.get('[class="btn_checkavail"]').click()
    cy.wait(4000)
    //To Get The newPassword Locator And Type the newPassword
    cy.get('[id="newpasswd"]').type("anilkumar@")
    //To Get The RetypePassword Locator And Type the RetypePassword
    cy.get('[id="newpasswd1"]').type("anilkumar@")
    // To Handle The The Email Locator and type the email id
    cy.get('[name^="altemail"]').type("anilr@123")
    cy.get('[name^="chk_altemail"]').check()
    //To Handle The mobile num Locator and Type mobile num
    cy.get('[id="mobno"]').type("6302456528")
    //To Handle The mobile num Locator and Type mobile num
    //cy.get('[id="country_id"]').select(1).should("have.value","+91")
    cy.get('[id="lbl_txt"]').click()
   // cy.get('[value="f"]').check();
    // yields <option value="456">apples</option>
    // cy.get('[name*="DOB_Day"]').select('01').should("have.value", "01");
   // cy.get('select').select('22')
    // cy.get('[name*="DOB_Month"]').select(1).should("have.value",'01');
    // cy.get('[name^="DOB_Year"]').select(1).should("have.value",'02')
    //cy.get('[value="f"]').check()
   // cy.get('[id="country"]').select('99').should("have.value",'99')
   cy.get('[name*="DOB_Day"]').select('22').
   cy.get('[name*="DOB_Month"]').select('09').should("have.value",'09')

  });
});
