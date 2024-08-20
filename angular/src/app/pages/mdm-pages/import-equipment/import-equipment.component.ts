//import { ImportFileService } from '../../../proxy/import-files/import-file.service';
import {  OnInit, Output, EventEmitter } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';

import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
@Component({
  selector: 'app-import-equipment',
  templateUrl: './import-equipment.component.html',
  styleUrls: ['./import-equipment.component.scss']
})
export class ImportEquipmentComponent{
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

    this.http.post('https://localhost:44320/ImportEquipment/Import', formData, { reportProgress: true, observe: 'events' })
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



//   constructor(private msg: NzMessageService,private importFile:ImportFileService) {}

//   handleChange(info: NzUploadChangeParam): void {
//     if (info.file.status !== 'uploading') {
// //       console.log(info.file, info.fileList);
// // this.importFile.uploadProfileByFile(info.file).subscribe(data => {
// //   // do something, if upload success
// //   }, error => {
// //     console.log(error);
// //   });
//     }
//     if (info.file.status === 'done') {
//       this.msg.success(`${info.file.name} file uploaded successfully`);
//     } else if (info.file.status === 'error') {
//       this.msg.error(`${info.file.name} file upload failed.`);
//     }
//   }
// }