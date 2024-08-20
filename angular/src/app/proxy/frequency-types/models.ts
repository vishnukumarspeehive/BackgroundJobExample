import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateFrequencyTypeDto {
  frequencyTypeName: string;
}

export interface FrequencyTypeDto extends AuditedEntityDto<string> {
  frequencyTypeName: string;
}
