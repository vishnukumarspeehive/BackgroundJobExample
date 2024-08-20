import { EquipmentStatusService } from './../../../proxy/equipment-statuses/equipment-status.service';
import { EquipmentStatusDto } from './../../../proxy/equipment-statuses/models';
import { Component, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';


@Component({
  selector: 'app-equipmentstatus',
  templateUrl: './equipmentstatus.component.html',
  styleUrls: ['./equipmentstatus.component.scss'],
  providers: [ListService],

})
export class EquipmentstatusComponent implements OnInit {

  equipmentstatus: PagedResultDto<{}>;
  EquipmentStatus= { items: [], totalCount: 0 } as PagedResultDto<EquipmentStatusDto>;
  isModalOpen = false;
  form: FormGroup;
  selectedEquipmentstatus = {} as EquipmentStatusDto;

  constructor(public readonly list: ListService,
     private equipmentstatusService: EquipmentStatusService,
      private fb: FormBuilder,
      private confirmation: ConfirmationService
      ) {}

  ngOnInit() {
    const equipmentstatusStreamCreator = (query) => this. equipmentstatusService.getList(query);

    this.list.hookToQuery(equipmentstatusStreamCreator).subscribe((response) => {
      this.equipmentstatus = response;
    });
  }
  createEquipmentStatus() {
    this.selectedEquipmentstatus = {} as EquipmentStatusDto
    this.buildForm();
    this.isModalOpen = true;
  }
  editEquipmentStatus(id: string) {
    this.equipmentstatusService.get(id).subscribe((equipmentstatus) => {
      this.selectedEquipmentstatus =equipmentstatus;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.fb.group({
      equipmentStatusName: [this.selectedEquipmentstatus.equipmentStatusName || '', Validators.required],
      
    });
  }
  save() {
    if (this.form.invalid) {
      return;
    }

    if (this.selectedEquipmentstatus.id) {
      this.equipmentstatusService
        .update(this.selectedEquipmentstatus.id, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
    } else {
      this.equipmentstatusService.create(this.form.value).subscribe(() => {
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
          this.equipmentstatusService.delete(id).subscribe(() => this.list.get());
        }
      });
  }
}
