import { JobTypeDto } from './../../../proxy/job-types/models';
import { Component, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { JobTypeService } from '@proxy/job-types';
//import { JobtypeService, JobtypeDto } from '@proxy/jobtypes';

@Component({
  selector: 'app-jobtype',
  templateUrl: './jobtype.component.html',
  styleUrls: ['./jobtype.component.scss'],
  providers: [ListService],
})
export class JobtypeComponent implements OnInit { jobType: PagedResultDto<{}>;

jobtype= { items: [], totalCount: 0 } as PagedResultDto<JobTypeDto>;
isModalOpen = false;
form: FormGroup;
selectedJobtype = {} as JobTypeDto;

  constructor(public readonly list: ListService,
    private jobtypeService: JobTypeService,
     private fb: FormBuilder,
     private confirmation: ConfirmationService) { }

  ngOnInit() {
    const jobtypeStreamCreator = (query) => this.jobtypeService.getList(query);

    this.list.hookToQuery(jobtypeStreamCreator).subscribe((response) => {
      this.jobType = response;
    });
  }
  createJobtype() {
    this.selectedJobtype = {} as JobTypeDto;
    this.buildForm();
    this.isModalOpen = true;
  }
  editJobtype(id: string) {
    this.jobtypeService.get(id).subscribe((jobtype) => {
      this.selectedJobtype = jobtype;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.fb.group({
      jobTypeName: [this.selectedJobtype.jobTypeName || '', Validators.required],
      
    });
  }
  save() {
    if (this.form.invalid) {
      return;
    }

    if (this.selectedJobtype.id) {
      this.jobtypeService
        .update(this.selectedJobtype.id, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
    } else {
      this.jobtypeService.create(this.form.value).subscribe(() => {
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
            this.jobtypeService.delete(id).subscribe(() => this.list.get());
          }
	    });
  }

}