describe('Testing the Chuck Norris App', () => {

  cy.visit('http://localhost:3000');

  it('renders the page', () => {
    cy.get('.box').should('exist');
    cy.get('.container').should('exist');
    cy.get('.search-box').should('exist');
  });

  it('autofocuses the input', () => {
    cy.get('input').should('be.focused');
  });


  it('fetches from api upon button click', async () => {
    const initialMessage = 'Chuck Norris once fetched a joke by roundhouse kicking a button.'
    function getText() {
      return new Promise((res) =>
        cy.get('#chuck-joke').then((el) => {
          res(el.text());
        })
      )
    }
    const joke = await getText()
    expect(joke).to.equal(initialMessage)

    cy.get('button').click()

    cy.wait(1000)

    const newJoke = await getText()

    expect(newJoke).to.not.equal(joke)
  });

  it('renders the loading spinner', () => {
    cy.get('button').click()
    cy.get('svg').should('exist')
    cy.wait(1000)
    cy.get('svg').should('not.exist')
  })

});
