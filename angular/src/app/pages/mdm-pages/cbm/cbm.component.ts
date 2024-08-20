import { Component, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { CBMService, CBMDto } from '@proxy/cbms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-cbm',
  templateUrl: './cbm.component.html',
  styleUrls: ['./cbm.component.scss'],
  providers: [ListService],
})
export class CBMComponent implements OnInit {

  cbm: PagedResultDto<{}>;
  Cbm = { items: [], totalCount: 0 } as PagedResultDto<CBMDto>;
  isModalOpen = false;
  form: FormGroup;
  selectedCBM = {} as CBMDto; // declare selectedBook

  constructor(public readonly list: ListService, private cbmService: CBMService, private fb: FormBuilder
    ,private confirmation: ConfirmationService ) {}

  ngOnInit() {
    const cbmStreamCreator = (query) => this.cbmService.getList(query);

    this.list.hookToQuery(cbmStreamCreator).subscribe((response) => {
      this.cbm = response;
    });
  }
  createCBM() {
    this.selectedCBM = {} as CBMDto; 
    this.buildForm();
    this.isModalOpen = true;
  }
  editCBM(id: string) {
    this.cbmService.get(id).subscribe((cbm) => {
      this.selectedCBM = cbm;
      this.buildForm();
      this.isModalOpen = true;
    });
  }
  delete(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.cbmService.delete(id).subscribe(() => this.list.get());
      }
    });
  }
  buildForm() {
    this.form = this.fb.group({
      cbmName: [this.selectedCBM.cbmName || '', Validators.required],
     
    });
  }
  save() {
    if (this.form.invalid) {
      return;
    }
    const request = this.selectedCBM.cbmName
    ? this.cbmService.update(this.selectedCBM.cbmName, this.form.value)
    : this.cbmService.create(this.form.value);

  request.subscribe(() => {
    this.isModalOpen = false;
    this.form.reset();
    this.list.get();
  });
    
  }



}
