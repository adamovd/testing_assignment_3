import { data } from "cypress/types/jquery";

describe("testing movieapp", () => {
  it("should show form", () => {
    cy.visit("http://localhost:1234");
    cy.get("form").should("have.id", "searchForm");
  });

  it("should be able to type", () => {
    cy.visit("http://localhost:1234");
    cy.get("input").type("Star Wars").should("have.value", "Star Wars");
  });

  it("should search with value", () => {
    cy.visit("http://localhost:1234");
    cy.intercept("GET", "http://omdbapi.com/*", {}).as("movieSearch");
    cy.get("input").type("Star").should("have.value", "Star");
    cy.get("button").click();
    cy.wait("@movieSearch").its("request.url").should("contain", "Star");
  });

  it("should create divs", () => {
    cy.visit("http://localhost:1234");
    cy.intercept("GET", "http://omdbapi.com/*").as("movieSearch");
    cy.get("input").type("Star").should("have.value", "Star");
    cy.get("button").click();
    cy.get(".movie").should("have.length", 10);
    cy.get(".movie:first").contains("A New Hope");
  });

  it("should show noMessage", () => {
    cy.visit("http://localhost:1234");
    cy.get("input").type("s").should("have.value", "s");
    cy.get("button").click();
    cy.get("p").contains("sökresultat");
  });
});
