
import { ReportbyDto } from './../../../proxy/reportbys/models';
import { Component, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { ReportbyService } from '@proxy/reportbys';


@Component({
  selector: 'app-reportby',
  templateUrl: './reportby.component.html',
  styleUrls: ['./reportby.component.scss'],
  providers: [ListService],
})
export class ReportbyComponent implements OnInit {
 // selectReportby: any;
  reportby: PagedResultDto<{}>;
  Reportby = { items: [], totalCount: 0 } as PagedResultDto<ReportbyDto>;
  isModalOpen = false;
  form: FormGroup;
  selectedreportby = {} as ReportbyDto;

  constructor(public readonly list: ListService,
    private reportbyService: ReportbyService,
     private fb: FormBuilder,
     private confirmation: ConfirmationService) { }

  ngOnInit() {
    const reportbyStreamCreator = (query) => this.reportbyService.getList(query);

    this.list.hookToQuery(reportbyStreamCreator).subscribe((response) => {
      this.reportby = response;
    });
  }
  createReportby() {
    this.selectedreportby = {} as ReportbyDto;
    this.buildForm();
    this.isModalOpen = true;
  }
  editReportby(id: string) {
    this.reportbyService.get(id).subscribe((reportby) => {
      this.selectedreportby = reportby;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.fb.group({
      reportbyName: [this.selectedreportby.reportByName || '', Validators.required],
      
    });
  }
  save() {
    if (this.form.invalid) {
      return;
    }

    if (this.selectedreportby.id) {
      this.reportbyService
        .update(this.selectedreportby.id, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
    } else {
      this.reportbyService.create(this.form.value).subscribe(() => {
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
            this.reportbyService.delete(id).subscribe(() => this.list.get());
          }
	    });
}
}