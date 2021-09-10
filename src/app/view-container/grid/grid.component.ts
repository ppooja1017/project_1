import { Component, OnInit, Input } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() dataList: any;
  Object = Object;

  constructor() { }

  ngOnInit(): void {

  }

  isHtmlPrintable(value: any): any {
    return (
      value === '' || typeof value === 'string' || typeof value === 'number'
    );
  }
  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }
}

