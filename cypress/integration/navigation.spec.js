describe("Navigation", () => {
  
  it("should visit root", () => {
    cy.visit("/");
  });

  it("should navigate to tuesday", () => {
    cy.visit("/");
    //cy.get("li")
    //cy.contains("li","Tuesday")
    cy.contains("[data-testid=day]", "Tuesday")
      .click()
      .should("have.css", "background-color", "rgb(242, 242, 242)");
  });

});


