import { EntityDto } from '@abp/ng.core';

export interface CreateUpdateMakerDto {
  name: string;
  code: string;
  country: string;
}

export interface MakerDto extends EntityDto<string> {
  makerModelId: string;
  maker: string;
  name: string;
  code: string;
  country: string;
}

export interface MakerModelLookupDto extends EntityDto<string> {
  maker: string;
}
