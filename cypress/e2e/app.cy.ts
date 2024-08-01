describe('e2e tests', () => {
  it('should display the correct color when parameters are adjusted', () => {
    cy.visit('/');
    cy.get("[data-cy=red-input]").invoke("val", 255).trigger("change");
    cy.get("[data-cy=green-input]").invoke("val", 48).trigger("change");
    cy.get("[data-cy=blue-input]").invoke("val", 139).trigger("change");
    cy.get("[data-cy=alpha-input]").invoke("val", 1).trigger("change");

    cy.get("[data-cy=panel]").should("have.css", "background-color", "rgba(255, 48, 139, 1)");
  });
});
