import ColorsPage from "../../src/pages/ColorsPage";

describe("Colors.cy.ts", () => {
  it("should component test the colors page", () => {
    cy.mount(ColorsPage);
  });
});
