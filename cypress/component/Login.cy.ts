import LoginPage from "../../src/pages/LoginPage";

describe("Login.cy.ts", () => {
  it("should component test the login page", () => {
    cy.mount(LoginPage);
  });
});
