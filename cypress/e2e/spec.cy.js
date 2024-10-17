describe('start testing',() => {
  it('open web', ()=>{
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    cy.contains('GREENKART')
  })
})

