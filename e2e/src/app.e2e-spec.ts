import { AppPage } from './app.po';

describe('App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should have expected column headers', () => {
        page.navigateTo();
        expect(page.getOrderListHeaders()).toEqual(['ID', 'Quantity']);
    });

    it('first row should have expected data', () => {
        page.navigateTo();
        expect(page.getRowValues(0)).toEqual(['1', '10']);
    });
});
