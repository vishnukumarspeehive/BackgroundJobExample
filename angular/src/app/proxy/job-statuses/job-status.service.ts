import  { CreateUpdateJobStatusDto, JobStatusDto } from './models';
import { RestService } from '@abp/ng.core';
import { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobStatusService {
  apiName = 'Default';

  create = (input: CreateUpdateJobStatusDto) =>
    this.restService.request<any, JobStatusDto>({
      method: 'POST',
      url: `/api/app/jobStatus`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/jobStatus/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, JobStatusDto>({
      method: 'GET',
      url: `/api/app/jobStatus/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<JobStatusDto>>({
      method: 'GET',
      url: `/api/app/jobStatus`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateJobStatusDto) =>
    this.restService.request<any, JobStatusDto>({
      method: 'PUT',
      url: `/api/app/jobStatus/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
