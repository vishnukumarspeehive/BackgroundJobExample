import type { CreateUpdateUnscheduledJobDto, UnscheduledJobDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UnscheduledJobService {
  apiName = 'Default';

  create = (input: CreateUpdateUnscheduledJobDto) =>
    this.restService.request<any, UnscheduledJobDto>({
      method: 'POST',
      url: `/api/app/unscheduledJob`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/unscheduledJob/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, UnscheduledJobDto>({
      method: 'GET',
      url: `/api/app/unscheduledJob/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<UnscheduledJobDto>>({
      method: 'GET',
      url: `/api/app/unscheduledJob`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateUnscheduledJobDto) =>
    this.restService.request<any, UnscheduledJobDto>({
      method: 'PUT',
      url: `/api/app/unscheduledJob/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
