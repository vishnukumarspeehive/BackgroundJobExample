import { AuditedEntityDto } from '@abp/ng.core';

export interface BreakDownJobDto extends AuditedEntityDto<string> {
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

export interface CreateUpdateBreakDownJobDto {
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
