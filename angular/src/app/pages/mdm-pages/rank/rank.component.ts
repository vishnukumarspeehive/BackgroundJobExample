import { RankService } from './../../../proxy/ranks/rank.service';
import { Component, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';

//import { PriorityService, PriorityDto } from '@proxy/priorities';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { RankDto } from '@proxy/ranks';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss'],
  providers: [ListService],
})
export class RankComponent implements OnInit {


  rank: PagedResultDto<{}>;
  Rank = { items: [], totalCount: 0 } as PagedResultDto<RankDto>;
  isModalOpen = false;
  form: FormGroup;
  selectedRank = {} as RankDto;

  constructor(public readonly list: ListService,
     private rankService:  RankService,
      private fb: FormBuilder,
      private confirmation: ConfirmationService
      ) {}

  ngOnInit() {
    const rankStreamCreator = (query) => this.rankService.getList(query);

    this.list.hookToQuery(rankStreamCreator).subscribe((response) => {
      this.rank = response;
    });
  }
  createRank() {
    this.selectedRank = {} as RankDto;
    this.buildForm();
    this.isModalOpen = true;
  }
  editRank(id: string) {
    this.rankService.get(id).subscribe((rank) => {
      this.selectedRank = rank;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.fb.group({
      rankName: [this.selectedRank.rankName || '', Validators.required],
      
    });
  }
  save() {
    if (this.form.invalid) {
      return;
    }

    if (this.selectedRank. id) {
      this.rankService
        .update(this.selectedRank. id, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
    } else {
      this.rankService.create(this.form.value).subscribe(() => {
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
            this.rankService.delete(id).subscribe(() => this.list.get());
          }
	    });
  }
}