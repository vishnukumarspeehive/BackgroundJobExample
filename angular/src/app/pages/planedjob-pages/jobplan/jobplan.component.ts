import { Vessel } from './../../../proxy/vessels/models';
import { EquipmentService } from '@proxy/equipments';

import { JobplanDto, JobplanService } from '@proxy/jobplans';

import { DataServiceService } from './../../../shared/data-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-jobplan',
  templateUrl: './jobplan.component.html',
  styleUrls: ['./jobplan.component.scss'],
  providers: [ListService],
})
export class JobplanComponent implements OnInit {
  jobplan = { items: [], totalCount: 0 } as PagedResultDto<JobplanDto>;
  //jobplans={items :[]} as PagedResultDto<JobplanDto>
  isModalOpen = false;
  form: FormGroup;
  selectedJobplan = {} as JobplanDto;
 
  selectedEquipmentCode;
  vessel;
  tabIndex;
  @Input() getjobplanId:string;  
  jobplanId
  radioValue = 'C';
  onTabClick(index){
   
    this.tabIndex = index;
}
  constructor(public readonly list: ListService, private jobplanService: JobplanService,
     private fb: FormBuilder, private confirmation: ConfirmationService,
     private data:DataServiceService,
     private modalService: NzModalService,
     private equipmentService:EquipmentService,
     ) { }

  ngOnInit(): void {
    this.data.currentEquipmentCode.subscribe(code=>this.selectedEquipmentCode=code)
    this.data.currentVesselName.subscribe(name=>this.vessel=name)

    this.jobplanService.readJobplanByVesselNameAndEquipmentCode(this.vessel,this.selectedEquipmentCode).subscribe(s => {
     this.jobplan = s;
 
      //alert(this.equipment[0].sub1Number)
     //alert("SelctedJobplan"+s)
    });

  //  const jobplanStreamCreator = (query) => this.jobplanService.getList(query);
  //   this.list.hookToQuery(jobplanStreamCreator).subscribe((response) => {
  //     this.jobplan = response;
  //   });
    
  }
  createJobplan() {
    this.selectedJobplan = {} as JobplanDto;
    this.buildForm();
    this.isModalOpen = true;
  }
  editJobplan(id: string) {
    this.jobplanService.get(id).subscribe((jobplan) => {
      this.selectedJobplan = jobplan;
      this.buildForm();
      this.isModalOpen = true;
    });
  }
  buildForm() {
    this.form = this.fb.group({
      equipmentCode: [this.selectedEquipmentCode ],
      equipmentName: [this.selectedJobplan.equipmentName ],
      jobTitle: [this.selectedJobplan.jobTitle ],
      jobDescription: [this.selectedJobplan.jobDescription ],
      calFrequency: [this.selectedJobplan.calFrequency ],
      runFrequency: [this.selectedJobplan.runFrequency ],
      frequencyType: [this.selectedJobplan.frequencyType ],
      department: [this.selectedJobplan.department ],
     
      priority: [this.selectedJobplan.priority ],
      rank: [this.selectedJobplan.rank ],
      assignedTo: [this.selectedJobplan.assignedTo ],
      lastDoneDate: [this.selectedJobplan.lastDoneDate ],
      nextDueDate: [this.selectedJobplan.nextDueDate ],
      jobType: [this.selectedJobplan.jobType ],
      maintenanceType: [this.selectedJobplan.maintenanceType ],
      horizonfrequencyType:[this.selectedJobplan.horizonfrequencyType],
      planHorizon: [this.selectedJobplan.planHorizon ],
      jobCompletedDate: [this.selectedJobplan.jobCompletedDate ],
      reading: [this.selectedJobplan.reading ],
      remark: [this.selectedJobplan.remark ],
      universalJobCode: [this.selectedJobplan.universalJobCode ],
      vessel:[this.vessel],
      interval: [this.selectedJobplan.interval],

      
      
    
     
    });
  }
  save() {
    if (this.form.invalid) {
      return;
    }

    if (this.selectedJobplan.id) {
    
      this.jobplanService
        .update(this.selectedJobplan.id, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
          this.jobplanService.readJobplanByVesselNameAndEquipmentCode(this.vessel,this.selectedEquipmentCode).subscribe(s => {
            this.jobplan = s;})
        });
    } else {
      this.jobplanService.create(this.form.value).subscribe(() => {
        this.isModalOpen = false;
        this.form.reset();
        this.list.get();
        this.jobplanService.readJobplanByVesselNameAndEquipmentCode(this.vessel,this.selectedEquipmentCode).subscribe(s => {
          this.jobplan = s;})
      });
      
    }
    
   
  }
  delete(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure')
        .subscribe((status) => {
          if (status === Confirmation.Status.confirm) {
            this.jobplanService.delete(id).subscribe(() => this.list.get());
            this.form.reset();
            this.list.get();
            this.jobplanService.readJobplanByVesselNameAndEquipmentCode(this.vessel,this.selectedEquipmentCode).subscribe(s => {
              this.jobplan = s;})
          }
          
	    });
  }


  private selectedLink: string="cal";        
  
  setradio(e: string): void   
  {  
  
    this.selectedLink = e;  
          
  }  
  
    isSelected(name: string): boolean   
  {  
  
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;  
  }  
  
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
    }  
  

    isVisible = false;
    isConfirmLoading = false;
    showModal(id :any ,selectedJobOrder:any): void {
      // this.jobplanService.get(id).subscribe(s => {
      
      // });
      

      //alert("JOBORDER================"+selectedJobOrder)
      this.data.selectedJobOrder(selectedJobOrder)
      this.jobplanId=id;
      this.isVisible = true;
      if(this.tabIndex == null){
        this.tabIndex=this.tabIndex(0);
      }
    }
  
    handleOk(): void {
      this.isConfirmLoading = true;
      setTimeout(() => {
        this.isVisible = false;
        this.isConfirmLoading = false;
      }, 1000);
    }
  
    handleCancel(): void {
      this.isVisible = false;
    }

    showConfirm(): void {
      this.modalService.confirm({
        nzTitle: 'Confirm',
        nzContent: 'Bla bla ...',
        nzOkText: 'OK',
        nzCancelText: 'Cancel'
      });
    }

}
