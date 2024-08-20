import { Vessel } from './../../../proxy/vessels/models';
import { DataServiceService } from './../../../shared/data-service.service';
import { Component, OnInit } from '@angular/core';
import { JobplanHistoryService } from '@proxy/jobplan-historys';

@Component({
  selector: 'app-jobplan-history',
  templateUrl: './jobplan-history.component.html',
  styleUrls: ['./jobplan-history.component.scss']
})
export class JobplanHistoryComponent implements OnInit {
vessel
equipmentId
historyList:any
selectedJobOrder
  constructor(private data: DataServiceService,
    private jobplanHisoryService:JobplanHistoryService) { }

  ngOnInit(): void {
    
  this.data.currentEquipmentCode.subscribe(message=>this.equipmentId=message)
  this.data.currentVesselName.subscribe(name=>this.vessel=name)
  this.data.currentJobOrder.subscribe(name=>this.selectedJobOrder=name)
    this.jobplanHisoryService.jobplanHistoryByJobOrderAndVesselName(this.selectedJobOrder.toString(),this.vessel).subscribe(
      s=>{
        this.historyList=s
      }
    )
  }

}
