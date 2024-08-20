import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateCriticalDto {
  criticalName: string;
}

export interface CriticalDto extends AuditedEntityDto<string> {
  criticalName: string;
}
