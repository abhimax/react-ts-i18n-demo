describe('Contact Form Submission', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should submit the form and display the user information in English', () => {
    cy.contains('English').click()
    cy.get('[data-test-id="name-input"]').type('John Doe')
    cy.get('[data-test-id="message-input"]').type('This is a test message.')
    cy.get('[data-test-id="submit-button"]').click()
    cy.get('[data-test-id="greeting"]').should('contain', 'Hi, John Doe')
    cy.get('[data-test-id="contact-details"]').within(() => {
      cy.get('p').eq(0).should('contain', 'Name: John Doe')
      cy.get('p').eq(1).should('contain', 'Message: This is a test message.')
    })
  })

  it('should submit the form and display the user information in Spanish', () => {
    cy.contains('Español').click()
    cy.get('[data-test-id="name-input"]').type('Juan Perez')
    cy.get('[data-test-id="message-input"]').type('Este es un mensaje de prueba.')
    cy.get('[data-test-id="submit-button"]').click()
    cy.get('[data-test-id="greeting"]').should('contain', 'Hi, Juan Perez')
    cy.get('[data-test-id="contact-details"]').within(() => {
      cy.get('p').eq(0).should('contain', 'Nombre: Juan Perez')
      cy.get('p').eq(1).should('contain', 'Mensaje: Este es un mensaje de prueba.')
    })
  })

  it('should submit the form and display the user information in Sinhala', () => {
    cy.contains('සිංහල').click()
    cy.get('[data-test-id="name-input"]').type('John Doe')
    cy.get('[data-test-id="message-input"]').type('මෙය පරික්ෂණ පණිවිඩයකි.')
    cy.get('[data-test-id="submit-button"]').click()
    cy.get('[data-test-id="greeting"]').should('contain', 'Hi, John Doe')
    cy.get('[data-test-id="contact-details"]').within(() => {
      cy.get('p').eq(0).should('contain', 'නම: John Doe')
      cy.get('p').eq(1).should('contain', 'පණිවිඩය: මෙය පරික්ෂණ පණිවිඩයකි.')
    })
  })
})