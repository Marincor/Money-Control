

// function to change range input value //
Cypress.Commands.add('setSliderValue', { prevSubject: 'element' },
(subject, value) => {
    const element = subject[0]

    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
    )?.set
    
    nativeInputValueSetter?.call(element, value)
    element.dispatchEvent(new Event('input', { bubbles: true }))
}
)




describe("In the register financial event form", () => {
  it("shows the message to register a new event", () => {
    cy.visit("/register");

    cy.contains("Register a new event");
  });

  it("shows the labels", () => {
    cy.visit("/register");

    cy.contains("Category").should("to.have.length", 1);
    cy.contains("Type").should("to.have.length", 1);
    cy.contains("Value").should("to.have.length", 1);
  });
  it("shows the category options", () => {
    cy.visit("/register");

    cy.contains("Spent").should("to.have.length", 1);
    cy.contains("Gain").should("to.have.length", 1);
    cy.contains("Donation").should("to.have.length", 1);
  });

  it("shows the type options according to the selected category", () => {
    cy.visit("/register");

    //spent//
    cy.get('[data-cy="spent"]').check();
    cy.get("select").select("Food").should("have.value", "Food");

    //gain//
    cy.get('[data-cy="gain"]').check();
    cy.get("select").select("Salary").should("have.value", "Salary");

    //donation//
    cy.get('[data-cy="donation"]').check();
    cy.get("select").select("ONG").should("have.value", "ONG");
  });
  it("change the value according to the selected range", () => {
    cy.visit("/register");

    cy.get('input[type=range]')
  .invoke('val', 1555)
  .trigger('change')
 
  });

  it("shows the submit button", () => {
    cy.visit("/register");

    cy.get("button").should("to.have.length", 1);
  });
  it("create an event", () => {
    cy.visit("/register");
    cy.get('[data-cy="donation"]').check();
    cy.get("select").select("ONG")
    cy.get('input[type=range]')
    .setSliderValue(2500)
    cy.get('button').click()
  });
});
