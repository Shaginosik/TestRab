describe('My First Tests finance', () => {
  it('Test', () => {
    cy.visit('https://finance.dev.fabrique.studio/');
    cy.get('input[type="email"]').type('admin@admin.ad')
    cy.get('input[type="password"]').type('admin')
    cy.contains('Далее').click()

    })
})