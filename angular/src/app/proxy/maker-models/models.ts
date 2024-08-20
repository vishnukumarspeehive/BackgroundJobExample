import { EntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CreateMakerModelDto {
  maker: string;
  makerModelName: string;
  remark: string;
}

export interface GetMakerModelListDto extends PagedAndSortedResultRequestDto {
  filter: string;
}

export interface MakerModelDto extends EntityDto<string> {
  maker: string;
  makerModelName: string;
  remark: string;
}

export interface UpdateMakerModelDto {
  maker: string;
  makerModelName: string;
  remark: string;
}
