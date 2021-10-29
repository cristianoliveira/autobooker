import { person } from '../../fixtures/bkk.json';

describe('attempting to book a slot in BKK', () => {
  beforeEach(() => {
    cy.visit('https://boulderklub.de/');
  });

  describe(
    `booking new slot for ${person.name}` +
      ` in ${Cypress.env('date')},${Cypress.env('time')}`,
    () => {
      it('booking', () => {
        cy.get('.uk-navbar-nav', { timeout: 5000 })
          .should('be.visible')
          .find(':nth-child(8)')
          .find('a')
          .click();

        cy.get('.drp-calendar-day-dates')
          .should('be.visible')
          .contains('31')
          .click();

        cy.get('.drp-course-date-item')
          .contains(`${Cypress.env('date')}, ${Cypress.env('time')}`)
          .parent()
          .parent()
          .parent()
          .find('button')
          .click();

        cy.get('form').find('input').eq(0).type(person.name);
        cy.get('form').find('input').eq(1).type(person.lastName);
        cy.get('form').find('input').eq(2).type(person.birthDate);
        cy.get('form').find('input').eq(3).type(person.address.street);
        cy.get('form').find('input').eq(4).type(person.address.postalCode);
        cy.get('form').find('input').eq(5).type(person.address.city);
        cy.get('form').find('input').eq(6).type(person.fone);
        cy.get('form').find('input').eq(8).type(person.email);

        cy.get('form').find('select').select('Urban Sports Club');

        cy.get('form')
          .find('input[placeholder="Mietgliedsnummer USC*"]')
          .type(person.urbanSportNumber);

        cy.get('form').find('#drp-course-booking-client-terms-cb').click();
        cy.get('form').find('#drp-course-booking-data-processing-cb').click();

        cy.get('form')
          .find('.drp-course-booking-continue')
          .should('be.visible');
        // .click();
      });
    }
  );
});
