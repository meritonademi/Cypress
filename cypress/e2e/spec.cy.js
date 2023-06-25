describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://185.237.18.28:3000/");
    cy.get(".navbar").contains("Login").click();
    cy.get("[type='email']").type("a@gmail.com");
    cy.get("[type='password']").type("123456");
    cy.get("[type='submit']").click();
    cy.contains("Property type").click();
    cy.get("[name='name']").type("test13assa3");
    cy.get("[type='submit']").click();
  });
});
