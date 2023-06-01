let price1, price2


describe('Authorization and Registration Tests', () => {
beforeEach(() => {
        cy.visit('https://automationteststore.com/');
        cy.get(`ul#customer_menu_top>li>a`).click();
        cy.get('#loginFrm_loginname').type('Khrystyna');
        cy.get('#loginFrm_password').type('secret');
        cy.get(`button[title='Login']`).click();

        cy.get('.subtext').should('contain.text', 'Khrystyna')
    })


    it('Add new product', () => {
        cy.get('#filter_keyword').type(`Skinsheen Bronzer Stick{enter}`);
        cy.get('.cart').click();
        cy.get('input#cart_quantity50').clear().type('1');
        cy.get('input#cart_quantity50').should('have.value', '1');
        cy.get('#cart_checkout1').click();
        // check fields
        cy.contains('h4.heading4', 'Shipping');
        cy.contains('td.align_left', 'Khrystyna Kr');
        cy.contains('address', '1234 Cypress Street').contains('Lviv L\'viv 70909').contains('Ukraine');
        cy.contains('h4.heading4', 'Payment');
        cy.contains('td.align_left', 'Khrystyna Kr');
        cy.contains('address', '1234 Cypress Street').contains('Lviv L\'viv 70909').contains('Ukraine');
        cy.get('a.checkout_heading').contains(`Skinsheen Bronzer Stick`);
        cy.contains('td', '1');
        // check price
        cy.get('td.checkout_heading').contains('$29.50').invoke('text').then(text => {
        price1 = text.trim();
        });
        cy.get('span.bold').contains('$29.50').invoke('text').then(text => {
        price2 = text.trim();
        expect(price1).to.equal(price2);
        });
        cy.get('#checkout_btn').click();
        cy.get('span.maintext').contains('Your Order Has Been Processed!');
        cy.get('.cart_total').contains('$0.00');

      











      



       

        

        
    })

})