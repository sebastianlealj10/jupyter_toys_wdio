import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {

    /**
     * define selectors using getter methods
     */
    public get totalLabel() {
        return $('.total');
    }

    public get EmptyCartButton() {
        return $('.btn-danger')[1];
    }

    /**
    Fill the form and submit it.
     */
    public async isToyPresent(toyName: string) {
        const toyElement: WebdriverIO.Element = await $(`img[src~="images/src-embed/${toyName}.jpg"]`);
        return toyElement.isDisplayed
    }

    public async checkToySubTotal(toyName: string) {
        const toyRow: WebdriverIO.Element = await (await (await $(`img[src~="images/src-embed/${toyName}.jpg"]`)).parentElement()).parentElement();
        const toyPrice: number = Number((await (await toyRow.$('td:nth-child(2)')).getText()).substring(1));
        const toyQuantity: number = Number((await (await toyRow.$('td:nth-child(3) > input')).getAttribute('value')));
        const toySubtotal: number = Number((await (await toyRow.$('td:nth-child(4)')).getText()).substring(1));
        if ((toyPrice * toyQuantity) == toySubtotal) {
            return toySubtotal;
        }
        return NaN;
    }

    public async getTotal() {
        const total: number = Number((await (await this.totalLabel).getText()).substring(7));
        return total;
    }

    public async emptyCart() {
        await this.EmptyCartButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open('cart');
    }
}

export default new CartPage();