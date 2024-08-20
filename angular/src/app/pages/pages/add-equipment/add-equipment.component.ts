import { Vessel } from '../../../proxy/vessels/models';
import { Equipment } from '../../../proxy/models';

import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { CreateUpdateEquipmentDto, EquipmentService } from '@proxy/equipments';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.scss']
})
export class AddEquipmentComponent implements OnInit {

  constructor(private equipmentService:EquipmentService) { }

  ngOnInit(): void { 
   
  }
  
  onSubmit(equipment: NgForm){  
    alert("hai"+equipment.value.equipmentName);
    var newEquipment=new CreateUpdateEquipmentDto()
    equipment.value.department='';
  newEquipment.department=equipment.value.department;
  newEquipment.drawingNo=equipment.value.drawingumber;
  newEquipment.equipmentStatus=equipment.value.equipmetstatus;
  newEquipment.initialReading=0;
  newEquipment.location=equipment.value.location;
  newEquipment.maker="";
  newEquipment.model="";
  newEquipment.safetylevel=equipment.value.saftylevel;
  newEquipment.searchName="12313";
  newEquipment.sub1Description=equipment.value.equipmentName;
  newEquipment.sub1Number=equipment.value.equipmentCode;
  newEquipment.sub2Description="";
  newEquipment.sub2Number="";
  newEquipment.sub3Description="";
  newEquipment.sub4Number="";
  newEquipment.sub5Description="";
  newEquipment.sub5Number="";
  newEquipment.sub5Number="";
  newEquipment.type=equipment.value.equipmentType;
  newEquipment.vessel=equipment.value.vessel;
  
  
    // this.equipmentService.create(newEquipment).subscribe
    // (
    //   () => {}
    // );
  

    this.equipmentService.addEquipmentByNewEquipment(newEquipment).subscribe
    (
      () => {}
    );
  
    //his.equipmentService.create(newEquipment).subscribe(err=>{console.log(err);})
  
}

}
