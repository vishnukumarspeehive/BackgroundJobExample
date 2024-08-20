import { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateJobStatusDto {
  jobStatusName: string;
}

export interface JobStatusDto extends AuditedEntityDto<string> {
  jobStatusName: string;
}
