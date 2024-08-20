import type { CreateUpdateFrequencyDto, FrequencyDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FrequencyService {
  apiName = 'Default';

  create = (input: CreateUpdateFrequencyDto) =>
    this.restService.request<any, FrequencyDto>({
      method: 'POST',
      url: `/api/app/frequency`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/frequency/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, FrequencyDto>({
      method: 'GET',
      url: `/api/app/frequency/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<FrequencyDto>>({
      method: 'GET',
      url: `/api/app/frequency`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateFrequencyDto) =>
    this.restService.request<any, FrequencyDto>({
      method: 'PUT',
      url: `/api/app/frequency/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
