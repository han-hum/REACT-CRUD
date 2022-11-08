describe('Testing CRUD operations', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    })
  it('Checks for products', () => {

    cy.get('table').first().should('contain.text', 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');

    cy.get('table').last().should('contain.text', 'DANVOUY Womens T Shirt Casual Cotton Short')

  })
  it('Deletes a product', () => {

    cy.get('button[id=2]').should('contain.text','Add').click();

    cy.get('tbody[key=2]').should('not.exist');
})
it('Edits a product', () => {

    cy.get('td[name=2]').should('contain.text','Update').click();

    cy.get('input[name=title]').clear();

    cy.get('input[name=title]').type('Alice').should('have.value', 'Alice');

    cy.get('button[type=submit]').should('contain.text', 'Update').click();

    cy.get('button[name=close]').should('contain.text', 'Close').click();

    //cy.get('button[id=8]').should('contain.text','Remove').click();

    cy.get('table').last().should('contain.text', 'Alice');
  })

it('Create a new product', () => {

    cy.get('button').should('contain.text', 'Add').click();

    cy.get('input[name=title]').focus().type(
      'Deimar'
    ).should('have.value', 'Deimar');

    cy.get('input[name=price]').focus().type(
      '100'
    ).should('have.value', '100');

    cy.get('input[name=category]').focus().type(
      'electronics'
    ).should('have.value', 'electronics');

    cy.get('button[type=submit]').click();

    cy.get('table').first().should('contain.text', 'Deimar');
})

})
