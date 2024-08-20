import { Equipment } from './../proxy/models';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private equipmentSource=new BehaviorSubject<string>("default msg")
  currentEquipmentCode=this.equipmentSource.asObservable()  


  private vesselSource=new BehaviorSubject<string>("Vessel")
  currentVesselName=this.vesselSource.asObservable()  

  private jobOrderSource=new BehaviorSubject<string>("job")
  currentJobOrder=this.jobOrderSource.asObservable()  
  constructor() { }

  
  selectedEquipmentCode(code){
    this.equipmentSource.next(code)
  }

  
  selectedVesselName(vesselName){
    this.vesselSource.next(vesselName)
  }

  
  selectedJobOrder(joborder){
    this.jobOrderSource.next(joborder)
  }
}
