import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateJobTypeDto {
  jobTypeName: string;
}

export interface JobTypeDto extends AuditedEntityDto<string> {
  jobTypeName: string;
}
