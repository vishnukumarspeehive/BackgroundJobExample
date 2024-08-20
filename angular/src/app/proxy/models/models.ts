import  { AuditedEntityDto, EntityDto } from '@abp/ng.core';

export interface CreateUpdateModelDto {
  maker: string;
  makerModel: string;
  remark: string;
  makerId: string;
}

export interface MakerLookupDto extends EntityDto<string> {
  name: string;
}

export interface ModelDto extends AuditedEntityDto<string> {
  maker: string;
  makerModel: string;
  remark: string;
  makerId: string;
  makerName: string;
}
