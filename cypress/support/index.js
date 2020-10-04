Cypress.Commands.add('getById', (input) => {

  cy
    .get(`[data-cy=${input}]`)

})