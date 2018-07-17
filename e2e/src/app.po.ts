import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getOrderListHeaders() {
        return element
            .all(by.css('.ag-header-cell-text'))
            .map(cell => cell.getText());
    }

    getRowValues(rowId) {
        return element
            .all(by.css(`div[row-id="${rowId}"] div.ag-cell-value`))
            .map(cell => cell.getText());
    }
}
