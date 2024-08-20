import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import {  ModelDto,MakerLookupDto } from '@proxy/models/models';
import { ModelService  } from '@proxy/models/model.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss'],
  providers: [ListService],
})
export class ModelComponent implements OnInit {
  model = { items: [], totalCount: 0 } as PagedResultDto<ModelDto>;
  isModalOpen = false;
  form: FormGroup;
  selectedModel = {} as ModelDto;

  makers$: Observable<MakerLookupDto[]>;

  constructor(public readonly list: ListService, 
     private modelService: ModelService,
     private fb: FormBuilder,
     private confirmation: ConfirmationService) {
      this.makers$ = modelService.getMakerLookup().pipe(map((r) => r.items));
 
     }

  ngOnInit() {
    const modelStreamCreator = (query) => this.modelService.getList(query);

    this.list.hookToQuery(modelStreamCreator).subscribe((response) => {
      this.model = response;
    });
  }
  createModel() {
    this.selectedModel = {} as ModelDto;
    this.buildForm();
    this.isModalOpen = true;
  }
  editModel(id: string) {
    this.modelService.get(id).subscribe((model) => {
      this.selectedModel = model;
      this.buildForm();
      this.isModalOpen = true;
    });
  }
  buildForm() {
    this.form = this.fb.group({
      makerId: [this.selectedModel.makerId || null, Validators.required],
      maker: ['', Validators.required],
      makerModel: [null, Validators.required],
      remark: [null, Validators.required],
     
    });
  }
  save() {
    if (this.form.invalid) {
      return;
    }

    this.modelService.create(this.form.value).subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    });
  }
}
