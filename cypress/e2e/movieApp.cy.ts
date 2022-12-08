beforeEach(() => {
  cy.visit("/");
});

describe("testing movieapp", () => {
  it("should show form", () => {
    cy.get("form").should("have.id", "searchForm");
  });

  it("should be able to type", () => {
    cy.get("#searchText").type("Star Wars").should("have.value", "Star Wars");
  });

  it("should search with API call", () => {
    cy.get("#searchText").type("Matrix");
    cy.get("#search").click();
    cy.get(".movie:first").contains("Matrix");
  });

  it("should search with value with mockdata", () => {
    cy.intercept("GET", "http://omdbapi.com/*", { fixture: "movies" }).as(
      "movieSearch"
    );
    cy.get("#searchText").type("Star");
    cy.get("#search").click();
    cy.wait("@movieSearch").its("request.url").should("contain", "Star");
  });

  it("should create divs", () => {
    cy.intercept("GET", "http://omdbapi.com/*", { fixture: "movies" }).as(
      "movieSearch"
    );
    cy.get("#searchText").type("Star").should("have.value", "Star");
    cy.get("#search").click();
    cy.get("div:first").should("have.id", "movie-container");
    cy.get(".movie").should("have.length", 10);
    cy.get(".movie:first").contains("A New Hope");
    cy.wait("@movieSearch").its("request.url").should("contain", "Star");
  });

  it("should show error because of empty list", () => {
    cy.get("#searchText").type("xzjck");
    cy.get("#search").click();
    cy.get("p").contains("sökresultat");
  });

  it("should show noMessage", () => {
    cy.get("#searchText").type("s");
    cy.get("#search").click();
    cy.get("p").contains("sökresultat");
  });

  it("should empty container and do new search", () => {
    cy.intercept("GET", "http://omdbapi.com/*", { fixture: "movies" }).as(
      "movieSearch"
    );
    cy.get("#searchText").type("Star").should("have.value", "Star");
    cy.get("#search").click();
    cy.get(".movie:first").contains("A New Hope");

    cy.intercept("GET", "http://omdbapi.com/*", { fixture: "movies_2" }).as(
      "movieSearch"
    );
    cy.get("#searchText").clear().type("Matrix");
    cy.get("#search").click();
    cy.get(".movie:first").contains("Matrix");
  });
});
