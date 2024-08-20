import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateReportbyDto {
  reportByName: string;
}

export interface ReportbyDto extends AuditedEntityDto<string> {
  reportByName: string;
}
