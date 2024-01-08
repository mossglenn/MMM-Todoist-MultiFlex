describe('MMM-Todoist-MultiFlex', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('greetings message is displayed', () => {
    cy.get('div[id$="MMM-Todoist-MultiFlex"] > div > div > div[class="bright light medium green"]')
      .should('have.text', 'MMM-Todoist-MultiFlex says: Hello world Ismar!')
      .should('be.visible');
  });
});
