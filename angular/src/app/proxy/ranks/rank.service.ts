import type { CreateUpdateRankDto, RankDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RankService {
  apiName = 'Default';

  create = (input: CreateUpdateRankDto) =>
    this.restService.request<any, RankDto>({
      method: 'POST',
      url: `/api/app/rank`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/rank/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, RankDto>({
      method: 'GET',
      url: `/api/app/rank/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<RankDto>>({
      method: 'GET',
      url: `/api/app/rank`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateRankDto) =>
    this.restService.request<any, RankDto>({
      method: 'PUT',
      url: `/api/app/rank/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
