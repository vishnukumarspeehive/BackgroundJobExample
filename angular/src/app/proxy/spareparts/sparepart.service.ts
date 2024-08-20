import type { CreateUpdateSparepartDto, SparepartDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SparepartService {
  apiName = 'Default';

  create = (input: CreateUpdateSparepartDto) =>
    this.restService.request<any, SparepartDto>({
      method: 'POST',
      url: `/api/app/sparepart`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/sparepart/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, SparepartDto>({
      method: 'GET',
      url: `/api/app/sparepart/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<SparepartDto>>({
      method: 'GET',
      url: `/api/app/sparepart`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateSparepartDto) =>
    this.restService.request<any, SparepartDto>({
      method: 'PUT',
      url: `/api/app/sparepart/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
