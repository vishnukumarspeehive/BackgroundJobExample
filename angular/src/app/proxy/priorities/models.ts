import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdatePriorityDto {
  priorityName: string;
}

export interface PriorityDto extends AuditedEntityDto<string> {
  priorityName: string;
}
