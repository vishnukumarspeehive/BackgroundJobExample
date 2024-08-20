import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-lazy',
  templateUrl: './test-lazy.component.html',
  styleUrls: ['./test-lazy.component.scss']
})
export class TestLazyComponent implements OnInit {

  constructor(private route:ActivatedRoute) {

   }
vesselName
eqpCode
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.vesselName= params['vesselName']
      this.eqpCode= params['equipmentCode']
    })
    var queryParam1 = this.route.snapshot.queryParamMap.get("vesselName");
    var queryParam2 = this.route.snapshot.queryParamMap.get("equipmentCode");
    alert(this.vesselName+"   "+this.eqpCode)
  }

}
