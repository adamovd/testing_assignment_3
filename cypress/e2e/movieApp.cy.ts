import { movies, response } from "./mock";

movies;

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
    cy.intercept("GET", "http://omdbapi.com/*", { fixture: "mocks" }).as(
      "movieSearch"
    );
    cy.visit("http://localhost:1234");
    cy.get("input").type("Star");
    cy.get("button").click();
    cy.wait("@movieSearch").its("request.url").should("contain", "Star");
  });

  it("should create divs", () => {
    cy.intercept("GET", "http://omdbapi.com/*", { fixture: "mocks" }).as(
      "movieSearch"
    );
    cy.visit("http://localhost:1234");
    cy.get("input").type("Star").should("have.value", "Star");
    cy.get("button").click();
    cy.get("div:first").should("have.id", "movie-container");
    cy.get(".movie").should("have.length", 10);
    cy.get(".movie:first").contains("A New Hope");
  });

  it("should show noMessage", () => {
    cy.visit("http://localhost:1234");
    cy.get("input").type("s");
    cy.get("button").click();
    cy.get("p").contains("sökresultat");
  });
});
