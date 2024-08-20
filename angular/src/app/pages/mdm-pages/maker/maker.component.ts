import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { MakerService, MakerDto } from '@proxy/makers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-maker',
  templateUrl: './maker.component.html',
  styleUrls: ['./maker.component.scss'],
  providers: [ListService],
})
export class MakerComponent implements OnInit {
  maker: PagedResultDto<{}>;
  Maker = { items: [], totalCount: 0 } as PagedResultDto<MakerDto>;
  isModalOpen = false;
  form: FormGroup;
  selectedMaker = {} as MakerDto;

  constructor(public readonly list: ListService,
     private makerService: MakerService,
      private fb: FormBuilder,
      private confirmation: ConfirmationService
      ) {}

  ngOnInit() {
    const makerStreamCreator = (query) => this.makerService.getList(query);

    this.list.hookToQuery(makerStreamCreator).subscribe((response) => {
      this.maker = response;
    });
  }
  createMaker() {
    this.selectedMaker = {} as MakerDto;
    this.buildForm();
    this.isModalOpen = true;
  }
  editMaker(id: string) {
    this.makerService.get(id).subscribe((maker) => {
      this.selectedMaker = maker;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.fb.group({
      name: [this.selectedMaker.name || '', Validators.required],
      code: [this.selectedMaker.code|| '', Validators.required],
      country: [this.selectedMaker.country||'', Validators.required],
     
    });
  }
  save() {
    if (this.form.invalid) {
      return;
    }

    if (this.selectedMaker.id) {
      this.makerService
        .update(this.selectedMaker.id, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
    } else {
      this.makerService.create(this.form.value).subscribe(() => {
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
            this.makerService.delete(id).subscribe(() => this.list.get());
          }
	    });
  }
}
