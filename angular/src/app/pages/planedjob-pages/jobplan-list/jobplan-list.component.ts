import { Vessel } from './../../../proxy/vessels/models';
import { DataServiceService } from './../../../shared/data-service.service';
import { Equipment } from './../../../proxy/models';

import { EquipmentService } from './../../../proxy/equipments/equipment.service';

import { EquipmentDto } from './../../../proxy/equipments/models';
import { MakerService } from './../../../proxy/makers/maker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobplan-list',
  templateUrl: './jobplan-list.component.html',
  styleUrls: ['./jobplan-list.component.scss']
})
export class JobplanListComponent implements OnInit {

  listOfData = [] as EquipmentDto[];
vesselName='';
  constructor( private equipmentService: EquipmentService,private data:DataServiceService) { }

  ngOnInit(): void {
 this.data.currentVesselName.subscribe(name=>this.vesselName=name)

    this.equipmentService.getList({} as any).subscribe(s => {
      console.log('Articles', s);
      this.listOfData = s.items;
      
     
    });
    
  }

  listOfColumn = [
    {
      title: 'maker',
      compare: null,
      priority: false
    },
    {
      title: 'model',
     // compare: (a: EquipmentDto, b:  EquipmentDto) => a.model - b.maker,
      priority: 3
    },
    {
      title: 'vessel' ,
     // compare: (a:  EquipmentDto, b:  EquipmentDto) => a.vessel - b.math,
      priority: 2
    },
    {
      title: 'remark',
      //compare: (a:  EquipmentDto, b:  EquipmentDto) => a.english - b.english,
      priority: 1
    }
  ];
  //listOfData:  EquipmentDto[] = this.equipment
  // [
  //   {
  //     name: 'John Brown',
  //     chinese: 98,
  //     math: 60,
  //     english: 70
  //   },
  //   {
  //     name: 'Jim Green',
  //     chinese: 98,
  //     math: 66,
  //     english: 89
  //   },
  //   {
  //     name: 'Joe Black',
  //     chinese: 98,
  //     math: 90,
  //     english: 70
  //   },
  //   {
  //     name: 'Jim Red',
  //     chinese: 88,
  //     math: 99,
  //     english: 89
  //   }
  // ];

}
