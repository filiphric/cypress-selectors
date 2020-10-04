beforeEach(() => {

  cy
    .visit('./cypress/integration/basic.html');

});


it('Should select elements', () => {

  cy
    .get('h1') // select by tag
    .get('.square') // select by class
    .get('#circle') // select by id
    .get('[shape="triangle"]'); // select by attribute

});