import { CreateMakerModelDto, GetMakerModelListDto, MakerModelDto, UpdateMakerModelDto } from './models';
import { RestService } from '@abp/ng.core';
import { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MakerModelService {
  getMakerModelLookup(): any {
    throw new Error("Method not implemented.");
  }
  apiName = 'Default';

  create = (input: CreateMakerModelDto) =>
    this.restService.request<any, MakerModelDto>({
      method: 'POST',
      url: `/api/app/makerModel`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/makerModel/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, MakerModelDto>({
      method: 'GET',
      url: `/api/app/makerModel/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: GetMakerModelListDto) =>
    this.restService.request<any, PagedResultDto<MakerModelDto>>({
      method: 'GET',
      url: `/api/app/makerModel`,
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: UpdateMakerModelDto) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/makerModel/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
