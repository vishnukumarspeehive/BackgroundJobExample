import { CreateUpdateModelDto, MakerLookupDto, ModelDto } from './models';
import { RestService } from '@abp/ng.core';
import { ListResultDto, PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  apiName = 'Default';

  create = (input: CreateUpdateModelDto) =>
    this.restService.request<any, ModelDto>({
      method: 'POST',
      url: `/api/app/model`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/model/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, ModelDto>({
      method: 'GET',
      url: `/api/app/model/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<ModelDto>>({
      method: 'GET',
      url: `/api/app/model`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getMakerLookup = () =>
    this.restService.request<any, ListResultDto<MakerLookupDto>>({
      method: 'GET',
      url: `/api/app/model/makerLookup`,
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateModelDto) =>
    this.restService.request<any, ModelDto>({
      method: 'PUT',
      url: `/api/app/model/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
