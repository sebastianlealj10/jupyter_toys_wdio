import ShopPage from '../pageobjects/shop.page'
import CartPage from '../pageobjects/cart.page'
import shopPage from '../pageobjects/shop.page';

describe('Validation over the Shop page - Test cases 3 and 4', () => {

    it('The Shop page should calculate the totals of the checked items', async () => {
        await ShopPage.buyToy('frog');
        await ShopPage.buyToy('frog');
        await ShopPage.buyToy('bunny');
        await ShopPage.buyToy('bunny');
        await ShopPage.buyToy('bunny'); 
        await ShopPage.buyToy('bunny');
        await ShopPage.buyToy('bunny');
        await ShopPage.buyToy('valentine'); 
        await ShopPage.buyToy('valentine');
        await ShopPage.buyToy('valentine');
        await CartPage.open();
        const frogSubtotal = await CartPage.checkToySubTotal('frog');
        expect(frogSubtotal).toBeTruthy;
        const bunnySubtotal = await CartPage.checkToySubTotal('bunny');
        expect(bunnySubtotal).toBeTruthy;
        const valentineSubtotal = await CartPage.checkToySubTotal('valentine');
        expect(valentineSubtotal).toBeTruthy;
        const total = await CartPage.getTotal();
        console.log(total);
        expect(total).toEqual(frogSubtotal + bunnySubtotal + valentineSubtotal);
    });

    it('The Shop page should allow to add products to the cart', async () => {
        await ShopPage.buyToy('cow');
        await ShopPage.buyToy('cow');
        await ShopPage.buyToy('bunny');
        await ShopPage.buyToy('bunny');
        await CartPage.open();
        expect(CartPage.isToyPresent('cow')).toBeTruthy;
        expect(CartPage.isToyPresent('bunny')).toBeTruthy;
    });

    beforeEach( async () => {
        await ShopPage.open();
      });
})
