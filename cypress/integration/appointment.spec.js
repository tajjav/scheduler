describe("Appointments", () => {

  it("should book an interview", () => {
    // Visits the root of our web server
    // Clicks on the "Add" button in the second appointment
    // Enters their name
    // Chooses an interviewer
    // Clicks the save button
    // Sees the booked appointment
  });

  it("should edit an interview", () => {
    // Visits the root of our web server
    // Clicks the edit button for the existing appointment
    // Changes the name and interviewer
    // Clicks the save button
    // Sees the edit to the appointment
  });

  it("should cancel an interview", () => {
    // Visits the root of our web server
    // Clicks the delete button for the existing appointment
    // Clicks the confirm button
    // Sees that the appointment slot is empty
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