beforeEach(() => {

  cy
    .visit('./cypress/integration/cypress.html');

});


it('Should use .contains() command', () => {

  cy
    .contains('indigo');

  cy
    .contains('h1', 'Rainbow');

});

it('Should show command chain', () => {

  cy
    .get('.list')
    .find('li')
    .contains('violet');

});

it('Should select element based on position', () => {

  cy
    .get('li')
    .first(); // select "red"

  cy
    .get('li')
    .last(); // select "violet"

  cy
    .get('li')
    .eq(2); // select "yellow"

});

it('Should select an element relative to selected element', () => {

  cy
    .get('.green')
    .next(); // will select the element .blue

  cy
    .get('.green')
    .prev(); // will select the element .yellow

});

it('Should filter elements', () => {

  cy
    .get('li')
    .filter('.primary'); // select all elements with the class .primary

  cy
    .get('li')
    .not('.primary'); // select all elements without the class .primary

});

it('Should look for element', () => {

  cy
    .get('.list')
    .find('.violet'); // finds an element with class .violet inside .list element

  cy
    .get('.violet')
    .parent('.list');

});

it('Should use custom command', () => {

  cy
    .getById('indigo');

});