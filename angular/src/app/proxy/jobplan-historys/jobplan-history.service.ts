import type { CreateUpdateJobplanHistoryDto, JobplanHistoryDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobplanHistoryService {
  apiName = 'Default';

  create = (input: CreateUpdateJobplanHistoryDto) =>
    this.restService.request<any, JobplanHistoryDto>({
      method: 'POST',
      url: `/api/app/jobplanHistory`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/jobplanHistory/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, JobplanHistoryDto>({
      method: 'GET',
      url: `/api/app/jobplanHistory/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<JobplanHistoryDto>>({
      method: 'GET',
      url: `/api/app/jobplanHistory`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  jobplanHistoryByJobOrderAndVesselName = (jobOrder: string, vesselName: string) =>
    this.restService.request<any, JobplanHistoryDto[]>({
      method: 'GET',
      url: `/api/app/jobplanHistory/jobplanHistory`,
      params: { jobOrder: jobOrder, vesselName: vesselName },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateJobplanHistoryDto) =>
    this.restService.request<any, JobplanHistoryDto>({
      method: 'PUT',
      url: `/api/app/jobplanHistory/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
