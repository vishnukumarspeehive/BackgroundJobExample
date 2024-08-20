import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateEquipmentTypeDto {
  equipmentTypeName: string;
}

export interface EquipmentTypeDto extends AuditedEntityDto<string> {
  equipmentTypeName: string;
}
