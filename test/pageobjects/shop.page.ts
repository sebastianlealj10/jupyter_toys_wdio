import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShopPage extends Page {
    /**
    Get a toy as WebElement and click on its buy button.
     */
    public async buyToy (toyName: string) {
         const toyElement: WebdriverIO.Element = await (await $(`img[src~="images/src-embed/${toyName}.jpg"]`).parentElement()).$('p > a');
         await toyElement.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('shop');
    }
}

export default new ShopPage();