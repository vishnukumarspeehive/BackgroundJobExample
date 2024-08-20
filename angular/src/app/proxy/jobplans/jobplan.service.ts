import type { CreateUpdateJobplanDto, Jobplan, JobplanDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobplanService {
  apiName = 'Default';

  autoGnereateJobOrderByVeesselNameAndInput = (veesselName: string, input: CreateUpdateJobplanDto) =>
    this.restService.request<any, CreateUpdateJobplanDto>({
      method: 'POST',
      url: `/api/app/jobplan/autoGnereateJobOrder`,
      params: { veesselName: veesselName },
      body: input,
    },
    { apiName: this.apiName });

  completeJobByDtAndBid1AndRemarkAndVesselAndInterval = (dt: string, Bid1: string, remark: string, vessel: string, interval: string) =>
    this.restService.request<any, Jobplan>({
      method: 'GET',
      url: `/api/app/jobplan/CompleteJob`,
      params: { dt: dt, bid1: Bid1, remark: remark, vessel: vessel, interval: interval },
    },
    { apiName: this.apiName });

  create = (input: CreateUpdateJobplanDto) =>
    this.restService.request<any, JobplanDto>({
      method: 'POST',
      url: `/api/app/jobplan`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/jobplan/${id}`,
    },
    { apiName: this.apiName });

  editJobplanCalendarByModelAndJobOrder2AndLastdone = (model: CreateUpdateJobplanDto, jobOrder2: number, lastdone: string) =>
    this.restService.request<any, Jobplan>({
      method: 'POST',
      url: `/api/app/jobplan/EditJobplanCalendar`,
      params: { jobOrder2: jobOrder2, lastdone: lastdone },
      body: model,
    },
    { apiName: this.apiName });

  editJobplanDetailsByBasicJobDetail = (basicJobDetail: CreateUpdateJobplanDto) =>
    this.restService.request<any, number>({
      method: 'POST',
      url: `/api/app/jobplan/EditJobplanDetails`,
      body: basicJobDetail,
    },
    { apiName: this.apiName });

  editJobplanRhsByModelAndJobOrder3AndLastdoneAndCurrentRhsAndPresentRHr = (model: CreateUpdateJobplanDto, jobOrder3: number, lastdone: string, currentRhs: number, PresentRHr: number) =>
    this.restService.request<any, Jobplan>({
      method: 'POST',
      url: `/api/app/jobplan/EditJobplanRhs`,
      params: { jobOrder3: jobOrder3, lastdone: lastdone, currentRhs: currentRhs, presentRHr: PresentRHr },
      body: model,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, JobplanDto>({
      method: 'GET',
      url: `/api/app/jobplan/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<JobplanDto>>({
      method: 'GET',
      url: `/api/app/jobplan`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  postponeJobByPostponeDateAndJobOrder = (postponeDate: string, jobOrder: string) =>
    this.restService.request<any, JobplanDto>({
      method: 'GET',
      url: `/api/app/jobplan/PostponeJob`,
      params: { postponeDate: postponeDate, jobOrder: jobOrder },
    },
    { apiName: this.apiName });

  readDataByVesselName = (vesselName: string) =>
    this.restService.request<any, JobplanDto[]>({
      method: 'POST',
      url: `/api/app/jobplan/ReadData`,
      params: { vesselName: vesselName },
    },
    { apiName: this.apiName });

  readJobplanByVesselNameAndEquipmentCode = (vesselName: string, equipmentCode: string) =>
    this.restService.request<any, PagedResultDto<JobplanDto>>({
      method: 'POST',
      url: `/api/app/jobplan/ReadJobplan`,
      params: { vesselName: vesselName, equipmentCode: equipmentCode },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateJobplanDto) =>
    this.restService.request<any, JobplanDto>({
      method: 'PUT',
      url: `/api/app/jobplan/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
