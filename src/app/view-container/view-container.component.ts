import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.scss']
})
export class ViewContainerComponent implements OnInit {
  dataList: any;

  constructor() { }

  ngOnInit(): void {
  }
  getValue(array: object): void {
    this.dataList = array;
  }
}
