import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../domain/order';

@Component({
    selector: 'app-order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
    @Input() orders: Order[];
    columnDefs = [
        {
            headerName: 'ID',
            field: 'id',
            type: 'numericColumn',
            width: 100
        },
        {
            headerName: 'Quantity',
            field: 'quantity',
            type: 'numericColumn',
            width: 160
        }
    ];

    constructor() {}

    ngOnInit() {}
}
