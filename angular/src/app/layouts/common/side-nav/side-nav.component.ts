import { DataServiceService } from './../../../shared/data-service.service';
import { Vessel } from './../../../proxy/vessels/models';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
equipmentId
  constructor(private router:Router,private data: DataServiceService) { }

  ngOnInit(): void {
    
  this.data.currentEquipmentCode.subscribe(message=>this.equipmentId=message)
  this.data.currentVesselName.subscribe(name=>this.vessel=name)
  }
  loadPlanedJob(){
    
    this.router.navigate([`/planedJob/${this.vessel}`]);
  }
  loadBreakdownJob(){
    
    this.router.navigate([`landing/breakdown/${this.vessel}`]);
  }
  loadmdm(){
    
    this.router.navigate([`/mdm/${this.vessel}`]);
  }
  loadUnscheduledJob(){
    
    this.router.navigate([`/landing/unscheduledJob/${this.vessel}`]);
  }

  loadDueJob(){
    
    this.router.navigate([`/landing/dueJob/${this.vessel}`]);
  }
  loadPostponedJob(){
    
    this.router.navigate([`/landing/PostJob/${this.vessel}`]);
  }


 vessel
  nzEvent(event: NzFormatEmitEvent): void {
   // this.data.selectedEquipmentCode(event.node.key)
   // alert("tesyw")7;
    console.log("Selcted",event);
    console.log(event.eventName);
  }

}
