describe("Appointments", () => {

  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");
  
    cy.visit("/");
  
    cy.contains("Monday");
  });

  it("should book an interview", () => {
    // Reset DB
    //cy.request("GET", "/api/debug/reset")
    // Visits the root of our web server
    //cy.visit("/");
    //cy.contains("Monday");
    // Clicks on the "Add" button in the second appointment
    cy.get("[alt=Add]")
      .first()
      .click();
    // Enters their name
    cy.get("[data-testid=student-name-input]").type("Lydia Miller-Jones");
    // Chooses an interviewer
    cy.get("[alt='Sylvia Palmer']").click();
    // Clicks the save button
    cy.contains("Save").click();
    // Sees the booked appointment
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });

  it("should edit an interview", () => {
    // Visits the root of our web server
    // Clicks the edit button for the existing appointment
    cy.get("[alt=Edit]")
      .first()
      .click({ force: true });// as edit button only reveals when hover over
    // Changes the name and interviewer
    cy.get("[data-testid=student-name-input]").clear().type("Lydia Miller-Jones");
    cy.get("[alt='Tori Malcolm']").click();
    // Clicks the save button
    cy.contains("Save").click();
    // Sees the edit to the appointment
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });

  it("should cancel an interview", () => {
    // Visits the root of our web server
    // Clicks the delete button for the existing appointment
    cy.get("[alt=Delete")
      .first()
      .click({ force: true });
    // Clicks the confirm button
    cy.contains("Confirm").click();
    // Sees that the appointment slot is empty
    cy.contains("Deleting").should("exist");
    cy.contains("Deleting").should("not.exist");
  
    cy.contains(".appointment__card--show", "Archie Cohen")
      .should("not.exist");
  });
});

/*
Visits the root of our web server
Changes the day to "Tuesday"
Clicks on the second "Add" button in the schedule
Enters their name
Chooses an interviewer
Clicks the save button
Sees the booked appointment
Clicks the edit button
Changes the name and interviewer
Clicks the save button
Sees the edit to the appointment
Clicks the delete button
Clicks the confirm button
Sees that the appointment slot is empty
*/