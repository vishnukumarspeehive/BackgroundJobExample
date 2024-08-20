import { NzModalService } from 'ng-zorro-antd/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from '@abp/ng.core';
import { EquipmentService } from '@proxy/equipments';
import { DataServiceService } from './../../../shared/data-service.service';
import { FormBuilder } from '@angular/forms';
import { NzPlacementType } from 'ng-zorro-antd/dropdown';
import { CreateUpdateJobplanDto,JobplanDto } from './../../../proxy/jobplans/models';
import { NgForm } from '@angular/forms';
import { JobplanService } from '@proxy/jobplans';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms'; // add this

@Component({
  selector: 'app-jobplan-detail-by-date',
  templateUrl: './jobplan-detail-by-date.component.html',
  styleUrls: ['./jobplan-detail-by-date.component.scss']
})
export class JobplanDetailByDateComponent implements OnInit {
  date = null;
  isEnglish = false;
  selectedEquipmentCode
  vessel
  equipment:any
  //jobplan1:any
  listOfPosition: NzPlacementType[] = ['bottomLeft'];
  @Input() getjobplanId:string;
  jobplan:CreateUpdateJobplanDto
  selectedJobplan = {} as JobplanDto;
  form: FormGroup;
  selectedJobOrder

  constructor(public readonly list: ListService, private jobplanService: JobplanService,
    private jobplanServicenew:JobplanService,
    
    private fb: FormBuilder,
    private data:DataServiceService,
    private equipmentService:EquipmentService,
    private route:Router,
    private modal: NzModalService
    ) { }
    
 ngOnInit(): void {
  
   this.data.currentEquipmentCode.subscribe(code=>this.selectedEquipmentCode=code)
   this.data.currentVesselName.subscribe(name=>this.vessel=name)
   //alert(this.selectedEquipmentCode)
   this.equipmentService.getEquipmentDetailsByEquipmentCodeAndVesselName(this.selectedEquipmentCode,this.vessel).subscribe(s => {
    console.log('SelctedEquipment',s);
    this.equipment = s;


    //alert("jobplnid"+this.getjobplanId)
    this.jobplanService.get(this.getjobplanId).subscribe(s => {
    this.jobplan=s;
    });
    this.jobplanServicenew.get(this.getjobplanId).subscribe(s => {
      this.selectedJobplan=s;
      });
  })

 
 }
 
//  onChange(result: Date): void {
//   console.log('onChange: ', result);
// }
editJobplan(id: string) {
  this.jobplanService.get(id).subscribe((job) => {
    this.jobplan = job;
    
  });
}

 x:CreateUpdateJobplanDto
  onSubmit(frm:NgForm){
   //console.log('onChange: ', result);
    var lastDonedate=frm.value.lastdone;
    var joborder=this.selectedJobplan.jobOrder;
   // alert("last"+lastDonedate+"jobordar="+joborder)
   
    this.jobplanService.editJobplanCalendarByModelAndJobOrder2AndLastdone(this.jobplan,Number(joborder),lastDonedate).subscribe(s => {
      
    });
    this.warning()
    this.route.navigate([`/landing/dueJob/${this.vessel}`]);
  }
  warning(): void {
    this.modal.warning({
      nzTitle: 'Success',
      nzContent: ''
    });
  }
}
