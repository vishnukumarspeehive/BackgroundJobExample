import { DataServiceService } from './../../../shared/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
vessel='Vessel'
  constructor(private data:DataServiceService) { }

  ngOnInit(): void {
    this.data.currentVesselName.subscribe(name=>this.vessel=name)
  }

}
