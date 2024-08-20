import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { CriticalService, CriticalDto } from '@proxy/criticals';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-critical',
  templateUrl: './critical.component.html',
  styleUrls: ['./critical.component.scss'],
  providers: [ListService],
})
export class CriticalComponent implements OnInit {
  critical: PagedResultDto<{}>;
  Critical = { items: [], totalCount: 0 } as PagedResultDto<CriticalDto>;
  isModalOpen = false;
  form: FormGroup;
  selectedCritical = {} as CriticalDto;

  constructor(public readonly list: ListService,
     private criticalService: CriticalService,
      private fb: FormBuilder,
      private confirmation: ConfirmationService
      ) {}

  ngOnInit() {
    const criticalStreamCreator = (query) => this.criticalService.getList(query);

    this.list.hookToQuery(criticalStreamCreator).subscribe((response) => {
      this.critical = response;
    });
  }
  createCritical() {
    this.selectedCritical = {} as CriticalDto;
    this.buildForm();
    this.isModalOpen = true;
  }
  editCritical(id: string) {
    this.criticalService.get(id).subscribe((critical) => {
      this.selectedCritical = critical;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.fb.group({
      criticalName: [this.selectedCritical.criticalName || '', Validators.required],
      
    });
  }
  save() {
    if (this.form.invalid) {
      return;
    }

    if (this.selectedCritical. criticalName) {
      this.criticalService
        .update(this.selectedCritical.criticalName, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
    } else {
      this.criticalService.create(this.form.value).subscribe(() => {
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
            this.criticalService.delete(id).subscribe(() => this.list.get());
          }
	    });
  }
}
