import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgGridModule } from 'ag-grid-angular';

import { Order } from '../domain/order';
import { OrderListComponent } from './order-list.component';

// Test orders
const orders: Order[] = [new Order(1, 10), new Order(2, 20)];

describe('OrderListComponent', () => {
    let component: OrderListComponent;
    let fixture: ComponentFixture<OrderListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrderListComponent],
            imports: [AgGridModule.withComponents([])]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrderListComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        component.orders = orders;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should have expected column headers', () => {
        component.orders = orders;
        fixture.detectChanges();

        const elm = fixture.nativeElement;
        const grid = elm.querySelector('ag-grid-angular');
        const headerCells = grid.querySelectorAll('.ag-header-cell-text');
        const headerTitles = Array.from(headerCells).map((cell: any) =>
            cell.textContent.trim()
        );
        expect(headerTitles).toEqual(['ID', 'Quantity']);
    });

    it('first row should have expected data', () => {
        component.orders = orders;
        fixture.detectChanges();

        const elm = fixture.nativeElement;
        const grid = elm.querySelector('ag-grid-angular');
        const firstRowCells = grid.querySelectorAll(
            'div[row-id="0"] div.ag-cell-value'
        );
        const values = Array.from(firstRowCells).map((cell: any) =>
            cell.textContent.trim()
        );
        expect(values).toEqual(['1', '10']);
    });
});
