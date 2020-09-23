import { Component, ElementRef, ViewChild } from '@angular/core';
import { GridApi, GridOptions, GridReadyEvent, Module } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { Order } from './domain/order';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  orders: Order[] = [
    new Order(1, 10),
    new Order(2, 20),
    new Order(3, 30),
    new Order(4, 40),
    new Order(5, 50),
    new Order(6, 60),
    new Order(7, 70),
    new Order(8, 80),
    new Order(9, 90),
    new Order(10, 100),
    new Order(11, 110),
    new Order(12, 120),
    new Order(13, 130),
    new Order(14, 140),
    new Order(15, 150),
    new Order(16, 160),
    new Order(17, 170),
    new Order(18, 180),
    new Order(19, 190),
    new Order(20, 200)
  ];

  // @ViewChild('gridRef', { static: false, read: ElementRef }) gridRef: ElementRef;

  // modules: Module[] = [ClientSideRowModelModule];


  // api: GridApi;
  // gridOptionSetting: GridOptions = {
  //   rowData: [
  //     {
  //       col_1: 'A1111',
  //       col_2: 'A2222'
  //     },
  //     {
  //       col_1: 'B1111',
  //       col_2: 'B2222'
  //     }
  //   ],
  //   columnDefs: [
  //     {
  //       field: 'col_1'
  //     },
  //     {
  //       field: 'col_2'
  //     }
  //   ],
  //   defaultColDef: {
  //     editable: true, // 是否能編輯
  //   },
  //   onGridReady: (event: GridReadyEvent) => this.api = event.api,
  //   onCellKeyDown: (e) => console.log('%c 🌶 onCellKeyDown: ', 'font-size:20px;background-color: #FCA650;color:#fff;', e),
  //   onCellKeyPress: (e) => console.log('%c 🌶 onCellKeyPress: ', 'font-size:20px;background-color: #FCA650;color:#fff;', e),
  //   suppressKeyboardEvent: (e) => {
  //     console.log('%c 🥠 suppressKeyboardEvent: ', 'font-size:20px;background-color: #B03734;color:#fff;', e);
  //     return false;
  //   },
  //   // onCellMouseDown: (e) => console.log('%c 🥚 onCellMouseDown: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', e),
  //   // onRowClicked: (e) => console.log('%c 🍝 onRowClicked: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', e),
  //   // onCellClicked: (e) => console.log('%c 🍝 onCellClicked: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', e),
  //   onCellFocused: (e) => console.log('%c 🍲 onCellFocused: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', e),
  // };
}
