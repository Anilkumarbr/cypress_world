class contact{
clickContactBtn(){
    return cy.get(':nth-child(2) > .nav-link')
}
textVisible(){
    return cy.contains('New message')
}
contactEmai()
{
    return cy.get('#recipient-email')
}
contactName()
{
    return cy.get('#recipient-name')
}
message()
{
    return cy.get('#message-text')
}
sendMessage()
{
    return cy.get('[onclick="send()"]')
}
close()
{
    return cy.contains('Close')
}
}
export default contact;