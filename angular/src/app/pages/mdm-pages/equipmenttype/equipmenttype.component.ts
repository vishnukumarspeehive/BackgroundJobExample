import { EquipmentTypeService } from './../../../proxy/equipment-types/equipment-type.service';
import { Component, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { EquipmentTypeDto } from '@proxy/equipment-types';
//import { EquipmenttypeService, EquipmenttypeDto } from '@proxy/equipmenttypes';

@Component({
  selector: 'app-equipmenttype',
  templateUrl: './equipmenttype.component.html',
  styleUrls: ['./equipmenttype.component.scss'],
  providers: [ListService],
})
export class EquipmenttypeComponent implements OnInit {
  equipmenttype: PagedResultDto<{}>;
  EquipmentType = { items: [], totalCount: 0 } as PagedResultDto<EquipmentTypeDto>;
  isModalOpen = false;
  form: FormGroup;
  selectedEquipmentType = {} as EquipmentTypeDto;

  constructor(public readonly list: ListService,
    private equipmenttypeService: EquipmentTypeService,
    private fb: FormBuilder,
    private confirmation: ConfirmationService) { }

  ngOnInit() {
    const equipmenttypeStreamCreator = (query) => this.equipmenttypeService.getList(query);

    this.list.hookToQuery(equipmenttypeStreamCreator).subscribe((response) => {
      this.equipmenttype = response;
    });
  }
  createEquipmentType() {
    this.selectedEquipmentType = {} as EquipmentTypeDto;
    this.buildForm();
    this.isModalOpen = true;
  }
  editEquipmentType(id: string) {
    this.equipmenttypeService.get(id).subscribe((equipmenttype) => {
      this.selectedEquipmentType = equipmenttype;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.fb.group({
      equipmenttypeName: [this.selectedEquipmentType.equipmentTypeName || '', Validators.required],

    });
  }
  save() {
    if (this.form.invalid) {
      return;
    }

    if (this.selectedEquipmentType.id) {
      this.equipmenttypeService
        .update(this.selectedEquipmentType.id, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
    } else {
      this.equipmenttypeService.create(this.form.value).subscribe(() => {
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
          this.equipmenttypeService.delete(id).subscribe(() => this.list.get());
        }
      });
  }
}