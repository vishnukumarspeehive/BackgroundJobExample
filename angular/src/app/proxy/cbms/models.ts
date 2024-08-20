import type { AuditedEntityDto } from '@abp/ng.core';

export interface CBMDto extends AuditedEntityDto<string> {
  cbmName: string;
}

export interface CreateUpdateCBMDto {
  cbmName: string;
}
