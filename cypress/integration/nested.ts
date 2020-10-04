beforeEach(() => {

  cy
    .visit('./cypress/integration/nested.html');

});


it('Should select elements', () => {

  cy
    .get('.green .circle')
    .get('.green > .circle');

});