import type { CreateUpdateReportbyDto, ReportbyDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReportbyService {
  apiName = 'Default';

  create = (input: CreateUpdateReportbyDto) =>
    this.restService.request<any, ReportbyDto>({
      method: 'POST',
      url: `/api/app/reportby`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/reportby/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, ReportbyDto>({
      method: 'GET',
      url: `/api/app/reportby/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<ReportbyDto>>({
      method: 'GET',
      url: `/api/app/reportby`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateReportbyDto) =>
    this.restService.request<any, ReportbyDto>({
      method: 'PUT',
      url: `/api/app/reportby/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
