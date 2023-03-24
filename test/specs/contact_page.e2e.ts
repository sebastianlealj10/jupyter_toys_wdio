import ContactPage from '../pageobjects/contact.page'

describe('Validation over the Contact page - Test cases 1 and 2', () => {
    it('The Contact page should check that all mandatory fields are populated by the user', async () => {
        await ContactPage.fillInvalidForm();
        expect(await ContactPage.isSuccessfulHeaderMessage()).toBeFalsy();
    });

    it('The Contact page should validate the successful submission message', async () => {
        await ContactPage.fillForm('Jhon Doe', 'jhondoe@test.com', 'Hey! I\'m Jhon Doe and I\'d like to contact you');
        expect(await ContactPage.isSuccessfulHeaderMessage()).toBeTruthy();
    });

    beforeEach( async () => {
        await ContactPage.open();
      });
})
