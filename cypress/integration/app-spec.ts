// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("App", function () {
  beforeEach(function () {
    cy.visit("/login");
  });

  it("renders the app should find h2 with login", function () {
    cy.get("h3").should("contain", "Log In!");
  });

  it("should find the 1st input and type admin", function () {
    cy.get("input").first().type("admin").should("have.value", "admin");
  });

  it("should find the 2nd input and type 123", function () {
    cy.get("input").last().type("123").should("have.value", "123");
  });

  it("should cliked the button and login", function () {
    cy.get("input").first().type("admin").should("have.value", "admin");
    cy.get("input").last().type("123").should("have.value", "123");
    cy.get("button").click();
  });
});

export {};
