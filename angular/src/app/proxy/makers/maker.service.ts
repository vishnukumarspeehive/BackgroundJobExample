import  { CreateUpdateMakerDto, MakerDto, MakerModelLookupDto } from './models';
import { RestService } from '@abp/ng.core';
import  { ListResultDto, PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MakerService {
  apiName = 'Default';

  create = (input: CreateUpdateMakerDto) =>
    this.restService.request<any, MakerDto>({
      method: 'POST',
      url: `/api/app/maker`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/maker/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, MakerDto>({
      method: 'GET',
      url: `/api/app/maker/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<MakerDto>>({
      method: 'GET',
      url: `/api/app/maker`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getMakerModelLookup = () =>
    this.restService.request<any, ListResultDto<MakerModelLookupDto>>({
      method: 'GET',
      url: `/api/app/maker/makerModelLookup`,
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateMakerDto) =>
    this.restService.request<any, MakerDto>({
      method: 'PUT',
      url: `/api/app/maker/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
