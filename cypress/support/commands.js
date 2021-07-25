Cypress.Commands.add('getByTestId', (testid, config) => {
  return cy.get(`[data-testid="${testid}"]`, { ...config });
});
