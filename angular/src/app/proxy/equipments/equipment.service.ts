import { CreateUpdateEquipmentDto, EquipmentDto } from './models';
import { RestService } from '@abp/ng.core';
import { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Equipment, TreeStructure } from '../models';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  apiName = 'Default';

  addEquipmentByNewEquipment = (newEquipment: CreateUpdateEquipmentDto) =>
    this.restService.request<any, Equipment>({
      method: 'POST',
      url: `/api/app/equipment/AddEquipment`,
      body: newEquipment,
    },
    { apiName: this.apiName });

  create = (input: CreateUpdateEquipmentDto) =>
    this.restService.request<any, EquipmentDto>({
      method: 'POST',
      url: `/api/app/equipment`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/equipment/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, EquipmentDto>({
      method: 'GET',
      url: `/api/app/equipment/${id}`,
    },
    { apiName: this.apiName });

  getEquipmentDetailsByEquipmentCodeAndVesselName = (equipmentCode: string, vesselName: string) =>
    this.restService.request<any, EquipmentDto>({
      method: 'GET',
      url: `/api/app/equipment/equipmentDetails`,
      params: { equipmentCode: equipmentCode, vesselName: vesselName },
    },
    { apiName: this.apiName });

  getEquipmentList = () =>
    this.restService.request<any, EquipmentDto[]>({
      method: 'GET',
      url: `/api/app/equipment/equipmentList`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<EquipmentDto>>({
      method: 'GET',
      url: `/api/app/equipment`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  populateTreeByVesselNameAndVesselId = (vesselName: string, vesselId: string) =>
    this.restService.request<any, TreeStructure[]>({
      method: 'GET',
      url: `/api/app/equipment/populateTree/${vesselId}`,
      params: { vesselName: vesselName },
    },
    { apiName: this.apiName });

  selctedEquipmentByEqpcode = (eqpcode: string) =>
    this.restService.request<any, Equipment>({
      method: 'GET',
      url: `/api/app/equipment/selctedEquipment`,
      params: { eqpcode: eqpcode },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateEquipmentDto) =>
    this.restService.request<any, EquipmentDto>({
      method: 'PUT',
      url: `/api/app/equipment/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  test = () =>
    this.restService.request<any, string>({
      method: 'GET',
      responseType: 'text',
      url: `/api/app/equipment/test`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
