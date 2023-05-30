
describe('Home page', () => {
	it('test should check length of available contact options', () => {
		// Expect
		cy.visit('/')
		// Given
		// When
		// Then
		cy.get('div[data-test-id*="fieldset-contact"]').should('have.length', 2)
	})

	// it('test should check if properly selected available options', () => {
	// 	// Expect
	// 	const privacyOptions: ContactOption[] = contactOptions((value: any) => value).filter((item) => item.isVisible)
	// 	cy.visit('/')
	// 	privacyOptions.forEach((option) => {
	// 		// Given
	// 		cy.ppSelectOption(option.id)
	// 		// When
	// 		cy.ppClickNext()
	// 		// Then
	// 		cy.get(`#${option.id}`).should('be.visible')
	// 		cy.ppBackToHome()
	// 	})
	// })
})

export {}
