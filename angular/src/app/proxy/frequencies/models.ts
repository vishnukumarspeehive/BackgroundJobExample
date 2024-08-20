import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateFrequencyDto {
  frequencyName: string;
}

export interface FrequencyDto extends AuditedEntityDto<string> {
  frequencyName: string;
}
