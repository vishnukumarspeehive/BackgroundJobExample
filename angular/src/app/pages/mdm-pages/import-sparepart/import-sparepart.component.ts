import {  OnInit, Output, EventEmitter } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';

import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-import-sparepart',
  templateUrl: './import-sparepart.component.html',
  styleUrls: ['./import-sparepart.component.scss']
})
export class ImportSparepartComponent implements OnInit {

  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();

  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post('https://localhost:44320/ImportSparepart/Import', formData, { reportProgress: true, observe: 'events' })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      });
  }



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
