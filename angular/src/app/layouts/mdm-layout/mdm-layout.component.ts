import { EquipmentService } from '@proxy/equipments';
import { DataServiceService } from './../../shared/data-service.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdm-layout',
  templateUrl: './mdm-layout.component.html',
  styleUrls: ['./mdm-layout.component.scss']
})
export class MdmLayoutComponent implements OnInit {
  selectedValue = null;
  isCollapsed = false;  
  equipmentId:string
  name;
  vessel
  vesselId=null



  constructor(private router:Router,private  equipmentService:EquipmentService
    ,private data: DataServiceService,private route:ActivatedRoute,
    private modal: NzModalService) { 
      this.checkVesselIsSelected();
    }

    vesselName
    eqpCode
      checkVesselIsSelected(){
        this.route.params.subscribe(params => {
          this.vesselName= params['vesselName']
          this.eqpCode= params['equipmentCode']
        })
        if(this.vesselName!=null && this.eqpCode!=null){
          this.router.navigate([`/mdm/${this.vesselName}/${this.eqpCode}`]);
        }
         this.route.params.subscribe(params => {
           this.vesselId = params['id']
    
           if(this.vesselId=="Vessel"){// deafult msg
            this.warning()
           this.router.navigate(['/landing/vesselList']);
             
          }
          else{
           // alert(this.vesselId)
           this.router.navigate([`/mdm/${this.vesselId}`]);
          }
       });
       
      }
   

  onSelection(value:string){

    if(this.selectedValue=="")
    {
     
      this.router.navigate([`/mdm/${this.vessel}/maker1`]);
    }
    if(this.selectedValue=='Model')
    {
      this.router.navigate([`/mdm/${this.vessel}/model`]);
    }
    if(this.selectedValue=="Maker")
    {
     
      this.router.navigate([`/mdm/${this.vessel}/maker1`]);
    }
    if(this.selectedValue=="CBM")
    {
     
      this.router.navigate([`/mdm/${this.vessel}/cbm`]);
    }
    if(this.selectedValue=="Critical")
    {
     
      this.router.navigate([`/mdm/${this.vessel}/critical`]);
    }
    if(this.selectedValue=="Priority")
    {
     
      this.router.navigate([`/mdm/${this.vessel}/priority`]);
    }

    if(this.selectedValue=="Rank")
    {
     
      this.router.navigate([`/mdm/${this.vessel}/rank`]);
    }
    if(this.selectedValue=="MaintenanceType")
    {
     
      this.router.navigate([`/mdm/${this.vessel}/maintenancetype`]);
    }
    if(this.selectedValue=="Safetylevel")
    {
     
      this.router.navigate([`/mdm/${this.vessel}/safetylevel`]);
    }
    if(this.selectedValue=="Location")
    {
     
      this.router.navigate([`/mdm/${this.vessel}/location`]);
    }
    if(this.selectedValue=="Frequency")
    {
     
      this.router.navigate([`/mdm/${this.vessel}/Frequency`]);
    }
    if(this.selectedValue=="CBM Configure")
    {
     
      this.router.navigate([`/mdm/${this.vessel}/CBM Configure`]);
    }
    if(this.selectedValue=="FrequencyType")
    {
     
      this.router.navigate([`/mdm/${this.vessel}/FrequencyType`]);
    }
    if(this.selectedValue=="EquipmentStatus")
    {
     
      this.router.navigate([`/mdm/${this.vessel}/EquipmentStatus`]);
    }
    if(this.selectedValue=="EquipmentType")
    {
     
      this.router.navigate([`/mdm/${this.vessel}/EquipmentType`]);
    }
    if(this.selectedValue=="JobStatus")
    {
     
      this.router.navigate([`/mdm/${this.vessel}/JobStatus`]);
    }
    if(this.selectedValue=="JobType")
    {
     
      this.router.navigate([`/mdm/${this.vessel}/JobType`]);
    }
    if(this.selectedValue=="Reportby")
    {
     
      this.router.navigate([`/mdm/${this.vessel}/Reportby`]);
    }

  } 
  ngOnInit(): void {

    this.data.currentEquipmentCode.subscribe(message=>this.equipmentId=message)
  this.data.currentVesselName.subscribe(name=>this.vessel=name)
  }
  warning(): void {
    this.modal.warning({
      nzTitle: 'This is an warning message',
      nzContent: 'Please select a vesssel'
    });
  }

}
