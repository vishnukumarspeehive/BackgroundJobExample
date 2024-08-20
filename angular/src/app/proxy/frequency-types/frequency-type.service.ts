import type { CreateUpdateFrequencyTypeDto, FrequencyTypeDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FrequencyTypeService {
  apiName = 'Default';

  create = (input: CreateUpdateFrequencyTypeDto) =>
    this.restService.request<any, FrequencyTypeDto>({
      method: 'POST',
      url: `/api/app/frequencyType`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/frequencyType/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, FrequencyTypeDto>({
      method: 'GET',
      url: `/api/app/frequencyType/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<FrequencyTypeDto>>({
      method: 'GET',
      url: `/api/app/frequencyType`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateFrequencyTypeDto) =>
    this.restService.request<any, FrequencyTypeDto>({
      method: 'PUT',
      url: `/api/app/frequencyType/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
