import { UnscheduledJobDto } from './../../../proxy/unscheduled-jobs/models';
import { UnscheduledJobService } from '@proxy/unscheduled-jobs';
import { JobplanService } from '@proxy/jobplans';
import { DataServiceService } from './../../../shared/data-service.service';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { NzModalService } from 'ng-zorro-antd/modal';
import { EquipmentService } from '@proxy/equipments';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-unscheduledjob',
  templateUrl: './unscheduledjob.component.html',
  styleUrls: ['./unscheduledjob.component.scss'],
  providers: [ListService],
})
export class UnscheduledjobComponent implements OnInit {

  unscheduledJob: PagedResultDto<{}>;
  UunscheduledJob = { items: [], totalCount: 0 } as PagedResultDto<UnscheduledJobDto>;
  isModalOpen = false;
  name;
  equipmentId:string
  vessel
  vesselId = null
  form: FormGroup;
  selectedUnscheduledjob = {} as UnscheduledJobDto;


  constructor(public readonly list: ListService,
    private unscheduledjobService: UnscheduledJobService,
    private fb: FormBuilder,
    private data: DataServiceService,
    private router: Router, private equipmentService: EquipmentService,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private jobplanservice: JobplanService, private confirmation: ConfirmationService) { this.checkVesselIsSelected(); }


  vesselName
  eqpCode
  checkVesselIsSelected() {
    this.route.params.subscribe(params => {
      this.vesselName = params['vesselName']
      this.eqpCode = params['equipmentCode']
    })
    if (this.vesselName != null && this.eqpCode != null) {
      this.router.navigate([`/landing/unscheduledJob/${this.vesselName}/${this.eqpCode}`]);
    }
    this.route.params.subscribe(params => {
      this.vesselId = params['id']

      if (this.vesselId == "Vessel") {// deafult msg
        this.warning()
        this.router.navigate(['/landing/vesselList']);

      }
      else {
        // alert(this.vesselId)
        this.router.navigate([`/landing/unscheduledJob/${this.vesselId}`]);
      }
    });

  }


  ngOnInit() {
    //this.data.currentVesselName.subscribe(name=>this.vessel=name)
    // this.jobplanservice.readDataByVesselName(this.vessel).subscribe((response) => {
    //  this.unscheduledJob = response;
    //  console.log("DATTATTATAT",this.unscheduledJob)
    // });
    const unscheduledjobStreamCreator = (query) => this.unscheduledjobService.getList(query);
    this.data.currentEquipmentCode.subscribe(message => this.equipmentId = message)
    this.data.currentVesselName.subscribe(name => this.vessel = name)

    this.list.hookToQuery(unscheduledjobStreamCreator).subscribe((response) => {
      this.unscheduledJob = response;
    });
  }
  warning(): void {
    this.modal.warning({
      nzTitle: 'This is an warning message',
      nzContent: 'Please select a vesssel'
    });
  }
  createUnscheduledJob() {
    this.selectedUnscheduledjob = {} as UnscheduledJobDto;
    this.buildForm();
    this.isModalOpen = true;
  }
  editUnscheduledJob(id: string) {
    this.unscheduledjobService.get(id).subscribe((unscheduledJob) => {
      this.selectedUnscheduledjob = unscheduledJob;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.fb.group({
      equipmentName: [this.selectedUnscheduledjob.equipmentName || '', Validators.required],
      jobOrder: [this.selectedUnscheduledjob.jobOrder || '', Validators.required],
      title: [this.selectedUnscheduledjob.title || '', Validators.required],
      jobReportedDate: [this.selectedUnscheduledjob.jobCompletedDate || '', Validators.required],

      reportedBy: [this.selectedUnscheduledjob.reportedBy || '', Validators.required],
      status: [this.selectedUnscheduledjob.status || '', Validators.required],
      vessel: [this.selectedUnscheduledjob.vessel || '', Validators.required],
      jobCompletedDate: [this.selectedUnscheduledjob.jobCompletedDate || '', Validators.required],

      remark: [this.selectedUnscheduledjob.remark || '', Validators.required],

    });
  }

  save() {

    if (this.form.invalid) {

      return;
    }

    if (this.selectedUnscheduledjob.id) {
      this.unscheduledjobService
        .update(this.selectedUnscheduledjob.id, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
    } else {
      this.unscheduledjobService.create(this.form.value).subscribe(() => {
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
          this.unscheduledjobService.delete(id).subscribe(() => this.list.get());
        }
      });
  }
}




