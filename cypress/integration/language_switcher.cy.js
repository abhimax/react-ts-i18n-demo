describe('Language Switcher', () => {
    it('should switch to Spanish and verify content', () => {
      cy.visit('http://localhost:3000')
      cy.contains('Español').click()
      cy.get('h1').should('contain', 'Bienvenido a React y react-i18next')
      cy.get('p').should('contain', 'Esta es una descripción en español.')
    })
  
    it('should switch to Sinhala and verify content', () => {
      cy.visit('http://localhost:3000')
      cy.contains('සිංහල').click()
      cy.get('h1').should('contain', 'React සහ react-i18next වෙත සාදරයෙන් පිළිගනිමු')
      cy.get('p').should('contain', 'මෙය සිංහල භාෂාවේ විස්තරයකි.')
    })
  
    it('should switch back to English and verify content', () => {
      cy.visit('http://localhost:3000')
      cy.contains('English').click()
      cy.get('h1').should('contain', 'Welcome to React and react-i18next')
      cy.get('p').should('contain', 'This is a description in English.')
    })
  })
  