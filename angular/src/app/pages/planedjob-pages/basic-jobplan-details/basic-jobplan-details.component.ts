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
  selector: 'app-basic-jobplan-details',
  templateUrl: './basic-jobplan-details.component.html',
  styleUrls: ['./basic-jobplan-details.component.scss']
})
export class BasicJobplanDetailsComponent implements OnInit {
  date = null;
  isEnglish = false;
  selectedEquipmentCode
  vessel
  equipment:any
  listOfPosition: NzPlacementType[] = ['bottomLeft'];
  @Input() getjobplanId:string;
  jobplan:CreateUpdateJobplanDto
  selectedJobplan = {} as JobplanDto;
  form: FormGroup;


  constructor(public readonly list: ListService, private jobplanService: JobplanService,
    private jobplanServicenew:JobplanService,
    
    private fb: FormBuilder,
    private data:DataServiceService,
    private equipmentService:EquipmentService,
    ) { }
    
 ngOnInit(): void {
  
   this.data.currentEquipmentCode.subscribe(code=>this.selectedEquipmentCode=code)
   this.data.currentVesselName.subscribe(name=>this.vessel=name)
   //alert(this.selectedEquipmentCode)
   this.equipmentService.getEquipmentDetailsByEquipmentCodeAndVesselName(this.selectedEquipmentCode,this.vessel).subscribe(s => {
    console.log('SelctedEquipment',s);
    this.equipment = s;


    alert("jobplnid"+this.getjobplanId)
    this.jobplanServicenew.get(this.getjobplanId).subscribe(s => {
    //this.jobplan=s;
    });
  })

 
 }
 
//  onChange(result: Date): void {
//   console.log('onChange: ', result);
// }
editJobplan(id: string) {
  this.jobplanService.get(id).subscribe((job) => {
   //this.jobplan = job;
    
  });
}

 x:CreateUpdateJobplanDto
  onSubmit(frm:NgForm,result: Date){
    alert("hi")
   console.log('onChange: ', result);
    var lastDonedate=frm.value.lastdone;
    var joborder=frm.value.JobOrder2;
   // alert("last"+lastDonedate+"jobordar="+joborder)
   var jobplanDto=new CreateUpdateJobplanDto()
   jobplanDto.jobOrder=joborder
   jobplanDto.lastDoneDate=lastDonedate
    this.jobplanServicenew.editJobplanDetailsByBasicJobDetail(jobplanDto).subscribe(s => {
      alert("done")
    });
  }

}

 class CreateUpdateJobplanDto {
  vesselId: string;
  equipmentCode: string;
  equipmentName: string;
  vessel: string;
  jobTitle: string;
  jobDescription: string;
  calFrequency: string;
  runFrequency: string;
  frequencyType: string;
  horizonfrequencyType: string;
  department: string;
  priority: string;
  rank: string;
  assignedTo: string;
  lastDoneDate: string;
  nextDueDate: string;
  jobType: string;
  maintenanceType: string;
  jobStatus: number;
  jobPlanStatus: string;
  jobOrder: number;
  initialReading: number;
  lastReading: number;
  planHorizon: number;
  jobCompletedDate: string;
  reading: string;
  remark: string;
  status: string;
  dueRhs: number;
  universalJobCode: string;
  deleteStatus: number;
  temporaryReading: number;
  interval?: number;
  dueHrs: number;
  rhrFromLastMaintenance: number;
  presentRhr: number;
  hoursToGo: number;
  previousReading: number;
  nextDueHr: number;
  takenOrNot: number;
  diffHorInter: number;
  jobOrder3: number;
  planhorizon: string;
  job_Type: string;
  maintenance_Type: string;
  nextduedateaftercomp: string;
  horizonFrequencyType: string;
  lastdone: string;
  currentRhs: number;
  presentRHr: number;
}

