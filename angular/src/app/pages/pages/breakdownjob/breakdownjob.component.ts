import { BreakDownJobDto } from './../../../proxy/break-down-jobs/models';
import { Component, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { BreakdownJobService,  } from '@proxy/break-down-jobs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipmentService } from '@proxy/equipments';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DataServiceService } from 'src/app/shared/data-service.service';

@Component({
  selector: 'app-breakdownjob',
  templateUrl: './breakdownjob.component.html',
  styleUrls: ['./breakdownjob.component.scss'],
  providers: [ListService],
})
export class BreakdownjobComponent implements OnInit {
 breakdownJob: PagedResultDto<{}>;
  BreakdownJob = { items: [], totalCount: 0 } as PagedResultDto<BreakDownJobDto>;
  isModalOpen = false;
  form: FormGroup;
  equipmentId:string
  name;
  vessel
  vesselId=null
  selectedBreakdownJob = {} as BreakDownJobDto;

  constructor(public readonly list: ListService, 
   private breakdownjobService: BreakdownJobService, 
    private fb: FormBuilder,
    private confirmation: ConfirmationService,
    private router:Router,private  equipmentService:EquipmentService
    ,private data: DataServiceService,private route:ActivatedRoute,
    private modal: NzModalService
  ) {this.checkVesselIsSelected();}

  ngOnInit(): void {
    const breakdownjobStreamCreator = (query) => this.breakdownjobService.getList(query);
    this.data.currentEquipmentCode.subscribe(message=>this.equipmentId=message)
    this.data.currentVesselName.subscribe(name=>this.vessel=name)
    this.list.hookToQuery(breakdownjobStreamCreator).subscribe((response) => {
      this.breakdownJob = response;
    });
  }

  vesselName
    eqpCode
      checkVesselIsSelected(){
        this.route.params.subscribe(params => {
          this.vesselName= params['vesselName']
          this.eqpCode= params['equipmentCode']
        })
        if(this.vesselName!=null && this.eqpCode!=null){
          this.router.navigate([`landing/breakdown/${this.vesselName}/${this.eqpCode}`]);
        }
         this.route.params.subscribe(params => {
           this.vesselId = params['id']
    
           if(this.vesselId=="Vessel"){// deafult msg
            this.warning()
           this.router.navigate(['/landing/vesselList']);
             
          }
          else{
           // alert(this.vesselId)
           this.router.navigate([`landing/breakdown/${this.vesselId}`]);
          }
       });
       
      }
      warning(): void {
        this.modal.warning({
          nzTitle: 'This is an warning message',
          nzContent: 'Please select a vesssel'
        });
      }
    createBreakdownJob() {
      this.selectedBreakdownJob = {} as BreakDownJobDto;
      this.buildForm();
       this.isModalOpen = true;
     }
     editBreakdownJob(id: string) {
      this.breakdownjobService.get(id).subscribe((breakdownjob) => {
        this.selectedBreakdownJob =breakdownjob ;
        this.buildForm();
        this.isModalOpen = true;
      });
    }

    buildForm() {
      this.form = this.fb.group({
        equipmentName: [ this.selectedBreakdownJob.equipmentName||'', Validators.required],
        jobOrder: [this.selectedBreakdownJob.jobOrder||'', Validators.required],
        title: [this.selectedBreakdownJob.title||'', Validators.required],
       jobReportedDate: [this.selectedBreakdownJob.jobCompletedDate||'', Validators.required],
        
        reportedBy: [this.selectedBreakdownJob.reportedBy||'', Validators.required],
        status: [this.selectedBreakdownJob.status||'', Validators.required],
        vessel: [this.selectedBreakdownJob.vessel||'', Validators.required],
       jobCompletedDate: [this.selectedBreakdownJob.jobCompletedDate||'', Validators.required],
       
        remark: [this.selectedBreakdownJob.remark||'', Validators.required],

      });
    }
    save() {
     
    if (this.form.invalid) {
     
      return;
    }

    if (this.selectedBreakdownJob.id) {
      this.breakdownjobService
        .update(this.selectedBreakdownJob.id, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
    } else {
      this.breakdownjobService.create(this.form.value).subscribe(() => {
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
            this.breakdownjobService.delete(id).subscribe(() => this.list.get());
          }
	    });
  }

}

