
import { JobStatusDto } from './../../../proxy/job-statuses/models';
import { Component, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';
//import { JobstatusService, JobstatusDto } from '@proxy/jobstatus';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { JobStatusService } from '@proxy/job-statuses';

@Component({
  selector: 'app-jobstatus',
  templateUrl: './jobstatus.component.html',
  styleUrls: ['./jobstatus.component.scss'],
  providers: [ListService],
})
export class JobstatusComponent implements OnInit {
  jobStatus: PagedResultDto<{}>;
  Jobstatus = { items: [], totalCount: 0 } as PagedResultDto<JobStatusDto>;
  isModalOpen = false;
  form: FormGroup;
  selectedJobstatus = {} as JobStatusDto;

  constructor(public readonly list: ListService,
    private jobStatusService: JobStatusService,
    private fb: FormBuilder,
    private confirmation: ConfirmationService) { }

  ngOnInit() {
    const jobstatusStreamCreator = (query) => this.jobStatusService.getList(query);

    this.list.hookToQuery(jobstatusStreamCreator).subscribe((response) => {
      this.jobStatus = response;
    });
  }
  createJobStatus() {
    this.selectedJobstatus = {} as JobStatusDto;
    this.buildForm();
    this.isModalOpen = true;
  }
  editJobStatus(id: string) {
    this.jobStatusService.get(id).subscribe((jobstatus) => {
      this.selectedJobstatus = jobstatus;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.fb.group({
      jobstatusName: [this.selectedJobstatus.jobStatusName || '', Validators.required],

    });
  }
  save() {
    if (this.form.invalid) {
      return;
    }

    if (this.selectedJobstatus.id) {
      this.jobStatusService
        .update(this.selectedJobstatus.id, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
    } else {
      this.jobStatusService.create(this.form.value).subscribe(() => {
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
          this.jobStatusService.delete(id).subscribe(() => this.list.get());
        }
      });
  }
}