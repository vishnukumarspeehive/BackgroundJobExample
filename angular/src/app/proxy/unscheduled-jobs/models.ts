import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateUnscheduledJobDto extends AuditedEntityDto<string> {
  equipmentName: string;
  jobOrder: number;
  title: string;
  jobReportedDate: string;
  reportedBy: string;
  status: string;
  vessel: string;
  deleteStatus: string;
  jobCompletedDate: string;
  remark: string;
}

export interface UnscheduledJobDto extends AuditedEntityDto<string> {
  equipmentName: string;
  jobOrder: number;
  title: string;
  jobReportedDate: string;
  reportedBy: string;
  status: string;
  vessel: string;
  deleteStatus: string;
  jobCompletedDate: string;
  remark: string;
}
