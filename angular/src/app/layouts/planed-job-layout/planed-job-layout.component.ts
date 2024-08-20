import { EquipmentService } from '@proxy/equipments';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from './../../shared/data-service.service';
import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
//import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-planed-job-layout',
  templateUrl: './planed-job-layout.component.html',
  styleUrls: ['./planed-job-layout.component.scss']
})
export class PlanedJobLayoutComponent implements OnInit {
  isCollapsed = false;
  equipmentId: string
  name;
  vessel
  vesselId = null
  constructor(private router: Router, private equipmentService: EquipmentService
    , private data: DataServiceService, private route: ActivatedRoute,
    private modal: NzModalService) {

    this.checkVesselIsSelected();
  }

  vesselName
  eqpCode
  checkVesselIsSelected() {
    this.route.params.subscribe(params => {
      this.vesselName = params['vesselName']
      this.eqpCode = params['equipmentCode']
    })
    if (this.vesselName != null && this.eqpCode != null) {
      this.router.navigate([`/planedJob/${this.vesselName}/${this.eqpCode}`]);
    }
    this.route.params.subscribe(params => {
      this.vesselId = params['id']

      if (this.vesselId == "Vessel") {// deafult msg
        this.warning()
        this.router.navigate(['/landing/vesselList']);

      }
      else {
        // alert(this.vesselId)
        this.router.navigate([`/planedJob/${this.vesselId}`]);
      }
    });

  }
  ngOnInit(): void {
    this.data.currentEquipmentCode.subscribe(message => this.equipmentId = message)
    this.data.currentVesselName.subscribe(name => this.vessel = name)
  }

  warning(): void {
    this.modal.warning({
      nzTitle: 'This is an warning message',
      nzContent: 'Please select a vesssel'
    });
  }


  public style: object = {};

 // validate(event: ResizeEvent): boolean {
   // const MIN_DIMENSIONS_PX: number = 50;
  //  if (
    //  event.rectangle.width &&
     // event.rectangle.height &&
     // (event.rectangle.width < MIN_DIMENSIONS_PX ||
      //  event.rectangle.height < MIN_DIMENSIONS_PX)
   // ) {
  //   return false;
    //}
   // return true;
//  }

 // onResizeEnd(event: ResizeEvent): void {
  //  this.style = {
     // position: 'fixed',
     // left: `${event.rectangle.left}px`,
     // top: `${event.rectangle.top}px`,
     // width: `${event.rectangle.width}px`,
     // height: `${event.rectangle.height}px`
 //   };
//  }


}
