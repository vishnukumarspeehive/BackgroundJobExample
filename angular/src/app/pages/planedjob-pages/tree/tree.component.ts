import { Component, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';

import { EquipmentService, EquipmentDto } from '@proxy/equipments';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this

@Component({
  selector: ' ',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  providers: [ListService]
})
export class TreeComponent implements OnInit {
  //equipment = { items: [], totalCount: 0 } as PagedResultDto<EquipmentDto>;
  
  equipment = [] as EquipmentDto[];

  constructor(public readonly list: ListService, private equipmentService: EquipmentService) { }
  selectedValue = null;
  ngOnInit(): void {

    this.equipmentService.getList({} as any).subscribe(s => {
      console.log('Articles', s);
      this.equipment = s.items;
    });
    //alert(this.equipment.items[0].sub1Number)
    // console.log(this.equipment.items.length)
    // const equipmentStreamCreator = (query) => this.equipmentService.getList(query);

    // this.list.hookToQuery(equipmentStreamCreator).subscribe((response) => {
    //   this.equipment = response;
    //   console.log(this.equipment.items.values)
    // });
  }

}
