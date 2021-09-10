import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent {
  @Output() valueChange = new EventEmitter();
  errorMessage: string;
  fileName: string;
  constructor() { }

  uploadFile(event: any): void {
    if (event.target.files.length !== 1) {
      this.errorMessage = 'Please choose a json file';
    } else {
      const reader = new FileReader();
      reader.onloadend = (e) => {
        if (reader.result.toString()) {
          this.valueChange.emit(JSON.parse(reader.result.toString()));
          this.errorMessage = '';
          this.fileName = event.target.files[0].name;
        } else {
          this.errorMessage = 'Please choose a json file';
          this.valueChange.emit([]);
          this.fileName = '';
        }
      };
      reader.readAsText(event.target.files[0]);
    }
  }
}
