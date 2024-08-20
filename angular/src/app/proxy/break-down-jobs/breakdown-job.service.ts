import { BreakDownJobDto, CreateUpdateBreakDownJobDto } from './models';
import { RestService } from '@abp/ng.core';
import { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreakdownJobService {
  apiName = 'Default';

  create = (input: CreateUpdateBreakDownJobDto) =>
    this.restService.request<any, BreakDownJobDto>({
      method: 'POST',
      url: `/api/app/breakdownJob`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/breakdownJob/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, BreakDownJobDto>({
      method: 'GET',
      url: `/api/app/breakdownJob/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<BreakDownJobDto>>({
      method: 'GET',
      url: `/api/app/breakdownJob`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateBreakDownJobDto) =>
    this.restService.request<any, BreakDownJobDto>({
      method: 'PUT',
      url: `/api/app/breakdownJob/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
