import { SafetylevelDto } from './../../../proxy/safetylevels/models';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
//import { CriticalService, CriticalDto } from '@proxy/criticals';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { SafetylevelService } from '@proxy/safetylevels';

@Component({
  selector: 'app-safetylevel',
  templateUrl: './safetylevel.component.html',
  styleUrls: ['./safetylevel.component.scss'],
  providers: [ListService],
})
export class SafetylevelComponent implements OnInit {

  //selectedSafetylevel: SafetylevelDto;
  safetylevel: PagedResultDto<{}>;
  Safetylevel = { items: [], totalCount: 0 } as PagedResultDto<SafetylevelDto>;
  isModalOpen = false;
  form: FormGroup;
  selectedSafetylevel = {} as SafetylevelDto;

  constructor(public readonly list: ListService,
     private  safetylevelService:  SafetylevelService,
      private fb: FormBuilder,
      private confirmation: ConfirmationService
      ) {}

  ngOnInit() {
    const safetylevelStreamCreator = (query) => this.safetylevelService.getList(query);

    this.list.hookToQuery(safetylevelStreamCreator).subscribe((response) => {
      this.safetylevel = response;
    });
  }
  createSafetylevel() {
    this.selectedSafetylevel = {} as SafetylevelDto;
    this.buildForm();
    this.isModalOpen = true;
  }
  editSafetylevel(id: string) {
    this.safetylevelService.get(id).subscribe(( safetylevel) => {
      this.selectedSafetylevel=  safetylevel;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.fb.group({
      safetylevelName: [this.selectedSafetylevel.safetylevelName || '', Validators.required],
      
    });
  }
  save() {
    if (this.form.invalid) {
      return;
    }

    if (this.selectedSafetylevel.id) {
      this.safetylevelService
        .update(this.selectedSafetylevel.id, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
    } else {
      this.safetylevelService.create(this.form.value).subscribe(() => {
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
            this.safetylevelService.delete(id).subscribe(() => this.list.get());
          }
	    });
  }
}
