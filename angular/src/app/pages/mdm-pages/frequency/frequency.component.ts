import { FrequencyService } from './../../../proxy/frequencies/frequency.service';
import { FrequencyDto } from './../../../proxy/frequencies/models';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
//import { CriticalService, CriticalDto } from '@proxy/criticals';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-frequency',
  templateUrl: './frequency.component.html',
  styleUrls: ['./frequency.component.scss'],
  providers: [ListService],
})
export class FrequencyComponent implements OnInit {

  frequency: PagedResultDto<{}>;
  Frequency = { items: [], totalCount: 0 } as PagedResultDto<FrequencyDto>;
  isModalOpen = false;
  form: FormGroup;
  selectedFrequency = {} as FrequencyDto;

  constructor(public readonly list: ListService,
     private frequencyService: FrequencyService,
      private fb: FormBuilder,
      private confirmation: ConfirmationService
      ) {}

  ngOnInit() {
    const frequencyStreamCreator = (query) => this. frequencyService.getList(query);

    this.list.hookToQuery( frequencyStreamCreator).subscribe((response) => {
      this.frequency = response;
    });
  }
  createFrequency() {
    this.selectedFrequency = {} as FrequencyDto;
    this.buildForm();
    this.isModalOpen = true;
  }
  editFrequency(id: string) {
    this.frequencyService.get(id).subscribe((frequency) => {
      this.selectedFrequency =frequency;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.fb.group({
      frequencyName: [this.selectedFrequency.frequencyName || '', Validators.required],
      
    });
  }
  save() {
    if (this.form.invalid) {
      return;
    }

    if (this.selectedFrequency.id) {
      this.frequencyService
        .update(this.selectedFrequency.id, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
    } else {
      this.frequencyService.create(this.form.value).subscribe(() => {
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
            this.frequencyService.delete(id).subscribe(() => this.list.get());
          }
	    });
  }
}
