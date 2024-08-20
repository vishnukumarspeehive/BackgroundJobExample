import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateEquipmentStatusDto {
  equipmentStatusName: string;
}

export interface EquipmentStatusDto extends AuditedEntityDto<string> {
  equipmentStatusName: string;
}
