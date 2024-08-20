import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from './../../../shared/data-service.service';

import { VesselService } from './../../../proxy/vessels/vessel.service';
import { VesselDto } from './../../../proxy/vessel-dtos/models';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-vessel-list',
  templateUrl: './vessel-list.component.html',
  styleUrls: ['./vessel-list.component.scss']
})
export class VesselListComponent  {
  
  vessel = [] as VesselDto[];
selectedVesselName
  constructor(private vesselService:VesselService,private data: DataServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.data.currentVesselName.subscribe(vessel=>this.selectedVesselName=vessel)
    
    this.vesselService.getList({} as any).subscribe(s => {
      console.log('Vessel', s);
      this.vessel = s.items;
    });
  
  }
selectedVessel(vesselName){
  this.data.selectedVesselName(vesselName)
 // this.router.navigate([`/planedJob/${vesselName}`]);
  }

}