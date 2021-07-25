// declare namespace Cypress {
//     interface Chainable<Subject> {
//     getByTestId(testid, config): Chainable<Subject>;
//     getIframeBody(testid, config): Chainable<Subject>;
//     urlPathShouldBe(path): Chainable<Subject>;
//     login(user?: User): Chainable<Subject>;
//     isWithinViewport(): Chainable<Subject>;
//   }
// }

Cypress.Commands.add('getByTestId', (testid, config) => {
  return cy.get(`[data-testid="${testid}"]`, { ...config });
});
