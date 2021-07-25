describe('todo app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('successfully add todo on the todo list', () => {
    const todo = '양치질';
    cy.get('[data-testid="8063f348-ecfb-11eb-9a03-0242ac130003"]').within(
      () => {
        cy.get('input')
          .type(todo)
          .should('have.value', todo)
          .type('{enter}')
          .should('have.value', '');
      }
    );

    cy.get('[data-testid="8063f5be-ecfb-11eb-9a03-0242ac130003"]')
      .contains(todo)
      .should('exist');
  });
});
