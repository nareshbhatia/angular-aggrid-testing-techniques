import { ClientSideRowModelModule } from '@ag-grid-community/all-modules';
import { GridOptions, Module } from '@ag-grid-community/core';
import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../domain/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  @Input() orders: Order[];

  modules: Module[] = [ClientSideRowModelModule];

  gridOptionSetting: GridOptions;

  colDefs = [
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

  constructor() { }

  ngOnInit(): void {
    this.gridOptionSetting = {
      rowData: this.orders,
      columnDefs: this.colDefs
    }
  }

}
