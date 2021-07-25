/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable jest/valid-expect-in-promise */
describe('todo app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  afterEach(() => {
    cy.wait(2000);
  });

  it('successfully add a todo on the todo list', () => {
    const todo = '양치질';
    cy.getByTestId('8063f348-ecfb-11eb-9a03-0242ac130003').within(() => {
      cy.get('input')
        .type(todo)
        .should('have.value', todo)
        .type('{enter}')
        .should('have.value', '');
    });

    cy.getByTestId('8063f5be-ecfb-11eb-9a03-0242ac130003')
      .contains(todo)
      .should('exist');
  });

  describe('todo list', () => {
    beforeEach(() => {
      cy.fixture('todos').then((todos) => {
        cy.getByTestId('8063f348-ecfb-11eb-9a03-0242ac130003').within(() => {
          todos.forEach((todo) => {
            cy.get('input').type(todo).type('{enter}');
          });
        });
      });
    });
    it('successfully delete every todo on the todo list', () => {
      cy.getByTestId(`8063f6ae-ecfb-11eb-9a03-0242ac130003양치질`)
        .contains('X')
        .click();

      cy.getByTestId('8063f5be-ecfb-11eb-9a03-0242ac130003')
        .contains('양치질')
        .should('not.exist');
    });
    it('successfully done every todo on the todo list', () => {
      cy.fixture('todos').then((todos) => {
        todos.forEach((todo) => {
          cy.getByTestId(`8063f6ae-ecfb-11eb-9a03-0242ac130003${todo}`)
            .contains('done')
            .click();

          cy.getByTestId(`8063f6ae-ecfb-11eb-9a03-0242ac130003${todo}`)
            .find('div')
            .should('have.class', 'done');
        });
      });
    });
  });
});
