
import { MaintenanceTypeDto } from './../../../proxy/maintenance-types/models';
import { MaintenanceTypeService } from './../../../proxy/maintenance-types/maintenance-type.service';
import { Component, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';

//import { MaintenancetypeService,  } from '@proxy/maintenancetypes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
@Component({
  selector: 'app-maintenancetype',
  templateUrl: './maintenancetype.component.html',
  styleUrls: ['./maintenancetype.component.scss'],
  providers: [ListService],
})
export class MaintenancetypeComponent implements OnInit {

  maintenancetype: PagedResultDto<{}>;
  Maintenancetype = { items: [], totalCount: 0 } as PagedResultDto<MaintenanceTypeDto>;
  isModalOpen = false;
  form: FormGroup;
  selectedMaintenanceType = {} as MaintenanceTypeDto;

  constructor(public readonly list: ListService,
     private maintenancetypeService: MaintenanceTypeService,
      private fb: FormBuilder,
      private confirmation: ConfirmationService
      ) {}

  ngOnInit() {
    const  maintenancetypeStreamCreator = (query) => this.  maintenancetypeService.getList(query);

    this.list.hookToQuery(maintenancetypeStreamCreator).subscribe((response) => {
      this.maintenancetype = response;
    });
  }
  createMaintenancetype() {
    this.selectedMaintenanceType = {} as MaintenanceTypeDto;
    this.buildForm();
    this.isModalOpen = true;
  }
  editMaintenancetype(id: string) {
    this.maintenancetypeService.get(id).subscribe((maintenancetype) => {
      this.selectedMaintenanceType = maintenancetype;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.fb.group({
      maintenancetypeName: [this.selectedMaintenanceType.maintenanceTypeName || '', Validators.required],
      
    });
  }
  save() {
    if (this.form.invalid) {
      return;
    }

    if (this.selectedMaintenanceType.id) {
      this.maintenancetypeService
        .update(this.selectedMaintenanceType.id, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
    } else {
      this.maintenancetypeService.create(this.form.value).subscribe(() => {
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
            this.maintenancetypeService.delete(id).subscribe(() => this.list.get());
          }
	    });
  }
}