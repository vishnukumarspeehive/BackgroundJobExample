import { EquipmentDto } from './../../../proxy/equipments/models';
import { EquipmentService } from './../../../proxy/equipments/equipment.service';
import { DataServiceService } from '../../../shared/data-service.service';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  constructor(private data:DataServiceService,private equipmentService:EquipmentService) { }
  selectedEquipmentCode;
  selectedEquipment;
  vessel;
  ngOnInit(): void {
   // alert("test test")
    this.data.currentEquipmentCode.subscribe(code=>this.selectedEquipmentCode=code)
    this.data.currentVesselName.subscribe(name=>this.vessel=name)
  //  alert(this.selectedEquipmentCode)
    this.equipmentService.getEquipmentDetailsByEquipmentCodeAndVesselName(this.selectedEquipmentCode,this.vessel).subscribe(s => {
      console.log('SelctedEquipment', s);
      this.selectedEquipment = s
    }); 

    //
   // alert(this.equipmentCode)
  }
 

}
