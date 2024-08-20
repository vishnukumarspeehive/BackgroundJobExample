import { Vessel } from './../../../proxy/vessels/models';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { VesselService } from './../../../proxy/vessels/vessel.service';
import { VesselDto } from './../../../proxy/vessel-dtos/models';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-vessel',
  templateUrl: './add-vessel.component.html',
  styleUrls: ['./add-vessel.component.scss']
})
export class AddVesselComponent implements OnInit {
  
  Vessel: PagedResultDto<{}>;
  vessel = { items: [], totalCount: 0 } as PagedResultDto<VesselDto>;
  isModalOpen = false;
  form: FormGroup;
  selectedVessel = {} as VesselDto;

  constructor(public readonly list: ListService,
     private VesselService: VesselService,
      private fb: FormBuilder,
      private confirmation: ConfirmationService
      ) {}

  ngOnInit() {
    const VesselStreamCreator = (query) => this.VesselService.getList(query);

    this.list.hookToQuery(VesselStreamCreator).subscribe((response) => {
      this.Vessel = response;
    });
  }
  createVessel() {
    this.selectedVessel = {} as VesselDto;
    this.buildForm();
    this.isModalOpen = true;
  }
  editVessel(id: string) {
    this.VesselService.get(id).subscribe((Vessel) => {
      this.selectedVessel = Vessel;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.fb.group({
      vesselName: [this.selectedVessel.vesselName],
      flag: [this.selectedVessel.flag],
      mainEngine: [this.selectedVessel.mainEngine],
      auxiliaryEngine: [this.selectedVessel.auxiliaryEngine],
      hullNo: [this.selectedVessel.hullNo],
      activeStatus: [this.selectedVessel.activeStatus],
      class: [this.selectedVessel.class],
      imo: [this.selectedVessel.imo],
      shipyard: [this.selectedVessel.shipyard],
      vesselType: [this.selectedVessel.vesselType],


     
    });
  }
  save() {
   
    if (this.form.invalid) {
     
      return;
    }

    if (this.selectedVessel.vesselName) {
      this.VesselService
        .update(this.selectedVessel.vesselName, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
    } else {
      this.VesselService.create(this.form.value).subscribe(() => {
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
            this.VesselService.delete(id).subscribe(() => this.list.get());
          }
	    });
  }
}
