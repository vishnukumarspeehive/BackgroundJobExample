import { EquipmentDto } from './../../../proxy/equipments/models';
import { EquipmentService } from './../../../proxy/equipments/equipment.service';


import { Router } from '@angular/router';
import { DataServiceService } from '../../../shared/data-service.service';
//import { Equipment } from '../../proxy/models';

import { Component, Input } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { Location } from '@angular/common';
@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html'
})
export class TreeViewComponent {
  equipment = [] as EquipmentDto[];
  @Input() selectedEquipment:string;  
  equipmentId:string
  name;
  vessel
constructor(private _location: Location,private router:Router,private  equipmentService:EquipmentService
  ,private data: DataServiceService){

}
ngOnInit(): void {

  this.data.currentEquipmentCode.subscribe(message=>this.equipmentId=message)
  this.data.currentVesselName.subscribe(name=>this.vessel=name)
  this.equipmentService.populateTreeByVesselNameAndVesselId(this.vessel,"1").subscribe(s => {
    console.log('Equipments', s);
    this.nodes = s;
    //alert(this.equipment[0].creationTime)
   
  });
}
selectedEquipmentCode(){
  //alert(this.selectedValue)
  this.data.selectedEquipmentCode(this.selectedValue)

}
nodes=[];
selectedValue = null;

  searchValue = '';
nodes1=this.equipment;

  


  nzEvent(event: NzFormatEmitEvent): void {
    //alert(event.node.title)
    this.data.selectedEquipmentCode(event.node.title.split("-")[0])
    this.refresh()
   // alert("tesyw")7;
    console.log("Selcted",event);
    console.log(event.eventName);
  }

  hello(){
   // alert("tesy");
  }

  refresh(): void {
   // alert("refreshing page")
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      console.log(decodeURI(this._location.path()));
      this.router.navigate([decodeURI(this._location.path())]);
    });
  }


}