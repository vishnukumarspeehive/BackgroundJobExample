import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateMaintenanceTypeDto {
  maintenanceTypeName: string;
}

export interface MaintenanceTypeDto extends AuditedEntityDto<string> {
  maintenanceTypeName: string;
}
