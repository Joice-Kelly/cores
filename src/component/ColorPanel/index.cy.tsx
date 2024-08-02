import { mount } from "cypress/react";
import ColorPanel from ".";

describe("ColorPanel", () => {
  it("should color correctly", () => {
    const red = 255;
    const green = 99;
    const blue = 71;
    const alpha = 0.5;
    mount(<ColorPanel red={red} green={green} blue={blue} alpha={alpha} />);
    cy.get('[data-cy="panel"]')
      .should("have.css", "background-color")
      .and("eq", "rgba(255, 99, 71, 0.5)");
  });
  it("should display a transparent square", () => {
    const red = 0;
    const green = 0;
    const blue = 0;
    const alpha = 0;
    mount(<ColorPanel red={red} green={green} blue={blue} alpha={alpha} />);
    cy.get("div")
      .should("have.css", "background-color")
      .and("equal", "rgba(0, 0, 0, 0)");
  });
});
