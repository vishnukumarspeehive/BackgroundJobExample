import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jpbplan-detail-by-hr',
  templateUrl: './jpbplan-detail-by-hr.component.html',
  styleUrls: ['./jpbplan-detail-by-hr.component.scss']
})
export class JpbplanDetailByHrComponent implements OnInit {
  @Input() getjobplanId:string;  
  constructor() { }

  ngOnInit(): void {
    alert("jobplnid"+this.getjobplanId)
  }

}
