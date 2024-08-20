import { EquipmentDto, EquipmentService } from '@proxy/equipments';
import { Vessel } from './../../../proxy/vessels/models';
import { DataServiceService } from './../../../shared/data-service.service';
import { Component, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { SparepartService, SparepartDto } from '@proxy/spareparts';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-sparepart',
  templateUrl: './sparepart.component.html',
  styleUrls: ['./sparepart.component.scss'],
  providers: [ListService],
})
export class SparepartComponent implements OnInit {
  sparepart = { items: [], totalCount: 0 } as PagedResultDto<SparepartDto>;
  sparepartList:any
  isModalOpen = false;
  form: FormGroup;
  selectedSparepart = {} as SparepartDto;
  selectedEquipmentCode ;
  vessel;
  defaultEquipmentCode
  defaultEquipment:any
  equipments={ items: [], totalCount: 0 } as PagedResultDto<EquipmentDto>;
  //size: NzButtonSize = 'small';
  constructor(public readonly list: ListService, private sparepartService: SparepartService,
     private fb: FormBuilder, private confirmation: ConfirmationService,private data:DataServiceService,
    private  equipmentService:EquipmentService) { }

  ngOnInit(): void {
    this.data.currentVesselName.subscribe(name=>this.vessel=name)
    this.data.currentEquipmentCode.subscribe(code=>this.selectedEquipmentCode=code)
    // const equipmentStreamCreator = (query) => this.equipmentService.getList(query);
    // this.list.hookToQuery(equipmentStreamCreator).subscribe((response) => {
    //   this.equipments = response; 
    
    // })
    //this.defaultEquipmentCode=this.equipments.items.sort(x=>Number(x.type)).filter(y=>y.vessel==this.vessel)[0].type
    const sparepartStreamCreator = (query) => this.sparepartService.getList(query);
    this.list.hookToQuery(sparepartStreamCreator).subscribe((response) => {
      this.sparepart = response;  
     if(this.selectedEquipmentCode=="default msg"){
    //alert("dfaultcode"+this.defaultEquipmentCode)
    // this.sparepartList=response.items.filter(x=>x.equipmentCode==this.defaultEquipmentCode) as PagedResultDto<SparepartDto>
     }
     else{
      this.sparepartList=response.items.filter(x=>x.equipmentCode==this.selectedEquipmentCode) as PagedResultDto<SparepartDto>
      console.log("SSSSSSSSS",this.sparepart)
     }
    });
  
  }
  createSparepart() {
    this.selectedSparepart = {} as SparepartDto;
    this.buildForm();
    this.isModalOpen = true;
  }
  editSparepart(id: string) {
    this.sparepartService.get(id).subscribe((sparepart) => {
      this.selectedSparepart = sparepart;
      this.buildForm();
      this.isModalOpen = true;
    });
  }
  buildForm() {
    this.form = this.fb.group({
      vessel: [this.vessel ||'', Validators.required],
      equipmentName: [this.selectedSparepart.equipmentName ||'', Validators.required],
      equipmentCode: [this.selectedEquipmentCode||'', Validators.required],
      sparepartsDescription: [this.selectedSparepart.sparepartsDescription ||'', Validators.required],
      partNumber: [this.selectedSparepart.partNumber ||'', Validators.required],
      drawingNumber: [this.selectedSparepart.drawingNumber ||'', Validators.required],
      specification: [this.selectedSparepart.specification ||'', Validators.required],
      postionNumber: [this.selectedSparepart.postionNumber ||'', Validators.required],
     
     
    });
  }
  save() {
    if (this.form.invalid) {
      return;
    }

    if (this.selectedSparepart.id) {
      this.sparepartService
        .update(this.selectedSparepart.id, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
    } else {
      this.sparepartService.create(this.form.value).subscribe(() => {
        this.isModalOpen = false;
        this.form.reset();
        this.list.get();
      });
    }
  }
  delete(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure')
        .subscribe((status) => {
          if (status === Confirmation.Status.confirm) {
            this.sparepartService.delete(id).subscribe(() => this.list.get());
          }
	    });
  }

}
