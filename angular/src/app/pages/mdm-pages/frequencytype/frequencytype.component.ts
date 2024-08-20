import { FrequencyTypeService } from './../../../proxy/frequency-types/frequency-type.service';
import { FrequencyTypeDto } from './../../../proxy/frequency-types/models';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
//import { FrequencyTypeService,CriticalDto } from '@proxy/criticals';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';


@Component({
  selector: 'app-frequencytype',
  templateUrl: './frequencytype.component.html',
  styleUrls: ['./frequencytype.component.scss'],
  providers: [ListService],
})
export class FrequencytypeComponent implements OnInit {

  frequencytype: PagedResultDto<{}>;
  Frequencytype= { items: [], totalCount: 0 } as PagedResultDto<FrequencyTypeDto>;
  isModalOpen = false;
  form: FormGroup;
  selectedFrequencyType = {} as FrequencyTypeDto;

  constructor(public readonly list: ListService,
     private frequencytypeService: FrequencyTypeService,
      private fb: FormBuilder,
      private confirmation: ConfirmationService
      ) {}

  ngOnInit() {
    const frequencytypeStreamCreator = (query) => this. frequencytypeService.getList(query);

    this.list.hookToQuery( frequencytypeStreamCreator).subscribe((response) => {
      this.frequencytype = response;
    });
  }
  createFrequencyType() {
    this.selectedFrequencyType = {} as FrequencyTypeDto;
    this.buildForm();
    this.isModalOpen = true;
  }
  editFrequencyType(id: string) {
    this.frequencytypeService.get(id).subscribe((frequencytype) => {
      this.selectedFrequencyType =frequencytype
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.fb.group({
      frequencytypeName: [this.selectedFrequencyType.frequencyTypeName || '', Validators.required],
      
    });
  }
  save() {
    if (this.form.invalid) {
      return;
    }

    if (this.selectedFrequencyType.id) {
      this.frequencytypeService
        .update(this.selectedFrequencyType.id, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
    } else {
      this.frequencytypeService.create(this.form.value).subscribe(() => {
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
            this.frequencytypeService.delete(id).subscribe(() => this.list.get());
          }
	    });
  }
}
