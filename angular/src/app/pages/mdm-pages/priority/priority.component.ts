import { Component, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';

import { PriorityService, PriorityDto } from '@proxy/priorities';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss'],
  providers: [ListService],

})
export class PriorityComponent implements OnInit {
  priority: PagedResultDto<{}>;
  Priority = { items: [], totalCount: 0 } as PagedResultDto<PriorityDto>;
  isModalOpen = false;
  form: FormGroup;
  selectedPriority = {} as PriorityDto;

  constructor(public readonly list: ListService,
     private priorityService:  PriorityService,
      private fb: FormBuilder,
      private confirmation: ConfirmationService
      ) {}

  ngOnInit() {
    const priorityStreamCreator = (query) => this.priorityService.getList(query);

    this.list.hookToQuery(priorityStreamCreator).subscribe((response) => {
      this.priority = response;
    });
  }
  createPriority() {
    this.selectedPriority = {} as PriorityDto;
    this.buildForm();
    this.isModalOpen = true;
  }
  editPriority(id: string) {
    this.priorityService.get(id).subscribe((priority) => {
      this.selectedPriority = priority;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.fb.group({
      priorityName: [this.selectedPriority.priorityName || '', Validators.required],
      
    });
  }
  save() {
    if (this.form.invalid) {
      return;
    }

    if (this.selectedPriority.id) {
      this.priorityService
        .update(this.selectedPriority.id, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
    } else {
      this.priorityService.create(this.form.value).subscribe(() => {
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
            this.priorityService.delete(id).subscribe(() => this.list.get());
          }
	    });
  }
}