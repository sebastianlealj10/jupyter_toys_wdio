import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ContactPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get headerMessage () {
        return $('#header-message');
    }

    public get foreNameTextBox () {
        return $('#forename');
    }

    public get emailTextBox () {
        return $('#email');
    }

    public get messageTextBox () {
        return $('#message');
    }

    public get submitButton () {
        return $('.btn-contact');
    }

    /**
    Fill the form and submit it.
     */
    public async fillForm (username: string, email: string, message:string) {
        await this.foreNameTextBox.setValue(username);
        await this.emailTextBox.setValue(email);
        await this.messageTextBox.setValue(message);
        await this.submitButton.click();
    }

    /**
    Fill an invalid form and submit it.
     */
    public async fillInvalidForm () {
        await this.submitButton.click();
    }

    /**
    Check the header message.
     */
    public async isSuccessfulHeaderMessage () {
        const headerText: string = await this.headerMessage.getText();
        const containsErrorMessage: boolean = headerText.includes('but we won\'t get it unless you complete the form correctly');
        return !containsErrorMessage
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('contact');
    }
}

export default new ContactPage();