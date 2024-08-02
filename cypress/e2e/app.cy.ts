describe('e2e tests', () => {
  it('should display the correct color when parameters are adjusted', () => {
    cy.visit('/');
    cy.get('#sum_slider').as("range");
    cy.get("@range").should("have.length", 1);
    cy.get("@range").invoke("val", 255).trigger("input");
    cy.get("@range").invoke("val", 48).trigger("input");
    cy.get("@range").invoke("val", 139).trigger("input");
    cy.get("@range").invoke("val", 1).trigger("change");

    cy.get("@range").should("have.value", "1");
  });
});
