import { JobplanService } from '@proxy/jobplans';
import { UnscheduledJobService } from '@proxy/unscheduled-jobs';

import { EquipmentService } from '@proxy/equipments';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DataServiceService } from 'src/app/shared/data-service.service';


import { ListService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { Location } from '@angular/common';

@Component({
  selector: 'app-postponedjobs',
  templateUrl: './postponedjobs.component.html',
  styleUrls: ['./postponedjobs.component.scss']
})
export class PostponedjobsComponent implements OnInit {
vessel
title=""
status=0
unscheduledJob:any;
selectedJobOrder=null;
isVisible = false;
inputValue?: string;
jobCode
completedDate
equipmentName
remark
reportedby
jobTitle
interval
equipmentId:string
name;
vesselId=null
date = null;
  isEnglish = false;
  constructor(public readonly list: ListService, 
    private unscheduledjobService: UnscheduledJobService, 
    private data:DataServiceService,
    private jobplanservice:JobplanService,
    private _location: Location, private router:Router,private  equipmentService:EquipmentService
    ,private route:ActivatedRoute,
    private modal: NzModalService) {
      this.checkVesselIsSelected();
    }

  ngOnInit() {
    //this.data.currentVesselName.subscribe(name=>this.vessel=name)
    this.data.currentEquipmentCode.subscribe(message=>this.equipmentId=message)
    this.data.currentVesselName.subscribe(name=>this.vessel=name)
    this.jobplanservice.getList({} as any).subscribe((response) => {
      //this.unscheduledJob = response;
      this.unscheduledJob=response.items.filter(x=>x.jobStatus==2 && x.vessel==this.vessel)

     console.log("postponedjobs",this.unscheduledJob)

    });
  }
  vesselName
  eqpCode
    checkVesselIsSelected(){
      this.route.params.subscribe(params => {
        this.vesselName= params['vesselName']
        this.eqpCode= params['equipmentCode']
      })
      if(this.vesselName!=null && this.eqpCode!=null){
        this.router.navigate([`landing//PostJob/${this.vesselName}/${this.eqpCode}`]);
      }
       this.route.params.subscribe(params => {
         this.vesselId = params['id']
  
         if(this.vesselId=="Vessel"){// deafult msg
          this.warning()
         this.router.navigate(['/landing/vesselList']);
           
        }
        else{
         // alert(this.vesselId)
         this.router.navigate([`landing/PostJob/${this.vesselId}`]);
        }
     });
     
    }
    warning(): void {
      this.modal.warning({
        nzTitle: 'This is an warning message',
        nzContent: 'Please select a vesssel'
      });
    }




  selectJob(data){
    this.selectedJobOrder=data.jobOrder;
   // alert("hai"+this.selectedJobOrder)
    this.jobCode=data.jobOrder
    this.reportedby=data.assignedTo
  this.equipmentName=data.equipmentName
  this.jobTitle=data.jobTitle
  this.interval=data.interval

  }



onChange(result: Date): void {
  console.log('onChange: ', result);
}
completeJob(){
  if(this.selectedJobOrder==null){
    alert("Please select a Job")
  }
  this.title="COMPLETE JOB"
  this.status=1;
  this.isVisible = true;
 
}


showModal(): void {
 

}

handleOk(): void {
  console.log('Button ok clicked!');
  //alert(this.status)
  if(this.status==1){  // complete job 
  this.jobplanservice.completeJobByDtAndBid1AndRemarkAndVesselAndInterval(this.date,this.jobCode,this.remark,this.vessel,this.interval).subscribe(s => {
    
        });
  }

  if(this.status==2){// postponed job
 this.jobplanservice.postponeJobByPostponeDateAndJobOrder(this.date,this.jobCode).subscribe(s=>{

 });
  }
  
  this.refresh()
  this.isVisible = false;
}

handleCancel(): void {
  console.log('Button cancel clicked!');
  this.isVisible = false;
}

listOfColumn = [
    {
      title: 'JobTitile',
      compare: null,
      priority: false
    },
    {
      title: 'Equipment Name',
      compare: null,
      priority: false
    },
    {
      title: 'Last Done Date',
      compare: null,
      priority: false
    },
    {
      title: 'NextDueDate',
      compare: null,
      priority: false
    },
    {
      title: 'Interval',
      compare: null,
      priority: false
    },
    {
      title: 'JobOrdar',
      compare: (a: DataItem, b: DataItem) => a.jobOrder - b.jobOrder,
      priority: 3
    },
    {
      title: 'DueHrs',
      compare: (a: DataItem, b: DataItem) => a.dueHrs - b.dueHrs,
      priority: 2
    },
    {
      title: 'Reportedby',
      compare: null,
      priority: false
    },
    
  ];


  refresh(): void {
    // alert("refreshing page")
     this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
       console.log(decodeURI(this._location.path()));
       this.router.navigate([decodeURI(this._location.path())]);
     });
   }
  
}

interface DataItem {
  vesselId: string;
  equipmentCode: string;
  equipmentName: string;
  vessel: string;
  jobTitle: string;
  jobDescription: string;
  calFrequency: string;
  runFrequency: string;
  frequencyType: string;
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
  interval: number;
  dueHrs: number;
  rhrFromLastMaintenance: number;
  presentRhr: number;
  hoursToGo: number;
  previousReading: number;
  nextDueHr: number;
  takenOrNot: number;
}

