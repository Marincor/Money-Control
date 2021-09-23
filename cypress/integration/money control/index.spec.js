describe("When the user first access to the page, shows", () => {
  it("The dashboard name", () => {
    cy.visit("/");
    cy.contains("Dashboard").should("to.have.length", 1);
  });
  it("The alert message to register a new event", () => {
    cy.visit("/");
    cy.contains("Register an 💰 ↳ event to see something here!").should(
      "to.have.length",
      1
    );
  });
  it("The creator of the app", () => {
    cy.visit("/");
    cy.contains("Coded and created by: Marincor").should("to.have.length", 1);
  });
  it("The lottie animation", () => {
    cy.visit("/");
    cy.get("svg").should("to.have.length", 1);
  });
});
describe("When click", () => {
  it("on the event, goes to the page of register", () => {
    cy.visit("/");

    cy.get("a").should("have.attr", "href").and("include", "register");
    cy.get("a").eq(0).click();
  });
  it("on the creator name, goes to the github page", () => {
    cy.visit("/").then((e) => {
      cy.get("a")
        .eq(1)
        .should("have.attr", "href")
        .and("include", "https://github.com/Marincor");
      cy.get("a").eq(1).click();
    });
  });
});
