import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateSparepartDto {
  vessel: string;
  equipmentName: string;
  equipmentCode: string;
  sparepartsDescription: string;
  partNumber: string;
  drawingNumber: string;
  specification: string;
  postionNumber: string;
}

export interface SparepartDto extends AuditedEntityDto<string> {
  vessel: string;
  equipmentName: string;
  equipmentCode: string;
  sparepartsDescription: string;
  partNumber: string;
  drawingNumber: string;
  specification: string;
  postionNumber: string;
}
