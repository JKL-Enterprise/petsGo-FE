describe('Register form tests', () => {
    it('correct refill of the registration form', () => {
        cy.visit("/register")
        cy.findByText(/imię/i).type("Krzysztof")
        cy.findByText(/nazwisko/i).type("Jerzyk")
        cy.findByText(/nazwa użytkownika/i).type("jerzor666")
        cy.findByText(/hasło/i).type("pies12")
        cy.findByText(/opiekun/i).click()
        cy.findByRole('button', {name: /zarejestruj/i}).click()

    })
})
